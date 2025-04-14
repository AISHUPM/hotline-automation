const {Given, When,Then} = require('@cucumber/cucumber');
const { remote } = require('webdriverio');
const { faker } = require('@faker-js/faker');
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

    await driver.pause(5000); 
});
Then(/^the user clicks on ok to close the default phone app pop up$/, async () => {
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
    await driver.pause(3000); // Pause to observe the result
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
    await driver.pause(2000);
});   
Then(/^User checks if the previous calls pop-up appears$/, async () => {
        const callNotePopupSelector = 'id=com.vahan.hotline:id/callNoteHeadingContainer';
        const saveButtonSelector = 'id=com.vahan.hotline:id/btnSaveAfterCallNote';
        try {
            const popup = await $(callNotePopupSelector);
        
            if (await popup.isDisplayed()) {
                console.log('Call Note popup appeared');
                const saveButton = await $(saveButtonSelector);
                await saveButton.click();
                console.log('Clicked on Save');
            } else {
                console.log('Call Note popup not displayed. Proceeding...');
                // Proceed with next steps
            }
        } catch (error) {
            console.log('Popup not found. Proceeding...');
            // Proceed with next steps
        }
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
    await driver.pause(5000);
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
    await driver.pause(5000);
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
When(/^Capture and store the first lead number from RNR$/, async () => {
    try {
        // Locate the first lead number using the resource ID
        const rnrLead = await driver.$("id=com.vahan.hotline:id/tvLeadNumber");

        // Fetch the text value from the element
        const rnrleadnum = await rnrLead.getText();

        // Extract only numbers (if any) using regex
        global.firstLeadCaptured = rnrleadnum.match(/\d+/)?.[0] || rnrleadnum; 

        console.log("📌 First captured lead number:", global.firstLeadCaptured);
    } catch (error) {
        console.error("❌ Error fetching lead number:", error);
    } 
    await driver.pause(2000);  // Short pause after storing the number
});

// Then(/^Click on the RNR Auto Dial button$/, async () => {
//     try {
//         // Locate the Auto Dial button using its resource ID
//         const autoDialButton = await driver.$("id=com.vahan.hotline:id/btnAutoDial");

//         // Check if the button is displayed before clicking
//         if (await autoDialButton.isDisplayed()) {
//             await autoDialButton.click();
//             console.log("✅ Successfully clicked on the Auto Dial button.");
//         } else {
//             console.log("❌ Auto Dial button is not visible on the screen.");
//         }
//     } catch (error) {
//         console.error("❌ Error clicking on the Auto Dial button:", error);
//     }
//     await driver.pause(2000);  // Adding a short pause after clicking
// });
Then(/^The user clicks on RNR Start Auto Dialing$/, async () => {
    try {
        // Locate the Start Auto Dialing button
        const startDialingButton = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/btnAutoDial")');

        // Check if the button is displayed before clicking
        if (await startDialingButton.isDisplayed()) {
            await startDialingButton.click();
            console.log("✅ Start Auto Dialing clicked!");
        } else {
            console.log("❌ No leads available for auto dialing.");
        }
    } catch (error) {
        console.error("❌ Error clicking on Start Auto Dialing button:", error);
    }
    
    await driver.pause(3000); // Adding a short pause after clicking
});
  
Then(/^User checks if the previous calls pop-up appears in the RNR$/, async () => {
    try {
        console.log("Checking if the popup appears...");

        // Define the locator for the popup
        const rnrpopupSelector = 'com.vahan.hotline:id/afterCallNoteCardView';

        // Try to find the popup with a timeout of 3 seconds
        const rnrpopupElement = await driver.$(`android.widget.FrameLayout[id="${popupSelector}"]`);

        if (await rnrpopupElement.isExisting()) {
            console.log("Popup appeared. Handling it...");
            await rnrpopupElement.click(); // Adjust handling as needed (dismiss, enter text, etc.)
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
Then(/^The user ends the call from RNR$/, async () => {
    const endCallrnr= await $('android=new UiSelector().resourceId("com.google.android.dialer:id/incall_end_call")');
    await endCallrnr.click();
        console.log("Call ended");
        // Wait for the call note pop-up
        await driver.pause(3000);
});
When(/^The Call note pop up appears in RNR$/, async () => {
    await driver.pause(3000); // Wait for the pop-up to appear
    const callNoternr = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/chip_connected_callback")');
    if (await callNoternr.isDisplayed()) {
        await callNoternr.click();
        console.log("Call note selected");
    } else {
        console.log("Call note pop-up did not appear");
    }
    await driver.pause(3000);
});
When(/^The user saves the call note in RNR$/, async () => {
    const saveButtonrnr = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/btnSaveAfterCallNote")');
    if (await saveButtonrnr.isDisplayed()) {
        await saveButtonrnr.click();
        console.log("Call note saved");
    } else {
        console.log("Save button not found!");
    }
    // Wait for the action to complete
    await driver.pause(5000);
});
Then(/^Verify if the previously stored number is present in RNR$/, async () => {
    try {
        console.log("🔎 Checking if the stored lead number is still present...");

        const mainScreen = await driver.$("id=com.vahan.hotline:id/mainContent");
        if (!(await mainScreen.isExisting())) {
            console.log("❌ Main content screen is NOT displayed.");
            return;
        }

        const newLeadNumber = await driver.$("id=com.vahan.hotline:id/tvLeadNumber");
        const newLeadText = await newLeadNumber.getText();
        const currentLeadNumber = newLeadText.match(/\d+/)?.[0] || newLeadText;

        console.log("🔹 Previously stored lead number:", global.firstLeadCaptured);
        console.log("🔹 Current lead number on screen:", currentLeadNumber);

        if (global.firstLeadCaptured === currentLeadNumber) {
            console.log("✅ The stored lead number is still present.");
        } else {
            console.log("❌ The lead number has changed.");
        }

        // ✅ Store the new lead number for next check
        global.firstLeadCaptured = currentLeadNumber;
        console.log("📌 Updated stored lead number for next check:", global.firstLeadCaptured);

    } catch (error) {
        console.error("❌ Error verifying the lead number:", error);
    }
    await driver.pause(4000);
});

Then(/^The user ends the second call in RNR$/, async () => {
    const endsCall= await $('android=new UiSelector().resourceId("com.google.android.dialer:id/incall_end_call")');
    await endsCall.click();
        console.log("Call ended");
        // Wait for the call note pop-up
        await driver.pause(3000);
});
When(/^The new Call note pop up appears in RNR$/, async () => {
    await driver.pause(3000); // Wait for the pop-up to appear
    const newcallNoternr = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/chip_not_connected_not_received")');
    if (await newcallNoternr.isDisplayed()) {
        await newcallNoternr.click();
        console.log("Call note selected as 'Not Connected' ");
    } else {
        console.log("Call note pop-up did not appear");
    }
    await driver.pause(3000);
});
When(/^The user saves the new call note in RNR$/, async () => {
    const saveCall = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/btnSaveAfterCallNote")');
    if (await saveCall.isDisplayed()) {
        await saveCall.click();
        console.log("Call note saved");
    } else {
        console.log("Save button not found!");
    }
    // Wait for the action to complete
    await driver.pause(3000);
});
Then(/^The user clicks on the back button$/, async () => {
    try {
        // Locate the Back button using the resource ID
        const backButton = await driver.$("id=com.vahan.hotline:id/ivBack");

        // Check if the button is displayed before clicking
        if (await backButton.isDisplayed()) {
            await backButton.click();
            console.log("✅ Successfully clicked on the Back button.");
        } else {
            console.log("❌ Back button is not visible on the screen.");
        }
    } catch (error) {
        console.error("❌ Error clicking on the Back button:", error);
    }
    await driver.pause(4000); // Adding a short pause after clicking
});
Then(/^Fetch all phone numbers and verify the previous 2 stored numbers in RNR$/, async () => {
    try {
        console.log("📌 Fetching all phone numbers from the screen...");

        // Ensure the main content is displayed before proceeding
        const rnrpendingPage = await driver.$("id=com.vahan.hotline:id/mainContent");
        if (!(await rnrpendingPage.isExisting())) {
            console.log("❌ Main content screen is NOT displayed.");
            return;
        }

        // Fetch all TextView elements from the screen
        const alltextElements = await driver.$$("//android.widget.TextView");

        if (alltextElements.length === 0) {
            console.log("❌ No text elements found on the screen.");
            return;
        }

        // Extract numbers from the text elements
        const fetchedNums = [];
        for (let element of alltextElements) {
            const text = await element.getText();
            const phoneNum = text.match(/\d{10}/)?.[0]; // Extract 10-digit numbers
            if (phoneNum) {
                fetchedNums.push(phoneNum);
            }
        }

        console.log("📜 All phone numbers on the screen:", fetchedNums); // ✅ Fixed variable name

        // ✅ Check if the numbers from the 2nd and 3rd scripts are present
        const leadOne = global.firstLeadCaptured ?? "N/A";  // From 2nd script
        const leadTwo = global.currentLeadNumber ?? "N/A";  // From 3rd script

        console.log(`🔹 Checking stored lead numbers: ${leadOne}, ${leadTwo}`);

        const leadOneFound = fetchedNums.includes(leadOne);
        const leadTwoFound = fetchedNums.includes(leadTwo);

        if (leadOneFound && leadTwoFound) {
            console.log(`✅ Both stored lead numbers (${leadOne}, ${leadTwo}) are present in the list.`);
        } else if (leadOneFound) {
            console.log(`✅ The first stored lead number (${leadOne}) is present, but the second (${leadTwo}) is missing.`);
        } else if (leadTwoFound) {
            console.log(`✅ The second stored lead number (${leadTwo}) is present, but the first (${leadOne}) is missing.`);
        } else {
            console.log(`❌ Neither of the stored lead numbers (${leadOne}, ${leadTwo}) are found in the list.`);
        }

    } catch (error) {
        console.error("❌ Error fetching and verifying phone numbers:", error);
    }
    await driver.pause(4000);
});
Then(/^User navigates back to RNR welcome page$/, async () =>{
    const backButton = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/ivBack")');
    if (await backButton.isDisplayed()) {
        await backButton.click();
        console.log("User is in pending section");
    } else {
        console.log("User is not in pending section");
    }
    await driver.pause(3000);
});
Then(/^User navigates back to Home Page$/, async () =>{
    const backButton = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/ivBack")');
    if (await backButton.isDisplayed()) {
        await backButton.click();
        console.log("User is in welcome screen of SmartList");
    } else {
        console.log("User is not in Welcome screen of SmartList");
    }
    await driver.pause(3000);
});









