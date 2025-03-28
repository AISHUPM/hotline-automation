const axios = require('axios');
const fs = require('fs');

const slackWebhookUrl = 'YOUR_SLACK_WEBHOOK_URL';

// Read the report content
const reportSummary = fs.readFileSync('./allure-report/widgets/summary.json', 'utf-8');
const reportData = JSON.parse(reportSummary);

const message = {
    text: `🚀 *Appium Test Execution Report*`,
    attachments: [
        {
            color: reportData.statistic.failed > 0 ? "#FF0000" : "#36a64f",
            title: "Test Summary",
            fields: [
                { title: "✅ Passed", value: `${reportData.statistic.passed}`, short: true },
                { title: "❌ Failed", value: `${reportData.statistic.failed}`, short: true },
                { title: "⏱️ Duration", value: `${reportData.time.duration / 1000}s`, short: true }
            ],
            footer: "Appium Test Report",
            ts: Math.floor(Date.now() / 1000)
        }
    ]
};

// Send the report to Slack
axios.post(slackWebhookUrl, message)
    .then(() => console.log('✅ Report sent to Slack!'))
    .catch(error => console.error(`❌ Error sending report: ${error}`));
