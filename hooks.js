const { exec } = require('child_process');

AfterAll(() => {
    exec('node slackReportSender.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`❌ Error sending report: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`⚠️ Stderr: ${stderr}`);
            return;
        }
        console.log(`✅ Report sent to Slack: ${stdout}`);
    });
});
