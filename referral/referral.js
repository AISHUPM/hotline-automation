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
When(/^the user clicks on 'Refer a Lead button'$/, async () => {
    console.log("Waiting for LinearLayout instance...");

    // Locate the element using UiSelector with className and instance
    const linearLayout = await driver.$('android=new UiSelector().className("android.widget.LinearLayout").instance(9)');

    // Wait for the element to be present
    await linearLayout.waitForExist({ timeout: 10000 });

    if (await linearLayout.isDisplayed()) {
        console.log("LinearLayout instance found!");
        await linearLayout.click();  // Perform the click
        console.log("Successfully clicked on LinearLayout instance!");
    } else {
        throw new Error("LinearLayout instance not found!");
    }

    await driver.pause(5000); // Pause to observe the result
});
Then(/^the user verifies if the title "Refer a Lead" is present$/, async () => {
    console.log("Waiting for the title 'Refer a Lead'...");

    // Locate the element using UiSelector with text
    const titleElement = await driver.$('android=new UiSelector().text("Refer a Lead")');

    // Wait for the element to be present
    await titleElement.waitForExist({ timeout: 10000 });

    // Check if the element is displayed
    if (await titleElement.isDisplayed()) {
        console.log("✅ The title 'Refer a Lead' is present!");
    } else {
        throw new Error("❌ The title 'Refer a Lead' is not present!");
    }

    await driver.pause(3000); // Pause to observe the result
});
Then(/^the user enters name in the "Enter Lead Name" field$/, async () => {
    console.log("Waiting for the 'Enter Lead Name' field...");

    // Locate the element using UiSelector with the text "Enter Lead Name"
    const leadNameInput = await driver.$('android=new UiSelector().text("Enter Lead Name")');

    // Wait for the element to be present
    await leadNameInput.waitForExist({ timeout: 10000 });

    // Check if the element is displayed
    if (await leadNameInput.isDisplayed()) {
        console.log("✅ 'Enter Lead Name' field found!");

        // Generate a random name using faker, ensuring only alphabets are included
        const randomName = faker.name.firstName().replace(/[^a-zA-Z]/g, ''); // Only allow alphabets

        // Enter the random name into the field
        await leadNameInput.setValue(randomName);
        console.log(`✅ Random name '${randomName}' entered successfully!`);
    } else {
        throw new Error("❌ The 'Enter Lead Name' field is not present!");
    }

    await driver.pause(3000); // Pause to observe the result
});
Then(/^the user enters phone number$/, async () => {
    console.log("Waiting for the 'Enter Lead Phone Number' field...");

    // Locate the element using UiSelector with the text "Enter Lead Phone Number"
    const phoneNumberInput = await driver.$('android=new UiSelector().text("Enter Lead Phone Number")');

    // Wait for the element to be present
    await phoneNumberInput.waitForExist({ timeout: 10000 });

    // Check if the element is displayed
    if (await phoneNumberInput.isDisplayed()) {
        console.log("✅ 'Enter Lead Phone Number' field found!");

        // Generate a random phone number that starts with a digit between 6 and 9
        const firstDigit = Math.floor(Math.random() * 4) + 6; // Random number between 6 and 9
        const randomDigits = Math.floor(Math.random() * 1e9); // Generate a random 9-digit number
        const phoneNumber = `${firstDigit}${randomDigits.toString().padStart(9, '0')}`; // Combine the first digit and 9 random digits to form a 10-digit number

        // Enter the generated phone number into the field
        await phoneNumberInput.setValue(phoneNumber);
        console.log(`✅ Generated phone number '${phoneNumber}' entered successfully!`);
    } else {
        throw new Error("❌ The 'Enter Lead Phone Number' field is not present!");
    }

    await driver.pause(3000); // Pause to observe the result
});
Then(/^the user clicks on the "Enter City Preference" component$/, async () => {
    console.log("Waiting for 'Enter City Preference' component...");

    // Locate the element using UiSelector with the text "Enter City Preference"
    const cityPreferenceElement = await driver.$('android=new UiSelector().text("Enter City Preference")');

    // Wait for the element to be present
    await cityPreferenceElement.waitForExist({ timeout: 10000 });

    // Check if the element is displayed
    if (await cityPreferenceElement.isDisplayed()) {
        console.log("✅ 'Enter City Preference' component found!");

        // Perform a click on the "Enter City Preference" component
        await cityPreferenceElement.click();
        console.log("✅ 'Enter City Preference' component clicked successfully!");
    } else {
        throw new Error("❌ 'Enter City Preference' component not found!");
    }

    await driver.pause(3000); // Pause to observe the result
});
Then(/^the user fetches the list of cities from the bottom sheet$/, async () => {
    // Locate the RecyclerView containing the list of cities
    const cityList = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/selectionRecyclerView")');

    // Wait for the element to be visible
    await cityList.waitForExist({ timeout: 10000 });

    // Get all city elements inside the RecyclerView
    const cities = await cityList.$$('android.widget.TextView'); // Assuming cities are listed as TextView elements

    if (cities.length > 0) {
        console.log(`✅ Found ${cities.length} cities in the bottom sheet:`);

        // Extract and print city names
        for (const city of cities) {
            let cityName = await city.getText();
            console.log(`- ${cityName}`);
        }
    } else {
        console.log("❌ No cities found in the bottom sheet!");
    }
});
Then(/^the user clicks on the search field and searches for the city$/, async () => {
    console.log("Waiting for search field...");

    // Locate the search field using its resource ID
    const searchField = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/searchEditText")');

    // Wait for the search field to be present
    await searchField.waitForExist({ timeout: 10000 });

    // Check if the search field is displayed
    if (await searchField.isDisplayed()) {
        console.log("✅ Search field found!");

        // Click on the search field to focus on it
        await searchField.click();
        console.log("✅ Search field clicked!");

        // Clear any existing text
        await searchField.clearValue();
        console.log("✅ Existing text cleared!");

        // Type "Bengaluru" into the search field
        await searchField.setValue("Bengaluru");
        console.log("✅ 'Bengaluru' entered into the search field!");
    } else {
        throw new Error("❌ Search field not found!");
    }

    await driver.pause(10000); // Pause to observe the result
});
Then(/^the user selects the city$/, async () => {
    // Locate the element using resourceId
    const fieldElement = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/fieldName")');

    // Wait for the element to be present and visible
    await fieldElement.waitForExist({ timeout: 10000 });

    // Click on the element
    await fieldElement.click();

    console.log("✅ Clicked on the field successfully!");
});
When(/^the user clicks on the Enter Client Preference field$/, async () => {
    console.log("Searching for 'Enter Client Preference' field...");

    // Locate the field with the text "Enter Client Preference"
    const clientPreferenceField = await driver.$('android=new UiSelector().text("Enter Client Preference")');

    // Wait for the element to exist and be clickable
    await clientPreferenceField.waitForExist({ timeout: 10000 });

    // Click the field if it's displayed
    if (await clientPreferenceField.isDisplayed()) {
        console.log("✅ Found the 'Enter Client Preference' field!");
        await clientPreferenceField.click();
        console.log("✅ Successfully clicked on the 'Enter Client Preference' field.");
    } else {
        console.log("❌ 'Enter Client Preference' field not found!");
    }

    // Pause to observe the result
    await driver.pause(3000);
});
Then(/^the user fetches the list of clients$/, async () => {
    const selectionRecyclerView = await driver.$(
        'android=new UiSelector().resourceId("com.vahan.hotline:id/selectionRecyclerView")'
    );
    await selectionRecyclerView.waitForExist({ timeout: 10000 });
    const clients = await selectionRecyclerView.$$(
        'android=new UiSelector().resourceId("com.vahan.hotline:id/clientName")'
    );
    if (clients.length > 0) {
        console.log("✅ Available Clients:");
        for (let client of clients) {
            console.log(`📌 ${await client.getText()}`);
        }
        console.log(`👉 Clicking on the first client: ${await clients[0].getText()}`);
        await clients[0].click();
        console.log("✅ Successfully selected the first client.");
    } else {
        console.log("❌ No clients found!");
    }

    // Pause to observe the result
    await driver.pause(3000);
});
When(/^the user clicks on the bottom sheet field$/, async () => {
    console.log("🔍 Searching for 'bottomSheetField'...");

    // Locate the field using resource ID
    const bottomSheetField = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/bottomSheetField")');

    // Wait for the element to exist and be clickable
    await bottomSheetField.waitForExist({ timeout: 10000 });

    // Click the field if it's displayed
    if (await bottomSheetField.isDisplayed()) {
        console.log("✅ Found the 'bottomSheetField'!");
        await bottomSheetField.click();
        console.log("✅ Successfully clicked on 'bottomSheetField'.");
    } else {
        console.log("❌ 'bottomSheetField' not found!");
    }

    // Pause to observe the result
    await driver.pause(3000);
});
When(/^the user selects the first locality$/, async () => {
    console.log("🔍 Searching for locality list...");

    // Locate all elements with the resource ID "fieldName"
    const localityElements = await driver.$$(
        'android=new UiSelector().resourceId("com.vahan.hotline:id/fieldName")'
    );

    if (localityElements.length > 0) {
        console.log("✅ Available Localities:");
        let localityList = [];

        for (let locality of localityElements) {
            let localityName = await locality.getText(); // Extract text
            localityList.push(localityName); // Store in the array
            console.log(`📌 ${localityName}`);
        }

        // Click on the first locality
        console.log(`👉 Clicking on the first locality: ${await localityElements[0].getText()}`);
        await localityElements[0].click();
        console.log("✅ Successfully selected the first locality.");
    } else {
        console.log("❌ No localities found!");
    }

    // Pause to observe the result
    await driver.pause(3000);
});
When(/^the user clicks on the Submit button$/, async () => {
    // console.log("Waiting for Request OTP button...");

    // Locate the 'Request OTP' button using its resource ID
    const submitButton = await driver.$('android=new UiSelector().resourceId("com.vahan.hotline:id/submitButton")');

    // Wait for the element to be present
    await submitButton.waitForExist({ timeout: 10000 });

    if (await submitButton.isDisplayed()) {
        console.log("Request OTP button found!");
        await submitButton.click();
        console.log("Submit button clicked successfully!");
    } else {
        throw new Error("/submit button not found!");
    }

    await driver.pause(3000); // Pause to observe the result
});