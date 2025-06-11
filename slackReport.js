require('dotenv').config({ path: '/Users/aishwarya/Desktop/Hotline-automation/slacktoken.env' });
 // ✅ Load env variables from .env

const axios = require('axios');
const fs = require('fs');
const { exec, execSync } = require('child_process');

// ✅ Use token from .env
const SLACK_TOKEN = process.env.SLACK_API_TOKEN;
if (!SLACK_TOKEN) {
    console.error("❌ SLACK_API_TOKEN not set in .env file");
    process.exit(1);
}

const CHANNEL_ID = process.env.CHANNEL_ID;
const REPORT_URL = 'http://127.0.0.1:5050';

if (fs.existsSync("/Users/aishwarya/Desktop/Hotline-automation/allure-results")) {
    fs.rmSync("/Users/aishwarya/Desktop/Hotline-automation/allure-results", { recursive: true, force: true });
    console.log('🗑️ Old Allure results cleared.');
}

const getReportStats = () => {
    const reportFile = './allure-report/widgets/summary.json';
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

const isPortInUse = (port) => {
    try {
        execSync(`lsof -i :${port}`);
        return true;
    } catch {
        return false;
    }
};

const startServer = () => {
    return new Promise((resolve, reject) => {
        if (!isPortInUse(5050)) {
            console.log('🚀 Starting server...');
            const serverProcess = exec('npx http-server -p 5050 allure-report');

            serverProcess.stdout.on('data', (data) => {
                console.log(`Server: ${data}`);
                if (data.includes('Starting up http-server')) {
                    console.log("✅ Server started successfully on port 5050.");
                }
            });

            serverProcess.stderr.on('data', (data) => {
                console.error(`Error: ${data}`);
            });

            serverProcess.on('close', (code) => {
                if (code === 0) {
                    resolve();
                } else {
                    reject(new Error(`Server failed to start with exit code ${code}`));
                }
            });

            setTimeout(() => {
                console.log('🛑 Stopping the server after 30 minutes...');
                serverProcess.kill();
            }, 1800000);
        } else {
            console.log('⚠️ Port 5050 is already in use. Skipping server startup.');
            resolve();
        }
    });
};

const sendReportToSlack = async () => {
    const stats = getReportStats();
    console.log(`📊 Sending Stats: ${JSON.stringify(stats)}`);

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
            console.error('❌ Failed to send report to Slack:', result.data.error);
        }
    } catch (error) {
        console.error('❌ Error sending report to Slack:', error);
    }
};

startServer()
    .then(() => {
        console.log('🟢 Server started successfully. Sending report to Slack...');
        sendReportToSlack();
    })
    .catch((error) => {
        console.error('❌ Error:', error);
    });
