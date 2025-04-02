const axios = require('axios');
const fs = require('fs');
const { exec, execSync } = require('child_process');
if (fs.existsSync("/Users/aishwarya/Desktop/Hotline-automation/allure-results")) {
    fs.rmSync("/Users/aishwarya/Desktop/Hotline-automation/allure-results", { recursive: true, force: true });
    console.log('🗑️ Old Allure results cleared.');
}
const SLACK_TOKEN = 'xoxb-11878976806-8655806195476-aUUHJHsbneAhrwm6q61Rt3E8';  // Slack bot token
const CHANNEL_ID = 'C06Q9GD0728';  // Slack channel ID
const REPORT_URL = 'http://127.0.0.1:5050';  // Updated to local server

// ✅ Function to extract report stats
const getReportStats = () => {
    const reportFile = './allure-report/widgets/summary.json';  // Corrected path
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
const startServer = () => {
    return new Promise((resolve, reject) => {
        if (!isPortInUse(5050)) {
            console.log('🚀 Starting server...');
            const serverProcess = exec('npx http-server -p 5050 allure-report');

            // Log server output
            serverProcess.stdout.on('data', (data) => {
                console.log(`Server: ${data}`);
                // Check if the server is starting successfully
                if (data.includes('Starting up http-server')) {
                    console.log("✅ Server started successfully on port 5050.");
                }
            });

            // Log any error output from the server
            serverProcess.stderr.on('data', (data) => {
                console.error(`Error: ${data}`);
            });

            // Ensure the server is fully started
            serverProcess.on('close', (code) => {
                if (code === 0) {
                    resolve();  // Server started successfully
                } else {
                    reject(new Error(`Server failed to start with exit code ${code}`));
                }
            });

            // Stop the server after 30 minutes
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

// ✅ Send report to Slack with detailed logs
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

// ✅ Start server and send the report once the server is fully up
startServer()
    .then(() => {
        console.log('🟢 Server started successfully. Sending report to Slack...');
        sendReportToSlack();
    })
    .catch((error) => {
        console.error('❌ Error:', error);
    });
