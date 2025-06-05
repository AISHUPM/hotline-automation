const {Given, When,Then} = require('@cucumber/cucumber');
const { remote } = require('webdriverio');
const { faker } = require('@faker-js/faker');
Given(/^User enters the mobile number$/, async () => {
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
When(/^User clicks on the Request OTP button$/, async () => {
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
Then(/^User enters the OTP$/, async () => {
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

    await driver.pause(5000); 
});
Then(/^User clicks on ok to close the default phone app pop up$/, async () => {
    try {
        const okButton = await driver.$('android=new UiSelector().resourceId("android:id/button1")');
        
        // Wait for the OK button to exist within a timeout of 5 seconds
        await okButton.waitForExist({ timeout: 5000 });
        
        if (await okButton.isDisplayed()) {
            console.log("OK button found!");
            await okButton.click();
            console.log("OK button clicked successfully!");
        } else {
            console.log("OK button is not displayed.");
        }
    } catch (error) {
        console.log("Pop-up did not appear or another error occurred: ", error.message);
    }
    
    // Proceed with the regular flow even if the pop-up doesn't appear
    console.log("Continuing with the rest of the test...");
    await driver.pause(6000); // Pause to observe the result
});
Given(/^User has successfully logged in$/, async () => {
    const text=await driver.$('id=com.vahan.hotline:id/tvGreetUser');
    if (await text.isExisting()) {
        const text1 = await text.getText();
        console.log(`📌 Found text: "${text1}"`);

        if (text1.includes("Hello aishwarya")) {
            console.log("✅ Expected text is present!");
        } else {
            throw new Error(`❌ Expected 'Hello aishwarya' but found '${text1}'`);
        }
    } else {
        throw new Error("❌ Element not found!");
    }
    await driver.pause(5000);
});
When(/^User punch in$/, async () => {
    console.log("🔄 Searching for Punch In button...");

    const punchInButton = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/btnPunchIn")');

    await punchInButton.waitForExist({ timeout: 5000 });

    if (await punchInButton.isDisplayed()) {
        console.log("✅ Punch In button found!");
        await punchInButton.click();
        console.log("✅ Successfully Punched in!");
    } else {
        throw new Error("❌ Punch In button not found!");
    }
    await driver.pause(5000);
});
When(/^User wants to refer a lead$/, async () => { 
    const referALeadButton = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/ivReferLead")');
    await referALeadButton.waitForExist({ timeout: 5000 });
    if (await referALeadButton.isDisplayed()) {
        console.log("✅ Refer a Lead button found!");
        await referALeadButton.click();
        console.log("✅ Successfully clicked on Refer a Lead button!");
    } else {
        throw new Error("❌ Refer a Lead button not found!");
    }
    await driver.pause(5000);
});
Then(/^User verifies the title of the screen$/, async () => {
    const title = await driver.$('android=new UiSelector().text("Refer a Lead")');
    await title.waitForExist({ timeout: 5000 });
    if (await title.isExisting()) {
        const titleText = await title.getText();
        console.log(`📌 Found text: "${titleText}"`);
        if (titleText.includes("Refer a Lead")) {
            console.log("✅ Expected text is present!");
        } else {
            throw new Error(`❌ Expected 'Refer a Lead' but found '${titleText}'`);
        }
    } else {
        throw new Error("❌ Element not found!");
    }
});
Then(/^User enters the Lead Name$/, async () => {
    const leadNameInput = await driver.$('android=new UiSelector().text("Enter Lead Name")');

    await leadNameInput.waitForExist({ timeout: 5000 }); // Ensure the element exists before interacting

    if (await leadNameInput.isExisting()) {
        console.log("Lead Name input field found!");

        // Generate a dummy name using faker
        const dummyName = faker.name.fullName();
        await leadNameInput.setValue(dummyName); // Set the generated dummy name
        console.log(`Lead Name "${dummyName}" entered successfully!`);
    } else {
        throw new Error("Lead Name input field not found!");
    }

    await driver.pause(3000); // Pause to observe the result
});
Then(/^User enters the Lead Phone Number$/, async () => {
    const leadPhoneInput = await driver.$('android=new UiSelector().text("Enter Lead Phone Number")');

    await leadPhoneInput.waitForExist({ timeout: 5000 }); // Ensure the element exists before interacting

    if (await leadPhoneInput.isExisting()) {
        console.log("Lead Phone Number input field found!");

        // Generate a dummy phone number using faker
        const dummyPhoneNumber = faker.phone.number('91##########');
        await leadPhoneInput.setValue(dummyPhoneNumber); // Set the generated dummy phone number
        console.log(`Lead Phone Number "${dummyPhoneNumber}" entered successfully!`);
    } else {
        throw new Error("Lead Phone Number input field not found!");
    }

    await driver.pause(3000); // Pause to observe the result
});
Then(/^User wants to select the City$/, async () => {
    const cityInput = await driver.$('android=new UiSelector().text("Select City")');

    await cityInput.waitForExist({ timeout: 5000 }); // Ensure the element exists before interacting

    if (await cityInput.isExisting()) {
        console.log("City input field found!");
        await cityInput.click();
        console.log("City input field clicked successfully!");
    } else {
        throw new Error("City input field not found!");
    }

    await driver.pause(3000); // Pause to observe the result
});
Then(/^User searches for the city and selects it$/, async () => {
    const searchInput = await driver.$('id=com.vahan.hotline:id/searchEditText');
    await searchInput.click();
    await searchInput.setValue('Bengaluru');
    await driver.pause(2000);

  // Step 2: Click on the suggestion or result using the fieldName id
  const cityOption = await driver.$('id=com.vahan.hotline:id/fieldName');
  await cityOption.click();
  console.log("✅ Clicked on Bengaluru option");
  await driver.pause(2000);
});
Then(/^User clicks on the Client field$/, async ()=> {
    const clientInput = await driver.$('android=new UiSelector().text("Enter Client Preference")');

    await clientInput.waitForExist({ timeout: 5000 }); // Ensure the element exists before interacting

    if (await clientInput.isExisting()) {
        console.log("client input field found!");
        await clientInput.click();
        console.log("Client input field clicked successfully!");
    } else {
        throw new Error("Client input field not found!");
    }
    await driver.pause(3000);
});
