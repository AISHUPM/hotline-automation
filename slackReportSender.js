const axios = require('axios');
const fs = require('fs');
const { exec, execSync } = require('child_process');

const SLACK_TOKEN = 'xoxb-11878976806-8655806195476-aUUHJHsbneAhrwm6q61Rt3E8';  // Slack bot token
const CHANNEL_ID = 'C06Q9GD0728';  // Slack channel ID
const REPORT_URL = 'https://ce16-157-20-14-34.ngrok-free.app';  // Ngrok URL

// ✅ Function to extract report stats
const getReportStats = () => {
    const reportFile = './allure-results/widgets/summary.json';  // Allure report stats file
    if (!fs.existsSync(reportFile)) {
        console.error('❌ Report file not found!');
        return { passed: 0, failed: 0, skipped: 0, total: 0 };
    }

    const data = JSON.parse(fs.readFileSync(reportFile, 'utf-8'));
    return {
        passed: data.statistic.passed || 0,
        failed: data.statistic.failed || 0,
        skipped: data.statistic.skipped || 0,
        total: data.statistic.total || 0
    };
};

// ✅ Function to check if port 5050 is in use
const isPortInUse = (port) => {
    try {
        execSync(`lsof -i :${port}`);
        return true;  // Port is in use
    } catch {
        return false;  // Port is free
    }
};

// ✅ Start the local server only if port is free
if (!isPortInUse(5050)) {
    console.log('🚀 Starting server...');
    const serverProcess = exec('npx http-server -p 5050 allure-report');

    serverProcess.stdout.on('data', (data) => {
        console.log(`Server: ${data}`);
    });

    serverProcess.stderr.on('data', (data) => {
        console.error(`Error: ${data}`);
    });

    // Stop the server after 30 minutes
    setTimeout(() => {
        console.log('🛑 Stopping the server after 30 minutes...');
        serverProcess.kill();
    }, 1800000);
} else {
    console.log('⚠️ Port 5050 is already in use. Skipping server startup.');
}

// ✅ Send report to Slack
const sendReportToSlack = async () => {
    const stats = getReportStats();
    try {
        const result = await axios.post('https://slack.com/api/chat.postMessage', {
            channel: CHANNEL_ID,
            text: `📌 *Appium Test Report* 🚀\n
:white_check_mark: Passed: ${stats.passed}
:x: Failed: ${stats.failed}
:warning: Skipped: ${stats.skipped}
:bar_chart: Total: ${stats.total}
👉 <${REPORT_URL}|View Full Report>`
        }, {
            headers: {
                'Authorization': `Bearer ${SLACK_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });

        if (result.data.ok) {
            console.log('✅ Report shared in Slack successfully!');
        } else {
            console.error('❌ Failed to send report:', result.data);
        }
    } catch (error) {
        console.error('❌ Error sending report:', error);
    }
};

// ✅ Execute report sending
setTimeout(() => {
    sendReportToSlack();
}, 5000);  // Delay to ensure the report files are generated
