const {Given, When,Then} = require('@cucumber/cucumber');
const { remote } = require('webdriverio');

// Given(/^the user clicks on Let's get Started button$/, async () => {}
//     console.log("Checking if driver is initialized...");
//     console.log(driver); // Debugging: Check if driver is not null

    // if (!driver) {
    //     throw new Error("Webdriver on is not initialized. Check your configuration.");
    // }

//     const startButton = await driver.$('//android.widget.TextView[@text="Let\'s get Started"]');

//     await startButton.waitForExist({ timeout: 10000 });

//     if (await startButton.isExisting()) {
//         console.log("Start button found!");
//         await startButton.click();
//         console.log("Start button clicked successfully!");
//     } else {
//         throw new Error("Start button not found!");
//     }

//     await driver.pause(6000);
// });

Given(/^the user enters the mobile number$/, async () => {
    const mobileInput = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/edMobileNumber")');

    await mobileInput.waitForExist({ timeout: 10000 }); // Ensure element exists before interaction

    if (await mobileInput.isExisting()) {
        console.log("Mobile number field found!");

        await mobileInput.clearValue();
        await mobileInput.setValue("8660320147");

        console.log("Mobile number entered successfully!");
    } else {
        console.log("Mobile number field not found!");
    }

    await driver.pause(3000);
});
When(/^the user clicks on the Request OTP button$/, async () => {
    console.log("Waiting for Request OTP button...");

    // Locate the 'Request OTP' button using its resource ID
    const otpButton = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/rlRequestButtonOtp")');

    // Wait for the element to be present
    await otpButton.waitForExist({ timeout: 10000 });

    if (await otpButton.isDisplayed()) {
        console.log("Request OTP button found!");
        await otpButton.click();
        console.log("Request OTP button clicked successfully!");
    } else {
        throw new Error("Request OTP button not found!");
    }

    await driver.pause(3000); // Pause to observe the result
});
Then(/^the user enters the OTP$/, async () => {
    console.log("Waiting for Request OTP button...");

    // Locate the 'Request OTP' button using its resource ID
    const enterOtp = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/etOtp1")');
    const enterOtp1 = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/etOtp2")');
    const enterOtp2 = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/etOtp3")');
    const enterOtp3 = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/etOtp4")');

    // Wait for the element to be present
    await enterOtp.waitForExist({ timeout: 10000 });
   if (await enterOtp.isExisting()) {
        // await enterOtp.clearValue();
        await enterOtp.setValue("4");
        await enterOtp1.setValue("2");
        await enterOtp2.setValue("2");
        await enterOtp3.setValue("1");
        console.log("OTP entered successfully!");
    } else {
        console.log("OTP field not found!");
    }

    await driver.pause(5000); // Pause to observe the result
});
When(/^the user allows permissions for make calls$/, async () => {
    console.log("Checking for permission popup...");

    // Locate the permission popup dialog
    const permissionPopup = await driver.$('id=com.android.permissioncontroller:id/grant_dialog');

    // Check if the permission popup is displayed
    if (await permissionPopup.isDisplayed()) {
        console.log("Permission popup found!");

        // Locate the 'Allow' button for permissions
        const allowButton = await driver.$('id=com.android.permissioncontroller:id/permission_allow_button');

        // Check if the Allow button exists and click it
        if (await allowButton.isDisplayed()) {
            await allowButton.click();
            console.log("Clicked on Allow Button");
        } else {
            console.log("Permission Allow button not found");
        }
    } else {
        console.log("Permission popup not found");
    }

    await driver.pause(2000); // Small delay after clicking
});
When(/^the user allows Battery permission$/, async () => {
    const allowButton = await driver.$('id=android:id/button1');

    // Check if the 'Allow' button is displayed and click it
    if (await allowButton.isDisplayed()) {
        await allowButton.click();
        console.log("Clicked on Allow Button");
    } else {
        console.log("Permission Allow button not found");
    }
    await driver.pause(2000); // Pause to observe the result
});


