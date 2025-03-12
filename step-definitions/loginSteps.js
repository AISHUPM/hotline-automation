const {Given, When,Then} = require('@cucumber/cucumber');
const { remote } = require('webdriverio');
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
Given(/^I am on the Hotline dashboard$/, async () => {
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
When(/^The user punch in$/, async () => {
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
When(/^The user navigates to Campaigns$/, async () =>{
    console.log("Searching for Campaigns tab...");
    const Campaigns = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/navigation_campaign")');
    await Campaigns.waitForExist({ timeout: 5000 });
    if (await Campaigns.isDisplayed()) {
        console.log("✅ Campaigns found!");
        await Campaigns.click();
        console.log("✅ Successfully navigated to Campaigns!");
    } else {
        throw new Error("❌ Campaigns not found!");
    }
    await driver.pause(2000);
});
When(/^User is entering the Campaigns$/, async () =>{
    console.log("Let's get started");
    const getStarted = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/btnGetStarted")');
    await getStarted.waitForExist({ timeout: 5000 });
    if (await getStarted.isDisplayed()) {
        console.log("✅ Let's start button found!");
        await getStarted.click();
    //     console.log("✅ Successfully entered the Campaigns!");
    // } else {
    //     throw new Error("❌ Campaigns not found!");
    }
    await driver.pause(2000);
    });
Then(/^User opens the Smartlist Campaign$/, async () => {
    console.log("First Trip SmartList");
        const smartList=await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/icForwardArrow")');
        await smartList.waitForExist({ timeout: 5000 });
        if (await smartList.isDisplayed()) {
            console.log("SmartList campaign opened");
            await smartList.click();
        }
        await driver.pause(2000);
});
When(/^User enters First trip Smart List$/, async () => {
    console.log("Welcome to First Trip SmartList");
        const letsStart=await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/btnLetsStartDialing")');
        await letsStart.waitForExist({ timeout: 5000 });
        if (await letsStart.isDisplayed()) {
            console.log("User entered the Smartlist");
            await letsStart.click();
        }
        await driver.pause(2000);
});
Then(/^the user verifies the pending section$/, async () => {
    const pendingSection = await $('android=new UiSelector().text("Pending")');
    await pendingSection.waitForExist({ timeout: 10000 });
    await expect(pendingSection).toBeDisplayed();
    console.log("Pending section verified successfully!");
    await driver.pause(2000);
});
let previousLeadNumber = null; // Global variable to store the fetched number
When(/^Capturing the first lead name$/, async () => {
    try {
        const leadNumberElement = await driver.$("id=com.vahan.hotline:id/tvLeadNumber");
        const leadNumberText = await leadNumberElement.getText();
        global.previousLeadNumber = leadNumberText.match(/\d+/)?.[0] || leadNumberText; // Store extracted number globally
        console.log("📌 First captured lead number:", global.previousLeadNumber);
    } catch (error) {
        console.error("❌ Error fetching number:", error);
    } 
    await driver.pause(3000);
});
Then(/^the user clicks on Start Auto Dialing if leads exist$/, async () => {
    const pendingCount= await $('android=new UiSelector().resourceId("com.vahan.hotline:id/tvTabCount")');
    const pendingCountText = await pendingCount.getText();
    const pendingLeads = parseInt(pendingCountText);

    if (pendingLeads > 0) {
        const startDialingButton = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/btnAutoDial")');
        await expect(startDialingButton).toBeDisplayed();
        await startDialingButton.click();
        console.log("Start Auto Dialing clicked!");
    } else {
        console.log('No leads available for auto dialing.');
    }
    await driver.pause(3000);
});   
Then(/^User checks if the previous calls pop-up appears$/, async () => {
    try {
        console.log("Checking if the popup appears...");

        // Define the locator for the popup
        const popupSelector = 'com.vahan.hotline:id/afterCallNoteCardView';

        // Try to find the popup with a timeout of 3 seconds
        const popupElement = await driver.$(`android.widget.FrameLayout[id="${popupSelector}"]`);

        if (await popupElement.isExisting()) {
            console.log("Popup appeared. Handling it...");
            await popupElement.click(); // Adjust handling as needed (dismiss, enter text, etc.)
        } else {
            console.log("Popup did not appear. Continuing with the next steps...");
        }

        // Continue with the rest of the test script
        console.log("Executing next steps...");

    } catch (error) {
        console.error("Error occurred:", error);
    } 
    await driver.pause(10000);
});
Then(/^the user ends the call$/, async () => {
    const endCallButton= await $('android=new UiSelector().resourceId("com.google.android.dialer:id/incall_end_call")');
    await endCallButton.click();
        console.log("Call ended");
        // Wait for the call note pop-up
        await driver.pause(3000);
});
When(/^The Call note pop up appears$/, async () => {
    await driver.pause(3000); // Wait for the pop-up to appear
    const callNote = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/chip_connected_callback")');
    if (await callNote.isDisplayed()) {
        await callNote.click();
        console.log("Call note selected");
    } else {
        console.log("Call note pop-up did not appear");
    }
});
When(/^The user saves the call note$/, async () => {
    const saveButton = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/btnSaveAfterCallNote")');
    if (await saveButton.isDisplayed()) {
        await saveButton.click();
        console.log("Call note saved");
    } else {
        console.log("Save button not found!");
    }
    // Wait for the action to complete
    await driver.pause(5000);
});
Then(/^Verify if the previously stored number is present$/, async () => {
    try {
        console.log("🔎 Checking if the stored lead number is still present...");

        const mainScreenElement = await driver.$("id=com.vahan.hotline:id/mainContent");
        if (!(await mainScreenElement.isExisting())) {
            console.log("❌ Main content screen is NOT displayed.");
            return;
        }

        const newLeadNumberElement = await driver.$("id=com.vahan.hotline:id/tvLeadNumber");
        const newLeadNumberText = await newLeadNumberElement.getText();
        const currentLeadNumber = newLeadNumberText.match(/\d+/)?.[0] || newLeadNumberText;

        console.log("🔹 Previously stored lead number:", global.previousLeadNumber);
        console.log("🔹 Current lead number on screen:", currentLeadNumber);

        if (global.previousLeadNumber === currentLeadNumber) {
            console.log("✅ The stored lead number is still present.");
        } else {
            console.log("❌ The lead number has changed.");
        }

        // ✅ Store the new lead number for next check
        global.previousLeadNumber = currentLeadNumber;
        console.log("📌 Updated stored lead number for next check:", global.previousLeadNumber);

    } catch (error) {
        console.error("❌ Error verifying the lead number:", error);
    }
    await driver.pause(2000);
});

Then(/^The user ends the second call$/, async () => {
    const endCall= await $('android=new UiSelector().resourceId("com.google.android.dialer:id/incall_end_call")');
    await endCall.click();
        console.log("Call ended");
        // Wait for the call note pop-up
        await driver.pause(3000);
});
When(/^The new Call note pop up appears$/, async () => {
    await driver.pause(3000); // Wait for the pop-up to appear
    const newcallNote = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/chip_not_connected_not_received")');
    if (await newcallNote.isDisplayed()) {
        await newcallNote.click();
        console.log("Call note selected as 'Not Connected' ");
    } else {
        console.log("Call note pop-up did not appear");
    }
});
When(/^The user saves the new call note$/, async () => {
    const save = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/btnSaveAfterCallNote")');
    if (await save.isDisplayed()) {
        await save.click();
        console.log("Call note saved");
    } else {
        console.log("Save button not found!");
    }
    // Wait for the action to complete
    await driver.pause(3000);
});
Then(/^User pauses the Autodialler$/, async () => {
    const pauseButton = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/btnAutoDial")');
    if (await pauseButton.isDisplayed()) {
        await pauseButton.click();
        console.log("Auto-dialer paused");
    } else {
        console.log("Auto-dialer button not found!");
    }
// Wait for the action to complete
    await driver.pause(3000);
});
Then(/^User navigates back to campaigns page$/, async () =>{
    const backButton = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/ivBack")');
    if (await backButton.isDisplayed()) {
        await backButton.click();
        console.log("User is in pending section");
    } else {
        console.log("User is not in pending section");
    }
    await driver.pause(3000);
});
Then(/^User navigates back to welcome screen$/, async () =>{
    const backButton = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/ivBack")');
    if (await backButton.isDisplayed()) {
        await backButton.click();
        console.log("User is in welcome screen of SmartList");
    } else {
        console.log("User is not in Welcome screen of SmartList");
    }
    await driver.pause(3000);
});
Then(/^User navigates back to campaigns Page$/, async () =>{
    const backButton = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/ivBack")');
    if (await backButton.isDisplayed()) {
        await backButton.click();
        console.log("User is in Home Page");
    } else {
        console.log("User is not in Home Page");
    }
    await driver.pause(10000);
});
Then(/^The user clicks the RNR campaign$/, async () => {
        // Locate the RNR campaign entry using UiSelector with instance(1)
        const rnrEntry = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/icForwardArrow").instance(1)');

        // Wait for the element to exist
        await rnrEntry.waitForExist({ timeout: 5000 });

        // Check if the element is displayed before clicking
        if (await rnrEntry.isDisplayed()) {
            console.log("✅ RNR campaign entry is visible. Clicking now...");
            await rnrEntry.click();
        } else {
            console.log("❌ RNR campaign entry is not visible.");
        }
    await driver.pause(5000);
});

Then(/^Click on the dropdown$/, async () => {
    try {
        // Locate the dropdown using UiSelector with text "Select a date"
        const dropdownElement = await driver.$('android=new UiSelector().text("Select a date")');

        // Check if the dropdown is visible before clicking
        if (await dropdownElement.isDisplayed()) {
            await dropdownElement.click();
            console.log("✅ Successfully clicked on the dropdown.");
        } else {
            console.log("❌ Dropdown is not visible on the screen.");
        }
    } catch (error) {
        console.error("❌ Error clicking on the dropdown:", error);
    }
    await driver.pause(3000);
});

Then(/^Click on the "Today" button$/, async () => {
    try {
        // Locate the button using UiSelector with text "Today"
        const todayButton = await driver.$('android=new UiSelector().text("Today")');

        // Check if the button is visible before clicking
        if (await todayButton.isDisplayed()) {
            await todayButton.click();
            console.log('✅ Successfully clicked on the "Today" button.');
        } else {
            console.log('❌ "Today" button is not visible on the screen.');
        }
    } catch (error) {
        console.error('Error clicking on the "Today" button:', error);
    }
    await driver.pause(3000);
});
Then(/^Click on the "Let's Start" button$/, async () => {
        const letsStartButton = await driver.$("id=com.vahan.hotline:id/btnLetsStartDialing");

        // Check if the button is visible before clicking
        if (await letsStartButton.isDisplayed()) {
            await letsStartButton.click();
            console.log('✅ Successfully clicked on the "Let\'s Start" button.');
        } else {
            console.log('❌ "Let\'s Start" button is not visible on the screen.');
        }
    await driver.pause(3000);
});
Then(/^Verify the text "RNR Candidates" on the screen$/, async () => {
        // Locate the element using its resource ID
        const campaignTitleElement = await driver.$("id=com.vahan.hotline:id/tvCampaignTypeTitle");

        // Check if the element is displayed
        if (await campaignTitleElement.isDisplayed()) {
            // Get the text from the element
            const campaignText = await campaignTitleElement.getText();
            console.log('Fetched text:', campaignText);

            // Verify if the text matches "RNR candidates"
            if (campaignText.trim() === "RNR Candidates") {
                console.log('✅ Text verification passed: "RNR candidates" is displayed.');
            } else {
                console.log(`❌ Text verification failed. Expected: "RNR candidates", Found: "${campaignText}"`);
            }
        } else {
            console.log('❌ The element for "RNR candidates" is not visible on the screen.');
        }
    await driver.pause(3000);
});
Then(/^Fetch all phone numbers and verify stored number$/, async () => {
    try {
        console.log("📌 Fetching all phone numbers from the screen...");

        // Ensure the main content is displayed before proceeding
        const mainScreenElement = await driver.$("id=com.vahan.hotline:id/mainContent");
        if (!(await mainScreenElement.isExisting())) {
            console.log("❌ Main content screen is NOT displayed.");
            return;
        }

        // Fetch all TextView elements from the screen
        const allTextElements = await driver.$$("//android.widget.TextView");

        if (allTextElements.length === 0) {
            console.log("❌ No text elements found on the screen.");
            return;
        }

        // Extract numbers from the text elements
        const fetchedNumbers = [];
        for (let element of allTextElements) {
            const text = await element.getText();
            const phoneNumber = text.match(/\d{10}/)?.[0]; // Extract 10-digit numbers
            if (phoneNumber) {
                fetchedNumbers.push(phoneNumber);
            }
        }

        console.log("📜 All phone numbers on the screen:", fetchedNumbers);

        // Compare the stored lead number with the fetched numbers
        if (fetchedNumbers.includes(global.previousLeadNumber)) {
            console.log(`✅ The stored lead number ${global.previousLeadNumber} is present on the screen.`);
        } else {
            console.log(`❌ The stored lead number ${global.previousLeadNumber} is NOT found on the screen.`);
        }
    } catch (error) {
        console.error("❌ Error fetching phone numbers:", error);
    }
    await driver.pause(3000);
});









