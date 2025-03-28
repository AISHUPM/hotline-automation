const { exec } = require('child_process');

exports.config = {
    runner: 'local',
    specs: ['./features/**/*.feature'],
    exclude: [],
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
        }],
        ['json', {
            outputDir: './reports/json-results'
        }]
    ],

    services: [['appium', { command: 'appium' }]],

    // ✅ Send Slack report automatically after test execution
    onComplete: async () => {
        console.log('✅ Test execution completed! Starting server and sending report to Slack...');
        
        // Start the server and send the report
        exec('node slackReportSender.js', (error, stdout, stderr) => {
            if (error) {
                console.error(`❌ Error executing Slack report sender: ${error}`);
                return;
            }
            console.log(`✅ Slack report sent successfully:\n${stdout}`);
        });
    }
};
