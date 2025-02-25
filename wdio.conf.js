exports.config = {
    runner: 'local',
    specs: ['./features/**/*.feature'],
    exclude: [],
    maxInstances: 1,
    capabilities: [
        {
            platformName: "Android",
            "appium:deviceName": "emulator-5554",
            "appium:platformVersion": "14",
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
    reporters: ['dot'],
    services: [['appium', { command: 'appium' }]],  // ✅ Appium service runs correctly
};

