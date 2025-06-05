const {Given, When,Then} = require('@cucumber/cucumber');
const { remote } = require('webdriverio');
const { faker } = require('@faker-js/faker');
// Given(/^the user is on the main welcome screen$/, async () => {
//     // Wait for the main welcome screen to be displayed
//     const welcomeScreen = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/main")');
//     await welcomeScreen.waitForExist({ timeout: 20000 });

//     if (await welcomeScreen.isDisplayed()) {
//         console.log("Welcome screen is displayed!");
//     } else {
//         throw new Error("Welcome screen is not displayed!");
//     }

//     await driver.pause(3000); // Pause to observe the result
// });
// Given(/^User clicks on the Get Started button$/, async () => {
//     console.log("Waiting for Get Started button...");
//     // Locate the 'Get Started' button using its resource ID
//     const getStartedButton = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/rlButton")');
//     // Wait for the element to be present
//     await getStartedButton.waitForExist({ timeout: 20000 });

//     if (await getStartedButton.isDisplayed()) {
//         console.log("Get Started button found!");
//         await getStartedButton.click();
//         console.log("Get Started button clicked successfully!");
//     } else {
//         throw new Error("Get Started button not found!");
//     }
//     await driver.pause(3000); // Pause to observe the result
// });
/*Given(/^the user enters 6 digit number and requests for OTP$/, async () => {
    const mobileInput = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/edMobileNumber")');

    await mobileInput.waitForExist({ timeout: 10000 }); // Ensure element exists before interaction
    if (await mobileInput.isExisting()) {
        console.log("✅ Mobile number field found!");
        await mobileInput.clearValue();
        await mobileInput.setValue("866032");
        console.log("✅ Invalid mobile number entered successfully!");
    } else {
        throw new Error("❌ Mobile number field not found!");
    }
    // Locate the 'Request OTP' button
    const requestOTP = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/rlRequestButtonOtp")');
    await requestOTP.waitForExist({ timeout: 10000 });
    if (await requestOTP.isDisplayed()) {
        console.log("✅ Request OTP button found!");
        await requestOTP.click();
        console.log("✅ Request OTP button clicked successfully!");
    } else {
        throw new Error("❌ Request OTP button not found!");
    }
    // Wait briefly for the toast to appear
    await driver.pause(2000);
    // Capture and verify the toast message
    const toastMessage = await driver.$('//android.widget.Toast');
    const toastText = await toastMessage.getText();
    if (toastText === "Phone number must be 10 digits long") {
        console.log("✅ Error toast message verified: 'Phone number must be 10 digits long'");
    } else {
        throw new Error(`❌ Unexpected toast message: '${toastText}'`);
    }
    await driver.pause(3000);
});
Given(/^User clears the input field$/, async () => {
    // Locate the mobile number input field
    const mobileInput = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/edMobileNumber")');
    await mobileInput.waitForExist({ timeout: 10000 });
    if (await mobileInput.isExisting()) {
        console.log("✅ Mobile number field found!");
        await mobileInput.clearValue();
        console.log("✅ Mobile number field cleared successfully!");
    } else {
        throw new Error("❌ Mobile number field not found!");
    }
    await driver.pause(3000);
});*/
Given(/^Verify the field by entering valid number and request for OTP$/, async () => {
   const phoneInput = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/edMobileNumber")');
    await phoneInput.waitForExist({ timeout: 10000 });
    if (await phoneInput.isExisting()) {
        console.log("✅ Mobile number field found!");
        await phoneInput.clearValue();
        await phoneInput.setValue("8660320147");
        console.log("✅ Valid mobile number entered successfully!");
    } else {
        throw new Error("❌ Mobile number field not found!");
    }
    // Locate the 'Request OTP' button
    const requestOtpBtn = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/rlRequestButtonOtp")');
    await requestOtpBtn.waitForExist({ timeout: 10000 });
    if (await requestOtpBtn.isDisplayed()) {
        console.log("✅ Request OTP button found!");
        await requestOtpBtn.click();
        console.log("✅ Request OTP button clicked successfully!");
    } else {
        throw new Error("❌ Request OTP button not found!");
    }
    await driver.pause(3000);
});
/*Then(/^Verify by entering wrong OTP$/, async () => {
    console.log("Waiting for OTP input fields...");

    const enterOtp = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/etOtp1")');
    const enterOtp1 = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/etOtp2")');
    const enterOtp2 = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/etOtp3")');
    const enterOtp3 = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/etOtp4")');

    // Wait for the first OTP field to appear
    await enterOtp.waitForExist({ timeout: 10000 });

    if (await enterOtp.isExisting()) {
        await enterOtp.setValue("4");
        await enterOtp1.setValue("2");
        await enterOtp2.setValue("2");
        await enterOtp3.setValue("3");
        console.log("❌ Wrong OTP entered successfully!");
    } else {
        throw new Error("OTP input fields not found!");
    }

    await driver.pause(3000); // Pause to allow validation to trigger

    // Verify the invalid OTP error message
    const invalidOtpMessage = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/tvInvalidOtp")');

    await invalidOtpMessage.waitForExist({ timeout: 5000 });

    if (await invalidOtpMessage.isDisplayed()) {
        const messageText = await invalidOtpMessage.getText();
        if (messageText === "OTP entered is wrong") {
            console.log(`✅ Error message verified: '${messageText}'`);
        } else {
            console.log(`❌ Unexpected error message: '${messageText}'`);
        }
    } else {
        throw new Error("❌ Invalid OTP message not displayed!");
    }
    await driver.pause(3000);
});
  Then(/^User clears the OTP field$/, async () => {
    const otp1 = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/etOtp1")');
    const otp2 = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/etOtp2")');
    const otp3 = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/etOtp3")');
    const otp4 = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/etOtp4")');

    // Wait for the first OTP field to be visible
    await otp1.waitForExist({ timeout: 10000 });

    if (
        await otp1.isExisting() &&
        await otp2.isExisting() &&
        await otp3.isExisting() &&
        await otp4.isExisting()
    ) {
        await otp1.clearValue();
        await otp2.clearValue();
        await otp3.clearValue();
        await otp4.clearValue();

        console.log("✅ All OTP fields cleared successfully!");
    } else {
        throw new Error("❌ One or more OTP fields not found.");
    }

    await driver.pause(5000); 
});*/
Then(/^User enters valid OTP and proceeds$/, async () => {
    const validOtp = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/etOtp1")');
    const validOtp1 = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/etOtp2")');
    const validOtp2 = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/etOtp3")');
    const validOtp3 = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/etOtp4")');

    // Wait for the first OTP field to appear
    await  validOtp.waitForExist({ timeout: 10000 });

    if (await  validOtp.isExisting()) {
        await  validOtp.setValue("0");
        await  validOtp1.setValue("1");
        await  validOtp2.setValue("4");
        await  validOtp3.setValue("7");
        console.log("✅Valid entered successfully!");
    } else {
        throw new Error("OTP input fields not found!");
    }
    await driver.pause(3000); // Pause to allow validation to trigger
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
    await driver.pause(6000); // Pause to observe the result
});
/*Given(/^I am on the Hotline dashboard$/, async () => {
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
*/

When(/^Verify 'punch In' button$/, async () => {
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
// ----------------------------------------First Trip SmartList---------------------------------------------
// Entry Points for First Trip SmartList from Home Screen(Pick a SmartList button)
Given(/^Verify entering SmartList from Home Screen using 'Pick a SmartList' button$/, async () => {
    // 1. Click on 'PickSmartList' button
    const pickSmartListBtn = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/btnPickCampaign")');
    await pickSmartListBtn.waitForExist({ timeout: 10000 });

    if (await pickSmartListBtn.isDisplayed()) {
        await pickSmartListBtn.click();
        console.log("✅ 'PickSmartList' button clicked.");
    } else {
        throw new Error("❌ 'PickSmartList' button not found.");
    }

    await driver.pause(2000);

    // 2. Click on 'GetStarted' button
    const getStartedBtn = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/btnGetStarted")');
    await getStartedBtn.waitForExist({ timeout: 10000 });

    if (await getStartedBtn.isDisplayed()) {
        await getStartedBtn.click();
        console.log("✅ 'GetStarted' button clicked.");
    } else {
        throw new Error("❌ 'GetStarted' button not found.");
    }

    await driver.pause(3000);

    // 3. Click on SmartListCard (RelativeLayout - instance 2)
    const smartListCard = await driver.$('android=new UiSelector().className("android.widget.RelativeLayout").instance(2)');
    await smartListCard.waitForExist({ timeout: 10000 });

    if (await smartListCard.isDisplayed()) {
        await smartListCard.click();
        console.log("✅ SmartListCard opened.");
    } else {
        throw new Error("❌ SmartListCard not found.");
    }
    await driver.pause(3000); // Optional pause
});
Then(/^Verify back arrow button from SmartList welcome screen$/, async()=>{
    const backArrow = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/ivBack")');
    await backArrow.click();
        console.log("✅ Successfully clicked back Arrow");
    await driver.pause(2000);
});
Then(/^Verify navigating to home tab$/, async()=>{
     const homeTab = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/navigation_home")');
    await homeTab.click();
        console.log("✅ Successfully clicked on Home tab");
    await driver.pause(2000);
});
Then(/^Verify entering SmartList from Home Screen using 'See all' button$/, async()=>{
    const seeAllButton = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/tvSeeAllCampaigns")');
    if (await seeAllButton.isDisplayed()) {
        console.log("✅ See All button found!");
        await seeAllButton.click();
        console.log("✅ Successfully clicked 'See all button!");
    } else {
        throw new Error("❌ See all button not found!");
    }
    await driver.pause(2000);
     const smartListCard2 = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/icForwardArrow").instance(0)');
    await smartListCard2.waitForExist({ timeout: 10000 });

    if (await smartListCard2.isDisplayed()) {
        await smartListCard2.click();
        console.log("✅ SmartListCard opened.");
    } else {
        throw new Error("❌ SmartListCard not found.");
    }
    await driver.pause(3000); 
});
Then(/^Verify back arrow button from SmartList welcome screen1$/, async () => {
const backArrow1 = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/ivBack")');
    if (await backArrow1.isDisplayed()) {
        console.log("✅ Back arrow found!");
        await backArrow1.click();
        console.log("✅ Successfully clicked back Arrow");
    } else {
        throw new Error("❌ Back arrow not found!");
    }
    await driver.pause(2000);
});
Then(/^Verify navigating to home tab from campaigns tab$/, async () => {
    const homeTab2 = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/navigation_home")');
    if (await homeTab2.isDisplayed()) {
        await homeTab2.click();
        console.log("✅ Successfully clicked on Home tab");
        await driver.pause(2000);
    }
});
Then(/^Verify entering SmartList from Home Screen using smartList card$/, async () => {
    const smartListCard=await driver.$('android=new UiSelector().className("android.widget.RelativeLayout").instance(5)');
    if (await smartListCard.isDisplayed()) {
        console.log("✅ SmartList card found!");
        await smartListCard.click();
        console.log("✅ Successfully clicked 'SmartList card'!");
    } else {
        throw new Error("❌ SmartList card not found!");
    }
    await driver.pause(2000);
});
Then(/^Verify navigating to home tab from SmartList card using back arrow$/, async () => {
    const backArrow = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/ivBack")');
    if (await backArrow.isDisplayed()) {
        console.log("✅ Back arrow found!");
        await backArrow.click();
        console.log("✅ Successfully clicked back Arrow");
    } else {
        throw new Error("❌ Back arrow not found!");
    }
    await driver.pause(2000);
});
Then(/^Verify entering SmartList from Campaigns tab$/, async () => {
    await driver.pause(3000); // Give app time to render
    const Campaigns = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/navigation_campaign")');

    // await Campaigns.waitForDisplayed({ timeout: 10000 });
    if (await Campaigns.isDisplayed()) {
        console.log("✅ Campaigns found!");
        await Campaigns.click();
        console.log("✅ Successfully navigated to Campaigns!");
    } else {
        throw new Error("❌ Campaigns not found!");
    }

    await driver.pause(2000);

    const smartList = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/icForwardArrow").instance(0)');
    // await smartList.waitForDisplayed({ timeout: 10000 });
    if (await smartList.isDisplayed()) {
        console.log("✅ SmartList campaign opened");
        await smartList.click();
    } else {
        throw new Error("❌ SmartList campaign not visible");
    }

    await driver.pause(2000);
});
// -----------------------------------------------Date Range--------------------------------------------------

const moment = require('moment'); // Make sure moment is installed

Given(/^Verify the default date range when the app is opened for 1st time in the day$/, async () => {
    // Locate and get "From Date"
    const fromDateElement = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/tvFromDate")');
    await fromDateElement.waitForExist({ timeout: 5000 });
    const fromDateText = await fromDateElement.getText();
    console.log("📅 Stored From Date Text:", fromDateText);

    // Locate and get "To Date"
    const endDateElem = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/tvToDate")');
    await endDateElem.waitForExist({ timeout: 5000 });
    const endDateText = await endDateElem.getText();
    console.log("📅 Stored To Date Text:", endDateText);

    // Format expected dates as per app format "DD/MM/YYYY"
    const today = moment().format("DD/MM/YYYY");
    const twoDaysAgo = moment().subtract(2, 'days').format("DD/MM/YYYY");

    console.log("✅ Expected From Date:", twoDaysAgo);
    console.log("✅ Expected To Date:", today);

    // Compare actual with expected
    if (fromDateText !== twoDaysAgo) {
        throw new Error(`❌ From Date mismatch. Expected: ${twoDaysAgo}, Found: ${fromDateText}`);
    }
    if (endDateText !== today) {
        throw new Error(`❌ To Date mismatch. Expected: ${today}, Found: ${endDateText}`);
    }

    console.log("🎉 Default date range is correct!");
});
// Then(/^Verify selecting start and end date from the calendar by clicking it$/, async () => {
//     const DAYS_BACK = 29;

//     // Step 1: Click on the "From Date" field to open the calendar
//     const fromDateField = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/tvFromDate")');
//     await fromDateField.waitForExist({ timeout: 5000 });
//     await fromDateField.click();
//     console.log("📅 Clicked on From Date field to open calendar.");

//     // Step 2: Calculate start and end day numbers
//     const startDate = new Date();
//     startDate.setDate(startDate.getDate() - DAYS_BACK);
//     const startDay = startDate.getDate().toString(); // e.g., "2"

//     const today = new Date();
//     const endDay = today.getDate().toString(); // e.g., "4"

//     // Step 3: Click on the start date
//     const startDateElem = await $(`android=new UiSelector().text("${startDay}")`);
//     await startDateElem.click();
//     console.log(`✅ Start date selected: ${startDay}`);
//     await driver.pause(1000);

//     // Step 4: Click on the end date
//     const endDateElem = await $(`android=new UiSelector().text("${endDay}")`);
//     await endDateElem.click();
//     console.log(`✅ End date selected: ${endDay}`);
//     await driver.pause(1000);

//     // Optional: Click Save if required
//     // const saveButton = await $('android=new UiSelector().text("SAVE")');
//     // await saveButton.click();
//     // console.log("💾 Clicked Save.");
// });


// Then(/^Verify saving the selected date range$/, async () => {
//      const saveBtn=await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/confirm_button")');;
//     if (await saveBtn.isDisplayed()) {
//         console.log("✅ SmartList card found!");
//         await saveBtn.click();
//         console.log("✅ Successfully saved the date range");
//     } else {
//         throw new Error("❌ Date range not saved!");
//     }
//     await driver.pause(2000);
// });
// Then(/^Verify that the selected & saved dates are displayed on the welcome screen$/, async () => {
//     // Calculate expected start and end dates
//     const DAYS_BACK = 29;
//     const startDate = new Date();
//     startDate.setDate(startDate.getDate() - DAYS_BACK);
//     const endDate = new Date(); // today

//     // Helper to format date as dd/mm/yyyy
//     const formatToDDMMYYYY = (date) => {
//         const dd = String(date.getDate()).padStart(2, '0');
//         const mm = String(date.getMonth() + 1).padStart(2, '0');
//         const yyyy = date.getFullYear();
//         return `${dd}/${mm}/${yyyy}`;
//     };

//     const expectedStartText = formatToDDMMYYYY(startDate);
//     const expectedEndText = formatToDDMMYYYY(endDate);

//     // Verify From Date
//     const savedStartDateElem = await driver.$('id=com.vahan.hotline:id/tvFromDate');
//     const savedStartDateText = await savedStartDateElem.getText();
//     console.log(`Visible From Date: ${savedStartDateText}`);
//     expect(savedStartDateText).toBe(expectedStartText);

//     // Verify To Date
//     const savedEndDateElem = await driver.$('id=com.vahan.hotline:id/tvToDate');
//     const savedEndDateText = await savedEndDateElem.getText();
//     console.log(`Visible To Date: ${savedEndDateText}`);
//     expect(savedEndDateText).toBe(expectedEndText);
//     await driver.pause(2000);
// });
let selectedStartDate, selectedEndDate;

Then(/^Verify selecting start and end date from the calendar by clicking it$/, async () => {
    const DAYS_BACK = 29;

    const fromDateField = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/tvFromDate")');
    await fromDateField.waitForExist({ timeout: 5000 });
    await fromDateField.click();
    console.log("📅 Opened calendar.");

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - DAYS_BACK);
    selectedStartDate = startDate.toLocaleDateString('en-GB'); // "DD/MM/YYYY"
    const startDay = startDate.getDate().toString();

    const today = new Date();
    selectedEndDate = today.toLocaleDateString('en-GB');
    const endDay = today.getDate().toString();

    // Click start date
    const startElems = await $$(`android=new UiSelector().text("${startDay}")`);
    await startElems[0].click(); // safe default
    console.log(`✅ Selected start date: ${selectedStartDate}`);
    await driver.pause(1000);

    // Click end date, make sure it's not the same instance
    const endElems = await $$(`android=new UiSelector().text("${endDay}")`);
    if (startDay !== endDay && endElems.length > 1) {
        await endElems[1].click(); // second occurrence likely in next month
    } else {
        await endElems[0].click();
    }
    console.log(`✅ Selected end date: ${selectedEndDate}`);
    await driver.pause(1000);
});

Then(/^Verify saving the selected date range$/, async () => {
    const saveBtn = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/confirm_button")');

    // Wait for button to exist and be clickable
    await saveBtn.waitForExist({ timeout: 5000 });
    await saveBtn.waitForDisplayed({ timeout: 5000 });

    if (await saveBtn.isEnabled()) {
        await saveBtn.click();
        console.log("✅ Successfully saved the date range");
    } else {
        throw new Error("❌ Save button is not enabled!");
    }

    await driver.pause(2000);
});

Then(/^Verify selected date range is visible on home screen$/, async () => {
    if (!selectedStartDate || !selectedEndDate) {
        throw new Error("❌ selectedStartDate or selectedEndDate not set.");
    }

    const fromDateField = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/tvFromDate")');
    await fromDateField.waitForExist({ timeout: 5000 });
    const displayedFromDate = await fromDateField.getText();

    const toDateField = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/tvToDate")');
    await toDateField.waitForExist({ timeout: 5000 });
    const displayedToDate = await toDateField.getText();

    console.log(`🔍 Displayed From: ${displayedFromDate}`);
    console.log(`🔍 Displayed To: ${displayedToDate}`);
    console.log(`📅 Expected From: ${selectedStartDate}`);
    console.log(`📅 Expected To: ${selectedEndDate}`);

    if (displayedFromDate !== selectedStartDate) {
        throw new Error(`❌ From Date mismatch. Expected: ${selectedStartDate}, Found: ${displayedFromDate}`);
    }
    if (displayedToDate !== selectedEndDate) {
        throw new Error(`❌ To Date mismatch. Expected: ${selectedEndDate}, Found: ${displayedToDate}`);
    }

    console.log("🎉 Selected date range is correctly visible on the home screen!");
});


When(/^Verify by entering the date manually using the edit button in the calender and save it$/, async () =>{
    const calender = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/tvFromDate")');
    await calender.click();
    console.log("✅ Successfully clicked on Calender");
    await driver.pause(2000);

    const editButton = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/mtrl_picker_header_toggle")');
    await editButton.click();
    console.log("✅ Successfully clicked on Edit button");
    await driver.pause(2000);

    const startDateInput = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/etStartDate")');
    // Calculate start date (29 days before today) and end date (today) in mm/dd/yyyy format
    const today = new Date();
    const startDate = new Date();
    const formatMMDDYYYY = (date) => {
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        const yyyy = date.getFullYear();
        return `${mm}/${dd}/${yyyy}`;
    };

    const startDateStr = formatMMDDYYYY(startDate);
    const endDateStr = formatMMDDYYYY(today);

    await startDateInput.setValue(startDateStr);
    console.log(`✅ Start date entered successfully: ${startDateStr}`);
    const endDateInput = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/etEndDate")');
    await endDateInput.setValue(endDateStr);
    console.log(`✅ End date entered successfully: ${endDateStr}`);
    console.log("✅ End date entered successfully!");
});
// -----------------------------------------------Pending and called Section--------------------------------------------------
When(/^Verify 'Let's Start' button$/, async () => {
    console.log("Welcome to First Trip SmartList");
        const letsStart=await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/btnLetsStartDialing")');
        await letsStart.waitForExist({ timeout: 5000 });
        if (await letsStart.isDisplayed()) {
            console.log("User entered the Smartlist");
            await letsStart.click();
        }
        await driver.pause(2000);
});
Then(/^Verify the pending section$/, async () => {
    const pendingSection = await $('android=new UiSelector().text("Pending")');
    await pendingSection.waitForExist({ timeout: 10000 });
    await expect(pendingSection).toBeDisplayed();
    console.log("Pending section verified successfully!");
    await driver.pause(2000);
});
let previousLeadNumber = null; // Global variable to store the fetched number
When(/^Verify by capturing the first lead number$/, async () => {
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
Then(/^Verify Autodialler button if the leads exist$/, async () => {
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
    await driver.pause(5000);
});   
Then(/^Verify if the disposition appears for previous calls$/, async () => {
    try {
        console.log("🔍 Checking if the previous call popup appears...");

        // Define the selector for the popup
        const popupSelector = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/afterCallNoteCardView")');
        const popupExists = await popupSelector.isExisting();

        if (popupExists) {
            const connectedCallback = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/chip_connected_callback")');
            await connectedCallback.click();
            console.log("✅ Call note selected as 'Connected'");

            await driver.pause(3000);

            // Save the call note
            const saveButtonOne = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/btnSaveAfterCallNote")');
            if (await saveButtonOne.isDisplayed()) {
                await saveButtonOne.click();
                console.log("💾 Call note saved");
            } else {
                console.log("⚠️ Save button not found!");
            }
        } else {
            console.log("❌ Popup did not appear.");
        }

        // Start Auto Dialing regardless of popup
        console.log("➡️ Attempting to start Auto Dialing...");

        const startButton = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/btnAutoDial")');
        await startButton.waitForDisplayed({ timeout: 10000 });
        await startButton.click();

        console.log("📞 Start Auto Dialing clicked!");

        // Optional wait for next steps
        await driver.pause(5000);
        console.log("🚀 Moving to next test steps...");
        await driver.pause(10000);

    } catch (error) {
        console.error("❗ Error occurred in popup check step:", error);
    }
    await driver.pause(8000);
});

Then(/^Verify by ending the call after it is connected$/, async () => {
    const endCallButton= await $('android=new UiSelector().resourceId("com.google.android.dialer:id/incall_end_call")');
    await endCallButton.click();
        console.log("Call ended");
        // Wait for the call note pop-up
        await driver.pause(2000);
});
When(/^Verify that the call note pop up appears after the call ends$/, async () => {
    await driver.pause(3000); // Wait for the pop-up to appear
    const callNote = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/chip_connected_interested")');
    if (await callNote.isDisplayed()) {
        await callNote.click();
        console.log("✅ Call note selected");
    } else {
        console.log("❌ Call note pop-up did not appear");
    }
    await driver.pause(2000);
});
When(/^Verify the save button$/, async () => {
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
Then(/^Verify if the previously stored number is present in the pending section$/, async () => {
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
Then(/^Verify when the user ends the second call without having it connected$/, async () => {
    const endCall= await $('android=new UiSelector().resourceId("com.google.android.dialer:id/incall_end_call")');
    await endCall.click();
        console.log("Call ended");
        // Wait for the call note pop-up
        await driver.pause(3000);
});
When(/^Verify that the call note pop-up appears for previous call$/, async () => {
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
When(/^Verify by saving the call note for not connected call$/, async () => {
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
Then(/^Verify by pausing the autodialler$/, async () => {
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
 Then(/^Verify by going back to main screen$/, async () =>{
    const backButton = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/ivBack")');
    if (await backButton.isDisplayed()) {
        await backButton.click();
        console.log("User is in pending section");
    } else {
        console.log("User is not in pending section");
    }
    await driver.pause(3000);
});
Then(/^Verify opening the called section$/, async () =>{
    const calledSection = await $('android=new UiSelector().text("Called")');
    await calledSection.waitForExist({ timeout: 10000 });
    await expect(calledSection).toBeDisplayed();
    await calledSection
    console.log("✅ Called section successfully clicked!");
    await driver.pause(2000);
});
Then(/^Verify opening the lead card$/, async () => {
const leadCard = await driver.$('android=new UiSelector().className("android.widget.RelativeLayout").instance(3)');
    await leadCard.waitForExist({ timeout: 10000 });
    if (await leadCard.isDisplayed()) {
        console.log("✅ Lead card found!");
        await leadCard.click();
        console.log("✅ Successfully opened the lead card!");
    } else {
        throw new Error("❌ Lead card not found!");
    }
    await driver.pause(2000);
});
Then(/^Verify the call notes are present for the called leads$/, async () => {
    const callNote = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/overviewLayout")');
    await callNote.waitForExist({ timeout: 3000 });
    if (await callNote.isDisplayed()) {
        const noteText = await callNote.getText();
        // console.log(`📌 Call note text: "${noteText}"`);
        console.log("✅ Call note is present for the called lead.");
    } else {
        throw new Error("❌ Call note not found for the called lead!");
    }
    await driver.pause(2000);
});
Then (/^Verify going back to the main screen of Firt Trip smart list$/, async () => {
    const backButton = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/ivBack")');
    if (await backButton.isDisplayed()) {
        await backButton.click();
        console.log("✅ Successfully navigated back to the main screen of First Trip SmartList");
    } else {
        throw new Error("❌ Back button not found!");
    }
    await driver.pause(2000);
});
Then (/^Verify opening lead card$/, async () => {
    const leadCard = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/leadDetailLayout');
    await leadCard.waitForExist({ timeout: 5000 });
    if (await leadCard.isDisplayed()) {
        console.log("✅ Lead card found!");
        await leadCard.click();
        console.log("✅ Successfully opened the lead card!");
    } else {
        throw new Error("❌ Lead card not found!");
    }
    await driver.pause(2000);
});
Then (/^Verify manual calling from lead profile$/, async () => {
    const manualCallButton = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/btnCallLinear")');
    await manualCallButton.waitForExist({ timeout: 5000 });
    if (await manualCallButton.isDisplayed()) {
        console.log("✅ Manual call button found!");
        await manualCallButton.click();
        console.log("✅ Successfully clicked on the manual call button!");
    } else {
        throw new Error("❌ Manual call button not found!");
    }

    await driver.pause(8000);
});
Then(/^Verify by ending the profile call after it is connected$/, async () => {
    const endCallBtnn= await $('android=new UiSelector().resourceId("com.google.android.dialer:id/incall_end_call")');
    await endCallBtn.click();
        console.log("Call ended");
        // Wait for the call note pop-up
        await driver.pause(2000);
});
When(/^Verify that the call note pop up appears after the call ends and save it$/, async () => {
    await driver.pause(3000); // Wait for the pop-up to appear
    const callNote = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/chip_connected_interested")');
    if (await callNote.isDisplayed()) {
        await callNote.click();
        console.log("✅ Call note selected");
    } else {
        console.log("❌ Call note pop-up did not appear");
    }
    await driver.pause(2000);
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
Then(/^Verify adding custom call note from a referred lead profile$/, async () => {
    const customNoteButton = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/tvAddCallNote")');
    await customNoteButton.waitForExist({ timeout: 3000 }); 
    if (await customNoteButton.isDisplayed()) {
        await customNoteButton.click();
        console.log("✅ Custom call note button clicked!");
    } else {
        throw new Error("❌ Custom call note button not found!");
    }
    // Verify that the pop-up is opened
    const customPopUp=await driver.$('android=new new UiSelector().className("android.view.ViewGroup").instance(0)")');
    await customPopUp.waitForExist({ timeout: 5000 });
    if (await customPopUp.isDisplayed()) {
        console.log("✅ Custom call note pop-up is displayed!");
    } else {
        throw new Error("❌ Custom call note pop-up not displayed!");
    }
    // Verify selecting connected section
    const connectedSection = await driver.$('android=new UiSelector().text("Connected")")');
    await connectedSection.waitForExist({ timeout: 3000 });
    if (await connectedSection.isDisplayed()) {
        await connectedSection.click();
        console.log("✅ Connected section selected!");
    } else {
        throw new Error("❌ Connected section not found!");
    }
    // Verify all the select status under connected section
    try {
        const callBack = await driver.$('id:com.vahan.hotline:id/chip_connected_callback');
        const interested = await driver.$('id:com.vahan.hotline:id/chip_connected_interested');
        const interstedInOtherJob = await driver.$('com.vahan.hotline:id/chip_connected_notInterested');
        const notEligible= await driver.$('com.vahan.hotline:id/chip_connected_not_eligible');
        const notInterested = await driver.$('com.vahan.hotline:id/chip_connected_notInterested');
        const locationIssue= await driver.$('com.vahan.hotline:id/chip_connected_locationIssue');
        const incentivesMismtach = await driver.$('com.vahan.hotline:id/chip_connected_incentive_mismatch');
        const noDl = await driver.$('com.vahan.hotline:id/chip_connected_noDL');
        const noDemand = await driver.$('com.vahan.hotline:id/chip_connected_noDemand');
        const noAadhaar = await driver.$('com.vahan.hotline:id/chip_connected_noAadhaar');
        const noSmartPhone = await driver.$('com.vahan.hotline:id/chip_connected_noSmartphone');
        const ageIssue = await driver.$('com.vahan.hotline:id/chip_connected_ageIssue');
        const userDiconnected = await driver.$('com.vahan.hotline:id/chip_connected_userDisconnected');
        const noVehicle = await driver.$('com.vahan.hotline:id/chip_connected_noVehicle');
        const langIssue = await driver.$('com.vahan.hotline:id/chip_connected_languageIssue');
        const alreadyWorking = await driver.$('com.vahan.hotline:id/chip_connected_AlreadyWorking');
        const idProgress = await driver.$('com.vahan.hotline:id/chip_connected_idInProgress');

        const iscallbackDisplayed = await callBack.isDisplayed().catch(() => false);
        const isinterestedDisplayed = await interested.isDisplayed().catch(() => false);
        const isinterstedInOtherJobDisplayed = await interstedInOtherJob.isDisplayed().catch(() => false);
        const isnotEligibleDisplayed = await notEligible.isDisplayed().catch(() => false);
        const isnotInterestedDisplayed = await notInterested.isDisplayed().catch(() => false);
        const islocationIssueDisplayed = await locationIssue.isDisplayed().catch(() => false);
        const isincentivesMismtachDisplayed = await incentivesMismtach.isDisplayed().catch(() => false);
        const isnoDlDisplayed = await noDl.isDisplayed().catch(() => false);
        const isnoDemandDisplayed = await noDemand.isDisplayed().catch(() => false);
        const isnoAadhaarDisplayed = await noAadhaar.isDisplayed().catch(() => false);
        const isnoSmartPhoneDisplayed = await noSmartPhone.isDisplayed().catch(() => false);
        const isageIssueDisplayed = await ageIssue.isDisplayed().catch(() => false);
        const isuserDiconnectedDisplayed = await userDiconnected.isDisplayed().catch(() => false);
        const isnoVehicleDisplayed = await noVehicle.isDisplayed().catch(() => false);
        const islangIssueDisplayed = await langIssue.isDisplayed().catch(() => false);
        const isalreadyWorkingDisplayed = await alreadyWorking.isDisplayed().catch(() => false);
        const isidProgressDisplayed = await idProgress.isDisplayed().catch(() => false);
        

        console.log('callBack present:', isCallbackDisplayed);
        console.log('interested present:', isInterestedDisplayed);
        console.log('interstedInOtherJob present:', isInterestedDisplayed);
        console.log('notEligible present:', isInterestedDisplayed);
        console.log('notInterested present:', isInterestedDisplayed);
        console.log('locationIssue present:', isInterestedDisplayed);
        console.log('incentivesMismtach present:', isInterestedDisplayed);
        console.log('noDl present:', isInterestedDisplayed);
        console.log('noDemand present:', isCallbackDisplayed);
        console.log('noAadhaar present:', isInterestedDisplayed);
        console.log('noSmartPhone present:', isInterestedDisplayed);
        console.log('ageIssue present:', isInterestedDisplayed);
        console.log('userDiconnected present:', isInterestedDisplayed);
        console.log('noVehicle present:', isnoVehicleDisplayed);
        console.log('langIssue present:', islangIssueDisplayed);
        console.log('alreadyWorking present:', isalreadyWorkingDisplayed);
        console.log('idProgress present:', isidProgressDisplayed);

        // The session remains active — no call to deleteSession

    } catch (err) {
        console.error('Error while checking chip elements:', err);
    }
});
// Select any of the connected status
Then(/^Verify selecting the 'call back' status under connected section$/, async () => {
    const callBackClick = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/chip_connected_callback")');
    await callBack.waitForExist({ timeout: 5000 });
    if (await callBack.isDisplayed()) {
        await callBack.click();
        console.log("✅ Call back status selected!");
    } else {
        throw new Error("❌ Call back status not found!");
    }
    await driver.pause(2000);
});
// Verify the dropdown to select the client
Then(/^Verify selecting the client from the dropdown$/, async () => {
    const clientDropdown = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/tvClientSelectOption")');
    await clientDropdown.waitForExist({ timeout: 3000 });
    if (await clientDropdown.isDisplayed()) {
        await clientDropdown.click();
        console.log("✅ Client dropdown clicked!");
    } else {
        throw new Error("❌ Client dropdown not found!");
    }
    await driver.pause(2000);
    // Select the client from the dropdown
    const clientOption = await driver.$('android=new UiSelector().resourceId("android:id/content").instance(0)")'); // Adjust text as needed
    await clientOption.waitForExist({ timeout: 5000 });
    if (await clientOption.isDisplayed()) {
        await clientOption.click();
        console.log("✅ Client selected from dropdown!");
    } else {
        throw new Error("❌ Client option not found in dropdown!");
    }
    await driver.pause(2000);
});
    // Verify by selecting the follow up option
    Then(/^Verify selecting the follow up option$/, async () => {
        const followUpOption = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/call_back_one_hour")');
        await followUpOption.waitForExist({ timeout: 3000 });
        if (await followUpOption.isDisplayed()) {
            await followUpOption.click();
            console.log("✅ 1 hour Follow up option clicked!");
        } else {
            throw new Error("❌ 1 hour follow up option not found!");
        }
        await driver.pause(2000);
    });
    // Verify by adding a call note
    Then(/^Verify adding a call note$/, async () => {
        const callNoteInput = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/add_call_remarks")');
        await callNoteInput.waitForExist({ timeout: 3000 });
        if (await callNoteInput.isDisplayed()) {
            await callNoteInput.setValue("This is a test call note");
            console.log("✅ Call note added successfully!");
        } else {
            throw new Error("❌ Call note input not found!");
        }
    });
    // Verify by saving the call note
    Then(/^Verify saving the call note$/, async () => {
        const saveButton = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/btnSaveAfterCallNote")');
        await saveButton.waitForExist({ timeout: 3000 });
        if (await saveButton.isDisplayed()) {
            await saveButton.click();
            console.log("✅ Call note saved successfully!");
        } else {
            throw new Error("❌ Save button not found!");
        }
        await driver.pause(2000);
    });
    Then(/^Verify that the call note is saved by verifying the time mentioned in the saved call note$/, async () => {
        const callNoteTime = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/tvCallNoteTime")');
        await callNoteTime.waitForExist({ timeout: 5000 });
        if (await callNoteTime.isDisplayed()) {
            const callNoteText = await savedCallNote.getText();
            console.log("📌 Saved Call Note Text:", callNoteText);
            // Check if the call note contains the expected time format
            const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            if (callNoteText.includes(currentTime)) {
                console.log("✅ Call note contains the correct time:", currentTime);
            } else {
                throw new Error(`❌ Call note does not contain the expected time: ${currentTime}`);
            }
        } else {
            throw new Error("❌ Saved call note not found!");
        }
        await driver.pause(2000);
    });
















// When(/^The user navigates to Campaigns$/, async () =>{
//     console.log("Searching for Campaigns tab...");
//     const Campaigns = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/navigation_campaign")');
//     await Campaigns.waitForExist({ timeout: 5000 });
//     if (await Campaigns.isDisplayed()) {
//         console.log("✅ Campaigns found!");
//         await Campaigns.click();
//         console.log("✅ Successfully navigated to Campaigns!");
//     } else {
//         throw new Error("❌ Campaigns not found!");
//     }
//     await driver.pause(2000);
// });
// When(/^User is entering the Campaigns$/, async () =>{
//     console.log("Let's get started");
//     const getStarted = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/btnGetStarted")');
//     await getStarted.waitForExist({ timeout: 5000 });
//         if (await getStarted.isDisplayed()) {
//             console.log("✅ Let's start button found!");
//             await getStarted.click();
//         } else {
//             throw new Error("❌ Campaigns not found!");
//         }
//         await driver.pause(2000);
//     });
// Then(/^User opens the Smartlist Campaign$/, async () => {
//     console.log("First Trip SmartList");
//         const smartList=await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/icForwardArrow")');
//         await smartList.waitForExist({ timeout: 5000 });
//         if (await smartList.isDisplayed()) {
//             console.log("SmartList campaign opened");
//             await smartList.click();
//         }
//         await driver.pause(2000);
// });
// 
// 
// 
// 
//
// Then(/^User navigates back to welcome screen$/, async () =>{
//     const backButton = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/ivBack")');
//     if (await backButton.isDisplayed()) {
//         await backButton.click();
//         console.log("User is in welcome screen of SmartList");
//     } else {
//         console.log("User is not in Welcome screen of SmartList");
//     }
//     await driver.pause(3000);
// });
// Then(/^User navigates back to campaigns Page$/, async () =>{
//     const backButton = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/ivBack")');
//     if (await backButton.isDisplayed()) {
//         await backButton.click();
//         console.log("User is in Home Page");
//     } else {
//         console.log("User is not in Home Page");
//     }
//     await driver.pause(10000);
// });
// Then(/^The user clicks the RNR campaign$/, async () => {
//         // Locate the RNR campaign entry using UiSelector with instance(1)
//         const rnrEntry = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/icForwardArrow").instance(1)');

//         // Wait for the element to exist
//         await rnrEntry.waitForExist({ timeout: 5000 });

//         // Check if the element is displayed before clicking
//         if (await rnrEntry.isDisplayed()) {
//             console.log("✅ RNR campaign entry is visible. Clicking now...");
//             await rnrEntry.click();
//         } else {
//             console.log("❌ RNR campaign entry is not visible.");
//         }
//     await driver.pause(5000);
// });

// Then(/^Click on the dropdown$/, async () => {
//     try {
//         // Locate the dropdown using UiSelector with text "Select a date"
//         const dropdownElement = await driver.$('android=new UiSelector().text("Select a date")');

//         // Check if the dropdown is visible before clicking
//         if (await dropdownElement.isDisplayed()) {
//             await dropdownElement.click();
//             console.log("✅ Successfully clicked on the dropdown.");
//         } else {
//             console.log("❌ Dropdown is not visible on the screen.");
//         }
//     } catch (error) {
//         console.error("❌ Error clicking on the dropdown:", error);
//     }
//     await driver.pause(3000);
// });

// Then(/^Click on the "Today" button$/, async () => {
//     try {
//         // Locate the button using UiSelector with text "Today"
//         const todayButton = await driver.$('android=new UiSelector().text("Today")');

//         // Check if the button is visible before clicking
//         if (await todayButton.isDisplayed()) {
//             await todayButton.click();
//             console.log('✅ Successfully clicked on the "Today" button.');
//         } else {
//             console.log('❌ "Today" button is not visible on the screen.');
//         }
//     } catch (error) {
//         console.error('Error clicking on the "Today" button:', error);
//     }
//     await driver.pause(3000);
// });
// Then(/^Click on the "Let's Start" button$/, async () => {
//         const letsStartButton = await driver.$("id=com.vahan.hotline:id/btnLetsStartDialing");

//         // Check if the button is visible before clicking
//         if (await letsStartButton.isDisplayed()) {
//             await letsStartButton.click();
//             console.log('✅ Successfully clicked on the "Let\'s Start" button.');
//         } else {
//             console.log('❌ "Let\'s Start" button is not visible on the screen.');
//         }
//     await driver.pause(3000);
// });
// Then(/^Verify the text "RNR Candidates" on the screen$/, async () => {
//         // Locate the element using its resource ID
//         const campaignTitleElement = await driver.$("id=com.vahan.hotline:id/tvCampaignTypeTitle");

//         // Check if the element is displayed
//         if (await campaignTitleElement.isDisplayed()) {
//             // Get the text from the element
//             const campaignText = await campaignTitleElement.getText();
//             console.log('Fetched text:', campaignText);

//             // Verify if the text matches "RNR candidates"
//             if (campaignText.trim() === "RNR Candidates") {
//                 console.log('✅ Text verification passed: "RNR candidates" is displayed.');
//             } else {
//                 console.log(`❌ Text verification failed. Expected: "RNR candidates", Found: "${campaignText}"`);
//             }
//         } else {
//             console.log('❌ The element for "RNR candidates" is not visible on the screen.');
//         }
//     await driver.pause(3000);
// });
// Then(/^Fetch all phone numbers and verify stored number$/, async () => {
//     try {
//         console.log("📌 Fetching all phone numbers from the screen...");

//         // Ensure the main content is displayed before proceeding
//         const mainScreenElement = await driver.$("id=com.vahan.hotline:id/mainContent");
//         if (!(await mainScreenElement.isExisting())) {
//             console.log("❌ Main content screen is NOT displayed.");
//             return;
//         }

//         // Fetch all TextView elements from the screen
//         const allTextElements = await driver.$$("//android.widget.TextView");

//         if (allTextElements.length === 0) {
//             console.log("❌ No text elements found on the screen.");
//             return;
//         }

//         // Extract numbers from the text elements
//         const fetchedNumbers = [];
//         for (let element of allTextElements) {
//             const text = await element.getText();
//             const phoneNumber = text.match(/\d{10}/)?.[0]; // Extract 10-digit numbers
//             if (phoneNumber) {
//                 fetchedNumbers.push(phoneNumber);
//             }
//         }

//         console.log("📜 All phone numbers on the screen:", fetchedNumbers);

//         // Compare the stored lead number with the fetched numbers
//         if (fetchedNumbers.includes(global.previousLeadNumber)) {
//             console.log(`✅ The stored lead number ${global.previousLeadNumber} is present on the screen.`);
//         } else {
//             console.log(`❌ The stored lead number ${global.previousLeadNumber} is NOT found on the screen.`);
//         }
//     } catch (error) {
//         console.error("❌ Error fetching phone numbers:", error);
//     }
//     await driver.pause(3000);
// });
// When(/^Capture and store the first lead number from RNR$/, async () => {
//     try {
//         // Locate the first lead number using the resource ID
//         const rnrLead = await driver.$("id=com.vahan.hotline:id/tvLeadNumber");

//         // Fetch the text value from the element
//         const rnrleadnum = await rnrLead.getText();

//         // Extract only numbers (if any) using regex
//         global.firstLeadCaptured = rnrleadnum.match(/\d+/)?.[0] || rnrleadnum; 

//         console.log("📌 First captured lead number:", global.firstLeadCaptured);
//     } catch (error) {
//         console.error("❌ Error fetching lead number:", error);
//     } 
//     await driver.pause(2000);  // Short pause after storing the number
// });

// // Then(/^Click on the RNR Auto Dial button$/, async () => {
// //     try {
// //         // Locate the Auto Dial button using its resource ID
// //         const autoDialButton = await driver.$("id=com.vahan.hotline:id/btnAutoDial");

// //         // Check if the button is displayed before clicking
// //         if (await autoDialButton.isDisplayed()) {
// //             await autoDialButton.click();
// //             console.log("✅ Successfully clicked on the Auto Dial button.");
// //         } else {
// //             console.log("❌ Auto Dial button is not visible on the screen.");
// //         }
// //     } catch (error) {
// //         console.error("❌ Error clicking on the Auto Dial button:", error);
// //     }
// //     await driver.pause(2000);  // Adding a short pause after clicking
// // });
// Then(/^The user clicks on RNR Start Auto Dialing$/, async () => {
//     try {
//         // Locate the Start Auto Dialing button
//         const startDialingButton = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/btnAutoDial")');

//         // Check if the button is displayed before clicking
//         if (await startDialingButton.isDisplayed()) {
//             await startDialingButton.click();
//             console.log("✅ Start Auto Dialing clicked!");
//         } else {
//             console.log("❌ No leads available for auto dialing.");
//         }
//     } catch (error) {
//         console.error("❌ Error clicking on Start Auto Dialing button:", error);
//     }
    
//     await driver.pause(3000); // Adding a short pause after clicking
// });
  
// Then(/^User checks if the previous calls pop-up appears in the RNR$/, async () => {
//     try {
//         console.log("Checking if the popup appears...");

//         // Define the locator for the popup
//         const rnrpopupSelector = 'com.vahan.hotline:id/afterCallNoteCardView';

//         // Try to find the popup with a timeout of 3 seconds
//         const rnrpopupElement = await driver.$(`android.widget.FrameLayout[id="${popupSelector}"]`);

//         if (await rnrpopupElement.isExisting()) {
//             console.log("Popup appeared. Handling it...");
//             await rnrpopupElement.click(); // Adjust handling as needed (dismiss, enter text, etc.)
//         } else {
//             console.log("Popup did not appear. Continuing with the next steps...");
//         }

//         // Continue with the rest of the test script
//         console.log("Executing next steps...");

//     } catch (error) {
//         console.error("Error occurred:", error);
//     } 
//     await driver.pause(10000);
// });
// Then(/^The user ends the call from RNR$/, async () => {
//     const endCallrnr= await $('android=new UiSelector().resourceId("com.google.android.dialer:id/incall_end_call")');
//     await endCallrnr.click();
//         console.log("Call ended");
//         // Wait for the call note pop-up
//         await driver.pause(3000);
// });
// When(/^The Call note pop up appears in RNR$/, async () => {
//     await driver.pause(3000); // Wait for the pop-up to appear
//     const callNoternr = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/chip_connected_callback")');
//     if (await callNoternr.isDisplayed()) {
//         await callNoternr.click();
//         console.log("Call note selected");
//     } else {
//         console.log("Call note pop-up did not appear");
//     }
//     await driver.pause(3000);
// });
// When(/^The user saves the call note in RNR$/, async () => {
//     const saveButtonrnr = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/btnSaveAfterCallNote")');
//     if (await saveButtonrnr.isDisplayed()) {
//         await saveButtonrnr.click();
//         console.log("Call note saved");
//     } else {
//         console.log("Save button not found!");
//     }
//     // Wait for the action to complete
//     await driver.pause(5000);
// });
// Then(/^Verify if the previously stored number is present in RNR$/, async () => {
//     try {
//         console.log("🔎 Checking if the stored lead number is still present...");

//         const mainScreen = await driver.$("id=com.vahan.hotline:id/mainContent");
//         if (!(await mainScreen.isExisting())) {
//             console.log("❌ Main content screen is NOT displayed.");
//             return;
//         }

//         const newLeadNumber = await driver.$("id=com.vahan.hotline:id/tvLeadNumber");
//         const newLeadText = await newLeadNumber.getText();
//         const currentLeadNumber = newLeadText.match(/\d+/)?.[0] || newLeadText;

//         console.log("🔹 Previously stored lead number:", global.firstLeadCaptured);
//         console.log("🔹 Current lead number on screen:", currentLeadNumber);

//         if (global.firstLeadCaptured === currentLeadNumber) {
//             console.log("✅ The stored lead number is still present.");
//         } else {
//             console.log("❌ The lead number has changed.");
//         }

//         // ✅ Store the new lead number for next check
//         global.firstLeadCaptured = currentLeadNumber;
//         console.log("📌 Updated stored lead number for next check:", global.firstLeadCaptured);

//     } catch (error) {
//         console.error("❌ Error verifying the lead number:", error);
//     }
//     await driver.pause(4000);
// });

// Then(/^The user ends the second call in RNR$/, async () => {
//     const endsCall= await $('android=new UiSelector().resourceId("com.google.android.dialer:id/incall_end_call")');
//     await endsCall.click();
//         console.log("Call ended");
//         // Wait for the call note pop-up
//         await driver.pause(3000);
// });
// When(/^The new Call note pop up appears in RNR$/, async () => {
//     await driver.pause(3000); // Wait for the pop-up to appear
//     const newcallNoternr = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/chip_not_connected_not_received")');
//     if (await newcallNoternr.isDisplayed()) {
//         await newcallNoternr.click();
//         console.log("Call note selected as 'Not Connected' ");
//     } else {
//         console.log("Call note pop-up did not appear");
//     }
//     await driver.pause(3000);
// });
// When(/^The user saves the new call note in RNR$/, async () => {
//     const saveCall = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/btnSaveAfterCallNote")');
//     if (await saveCall.isDisplayed()) {
//         await saveCall.click();
//         console.log("Call note saved");
//     } else {
//         console.log("Save button not found!");
//     }
//     // Wait for the action to complete
//     await driver.pause(3000);
// });
// Then(/^The user clicks on the back button$/, async () => {
//     try {
//         // Locate the Back button using the resource ID
//         const backButton = await driver.$("id=com.vahan.hotline:id/ivBack");

//         // Check if the button is displayed before clicking
//         if (await backButton.isDisplayed()) {
//             await backButton.click();
//             console.log("✅ Successfully clicked on the Back button.");
//         } else {
//             console.log("❌ Back button is not visible on the screen.");
//         }
//     } catch (error) {
//         console.error("❌ Error clicking on the Back button:", error);
//     }
//     await driver.pause(4000); // Adding a short pause after clicking
// });
// Then(/^Fetch all phone numbers and verify the previous 2 stored numbers in RNR$/, async () => {
//     try {
//         console.log("📌 Fetching all phone numbers from the screen...");

//         // Ensure the main content is displayed before proceeding
//         const rnrpendingPage = await driver.$("id=com.vahan.hotline:id/mainContent");
//         if (!(await rnrpendingPage.isExisting())) {
//             console.log("❌ Main content screen is NOT displayed.");
//             return;
//         }

//         // Fetch all TextView elements from the screen
//         const alltextElements = await driver.$$("//android.widget.TextView");

//         if (alltextElements.length === 0) {
//             console.log("❌ No text elements found on the screen.");
//             return;
//         }

//         // Extract numbers from the text elements
//         const fetchedNums = [];
//         for (let element of alltextElements) {
//             const text = await element.getText();
//             const phoneNum = text.match(/\d{10}/)?.[0]; // Extract 10-digit numbers
//             if (phoneNum) {
//                 fetchedNums.push(phoneNum);
//             }
//         }

//         console.log("📜 All phone numbers on the screen:", fetchedNums); // ✅ Fixed variable name

//         // ✅ Check if the numbers from the 2nd and 3rd scripts are present
//         const leadOne = global.firstLeadCaptured ?? "N/A";  // From 2nd script
//         const leadTwo = global.currentLeadNumber ?? "N/A";  // From 3rd script

//         console.log(`🔹 Checking stored lead numbers: ${leadOne}, ${leadTwo}`);

//         const leadOneFound = fetchedNums.includes(leadOne);
//         const leadTwoFound = fetchedNums.includes(leadTwo);

//         if (leadOneFound && leadTwoFound) {
//             console.log(`✅ Both stored lead numbers (${leadOne}, ${leadTwo}) are present in the list.`);
//         } else if (leadOneFound) {
//             console.log(`✅ The first stored lead number (${leadOne}) is present, but the second (${leadTwo}) is missing.`);
//         } else if (leadTwoFound) {
//             console.log(`✅ The second stored lead number (${leadTwo}) is present, but the first (${leadOne}) is missing.`);
//         } else {
//             console.log(`❌ Neither of the stored lead numbers (${leadOne}, ${leadTwo}) are found in the list.`);
//         }

//     } catch (error) {
//         console.error("❌ Error fetching and verifying phone numbers:", error);
//     }
//     await driver.pause(4000);
// });
// Then(/^User navigates back to RNR welcome page$/, async () =>{
//     const backButton = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/ivBack")');
//     if (await backButton.isDisplayed()) {
//         await backButton.click();
//         console.log("User is in pending section");
//     } else {
//         console.log("User is not in pending section");
//     }
//     await driver.pause(3000);
// });
// Then(/^User navigates back to Home Page$/, async () =>{
//     const backButton = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/ivBack")');
//     if (await backButton.isDisplayed()) {
//         await backButton.click();
//         console.log("User is in welcome screen of SmartList");
//     } else {
//         console.log("User is not in Welcome screen of SmartList");
//     }
//     await driver.pause(3000);
// });
// //Non-referred Candidates
// When(/^User navigates to Non-referred Candidates$/, async () =>{
//     const nonReferred = await driver.$('android=new UiSelector().className("android.view.ViewGroup").instance(3)');

//         // Wait for the element to exist
//         await nonReferred.waitForExist({ timeout: 5000 });

//         // Check if the element is displayed before clicking
//         if (await nonReferred.isDisplayed()) {
//             console.log("✅ Non-Referred campaign entry is visible. Clicking now...");
//             await nonReferred.click();
//         } else {
//             console.log("❌ RNR campaign entry is not visible.");
//         }
//     await driver.pause(5000);
// });
// Then(/^Let's start Non-referred Campaign$/, async () => {
//     const letsStartBtn= await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/btnLetsStartDialing")');
//     await letsStartBtn.waitForExist({ timeout: 5000 });
//     if(await letsStartBtn.isDisplayed()) {
//         console.log("✅ Let's start button found!");
//         await letsStartBtn.click();
//     }
//     await driver.pause(2000);
// });
// Then(/^The user verifies the pending section in non-Referred Campaign$/, async () => {
//     const pendingNr = await $('android=new UiSelector().text("Pending")');
//     await pendingNr.waitForExist({ timeout: 10000 });
//     await expect(pendingNr).toBeDisplayed();
//     console.log("Pending section verified successfully!");
//     await driver.pause(2000);
// });
// let previousLeadNum = null; // Global variable to store the fetched number
// When(/^Capturing the first lead number in non-referred$/, async () => {
//     try {
//         const riderNumberElement = await driver.$("id=com.vahan.hotline:id/tvLeadNumber");
//         const riderNumberText = await riderNumberElement.getText();
//         global.previousLeadNum = riderNumberText.match(/\d+/)?.[0] || riderNumberText; // Store extracted number globally
//         console.log("📌 First captured lead number:", global.previousLeadNum);
//     } catch (error) {
//         console.error("❌ Error fetching number:", error);
//     } 
//     await driver.pause(3000);
// });
// Then(/^the user clicks on Start Auto Dialing in Non referred campaign if leads exist$/, async () => {
//     const pendingCt= await $('android=new UiSelector().resourceId("com.vahan.hotline:id/tvTabCount")');
//     const pendingCtText = await pendingCt.getText();
//     const pendingriders = parseInt(pendingCtText);

//     if (pendingriders > 0) {
//         const startDialingButton = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/btnAutoDial")');
//         await expect(startDialingButton).toBeDisplayed();
//         await startDialingButton.click();
//         console.log("Start Auto Dialing clicked!");
//     } else {
//         console.log('No leads available for auto dialing.');
//     }
//     await driver.pause(3000);
// });
//     Then(/^the user ends the call in NRC$/, async () => {
//         const endCallButton= await $('android=new UiSelector().resourceId("com.google.android.dialer:id/incall_end_call")');
//         await endCallButton.click();
//             console.log("Call ended");
//             // Wait for the call note pop-up
//             await driver.pause(3000);
//     });
//     When(/^The Call note pop up appears in NRC$/, async () => {
//         await driver.pause(3000); // Wait for the pop-up to appear
//         const callNote = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/chip_connected_callback")');
//         if (await callNote.isDisplayed()) {
//             await callNote.click();
//             console.log("Call note selected");
//         } else {
//             console.log("Call note pop-up did not appear");
//         }
//     });
//     When(/^The user saves the call note in NRC$/, async () => {
//         const saveButton = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/btnSaveAfterCallNote")');
//         if (await saveButton.isDisplayed()) {
//             await saveButton.click();
//             console.log("Call note saved");
//         } else {
//             console.log("Save button not found!");
//         }
//         // Wait for the action to complete
//         await driver.pause(5000);
//     });
//     Then(/^Verify if the previously stored number is present in NRC$/, async () => {
//         try {
//             console.log("🔎 Checking if the stored lead number is still present...");
    
//             const mainScreenElement = await driver.$("id=com.vahan.hotline:id/mainContent");
//             if (!(await mainScreenElement.isExisting())) {
//                 console.log("❌ Main content screen is NOT displayed.");
//                 return;
//             }
    
//             const newLeadNumberElement = await driver.$("id=com.vahan.hotline:id/tvLeadNumber");
//             const newLeadNumberText = await newLeadNumberElement.getText();
//             const currentLeadNumber = newLeadNumberText.match(/\d+/)?.[0] || newLeadNumberText;
    
//             console.log("🔹 Previously stored lead number:", global.previousLeadNumber);
//             console.log("🔹 Current lead number on screen:", currentLeadNumber);
    
//             if (global.previousLeadNumber === currentLeadNumber) {
//                 console.log("✅ The stored lead number is still present.");
//             } else {
//                 console.log("❌ The lead number has changed.");
//             }
    
//             // ✅ Store the new lead number for next check
//             global.previousLeadNumber = currentLeadNumber;
//             console.log("📌 Updated stored lead number for next check:", global.previousLeadNumber);
    
//         } catch (error) {
//             console.error("❌ Error verifying the lead number:", error);
//         }
//         await driver.pause(2000);
//     });
    
//     Then(/^The user ends the second call in NRC$/, async () => {
//         const endCall= await $('android=new UiSelector().resourceId("com.google.android.dialer:id/incall_end_call")');
//         await endCall.click();
//             console.log("Call ended");
//             // Wait for the call note pop-up
//             await driver.pause(3000);
//     });
//     When(/^The new Call note pop up appears in NRC$/, async () => {
//         await driver.pause(3000); // Wait for the pop-up to appear
//         const newcallNote = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/chip_not_connected_not_received")');
//         if (await newcallNote.isDisplayed()) {
//             await newcallNote.click();
//             console.log("Call note selected as 'Not Connected' ");
//         } else {
//             console.log("Call note pop-up did not appear");
//         }
//         await driver.pause(5000);
//     });
//     When(/^The user saves the new call note in NRC$/, async () => {
//         const save = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/btnSaveAfterCallNote")');
//         if (await save.isDisplayed()) {
//             await save.click();
//             console.log("Call note saved");
//         } else {
//             console.log("Save button not found!");
//         }
//         // Wait for the action to complete
//         await driver.pause(5000);
//     });
    /*Then(/^User pauses the Autodialler in NRC$/, async () => {
        const pauseButton = await $('android=new UiSelector().resourceId("com.vahan.hotline:id/btnAutoDial")');
        if (await pauseButton.isDisplayed()) {
            await pauseButton.click();
            console.log("Auto-dialer paused");
        } else {
            console.log("Auto-dialer button not found!");
        }
    Wait for the action to complete
        await driver.pause(3000);
   });*/
