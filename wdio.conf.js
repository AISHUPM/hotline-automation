const { exec } = require('child_process');

exports.config = {
    runner: 'local',
    specs: ['./features/**/*.feature'],
    maxInstances: 1,

    capabilities: [
        {
            platformName: "Android",
            "appium:deviceName": "emulator-5554",
            "appium:platformVersion": "15",
            "appium:appPackage": "com.vahan.hotline",
            "appium:appActivity": "com.vahan.hotline.v2.ui.activities.HomeActivity",
            "appium:automationName": "UiAutomator2",
            "appium:fullReset": false,
            "appium:ensureWebviewsHavePages": true,
            "appium:newCommandTimeout": 300,
            "appium:adbExecTimeout": 20000,
            "appium:autoGrantPermissions": true
        }
    ],

    logLevel: 'info',
    framework: 'cucumber',
    cucumberOpts: {
        require: ['./step-definitions/**/*.js'],
        timeout: 60000
    },

    reporters: [
        'spec',
        ['allure', {
            outputDir: './allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false
        }]
    ],

    services: [['appium', { command: 'appium' }]],

    // ✅ Automatically generate Allure report and send it to Slack
    onComplete: async () => {
        console.log('✅ Test execution completed! Generating Allure report...');
        
        // Generate the Allure report after the test execution
        exec('npx allure generate ./allure-results --clean -o ./allure-report', (error, stdout, stderr) => {
            if (error) {
                console.error(`❌ Error generating Allure report: ${error}`);
                return;
            }
            console.log(`✅ Allure report generated successfully:\n${stdout}`);
            
            // Make sure the Allure report is successfully generated before sending the Slack message
            console.log('🔄 Sending the report to Slack...');
            // Wait for a few seconds to ensure the report is fully generated
            setTimeout(() => {
                exec('node slackReportSender.js', (error, stdout, stderr) => {
                    if (error) {
                        console.error(`❌ Error executing Slack report sender: ${error}`);
                        return;
                    }
                    console.log(`✅ Slack report sent successfully:\n${stdout}`);
                });
            }, 5000);  // Delay for 5 seconds before sending to Slack
        });
    }
};
