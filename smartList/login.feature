Feature: Login functionality
Scenario: Smart List Flow
   # Given the user is on the main welcome screen
   # Given User clicks on the Get Started button

   # Given the user enters 6 digit number and requests for OTP
   # Given User clears the input field
   
   Given Verify the field by entering valid number and request for OTP
   # Then Verify by entering wrong OTP
   # Then User clears the OTP field
   Then User enters valid OTP and proceeds
   Then the user clicks on ok to close the default phone app pop up
   # Given I am on the Hotline dashboard
   When Verify 'punch In' button
   # ==================================================================================================================
   # First Trip SmartList
   # Entry Points
   Given Verify entering SmartList from Home Screen using 'Pick a SmartList' button
   Then Verify back arrow button from SmartList welcome screen
   Then Verify navigating to home tab
   Then Verify entering SmartList from Home Screen using 'See all' button
   Then Verify back arrow button from SmartList welcome screen1
   Then Verify navigating to home tab from campaigns tab
   Then Verify entering SmartList from Home Screen using smartList card
   Then Verify navigating to home tab from SmartList card using back arrow
   Then Verify entering SmartList from Campaigns tab
   # Given Verify the default date range when the app is opened for 1st time in the day
   Given Verify the default date range when the app is opened for 1st time in the day
   Then Verify selecting start and end date from the calendar by clicking it
   Then Verify saving the selected date range
   Then Verify selected date range is visible on home screen
   Then Verify by entering the date manually using the edit button in the calender and save it
   # ==================================================================================================================
   # Pending and called sections
   When Verify 'Let's Start' button
   Then Verify the pending section
   When Verify by capturing the first lead number
   Then Verify Autodialler button if the leads exist
   Then Verify if the disposition appears for previous calls
   Then Verify by ending the call after it is connected
   When Verify that the call note pop up appears after the call ends
   When Verify the save button
   Then Verify if the previously stored number is present in the pending section
   Then Verify when the user ends the second call without having it connected
   When Verify that the call note pop-up appears for second call
   When Verify by saving the call note for not connected call
   Then Verify by pausing the autodialler
   Then Verify by going back to main screen
   Then Verify opening the called section
   Then Verify if the latest called lead appears in the called section
   Then Verify the call notes are present for the called leads
   Then Verify going back to the main screen of First Trip smart list
   Then Verify navigating back to pending section
   Then Verify opening lead card
   Then Verify manual calling from lead profile
   Then Verify by ending the profile call after it is connected
   When Verify that the call note pop up appears after the call ends and save it
   Then Verify navigating back to the pending section of SL
   Then Verify opening fresh lead card from the pending list
   Then Verify adding custom call note from a referred lead profile
   Then Verify selecting the 'call back' status under connected section
   Then Verify selecting the client from the dropdown
   Then Verify selecting the follow up option
   Then Verify adding a call note
   Then Verify saving the call note
   Then Verify that the call note is saved by verifying the time mentioned in the saved call note



   # When The user navigates to Campaigns
   # When User is entering the Campaigns
   # Then User opens the Smartlist Campaign
   # When Verify by opening the 'SmartList' card
   # Then the user verifies the pending section
   # When Capturing the first lead name
   # Then the user clicks on Start Auto Dialing if leads exist
   # Then User checks if the previous calls pop-up appears
   # Then the user ends the call
   # When The Call note pop up appears
   # When The user saves the call note
   # Then Verify if the previously stored number is present
   # Then The user ends the second call
   # When The new Call note pop up appears
   # When The user saves the new call note
   # Then User pauses the Autodialler
   # Then User navigates back to campaigns page
   # Then User navigates back to welcome screen
   # Then User navigates back to campaigns Page
   # When The user re-navigates to Campaigns
   # Then The user clicks the RNR campaign
   # Then Click on the dropdown
   # Then Click on the "Today" button
   # Then Click on the "Let's Start" button
   # Then Verify the text "RNR Candidates" on the screen
   # Then Fetch all phone numbers and verify stored number
                # RNR Calls
   # When Capture and store the first lead number from RNR
   # Then Click on the RNR Auto Dial button
   # Then The user clicks on RNR Start Auto Dialing
   # Then User checks if the previous calls pop-up appears in the RNR
   # Then The user ends the call from RNR
   # When The Call note pop up appears in RNR
   # When The user saves the call note in RNR
   # Then Verify if the previously stored number is present in RNR
   # Then The user ends the second call in RNR
   # When The new Call note pop up appears in RNR
   # When The user saves the new call note in RNR
   # Then The user clicks on the back button
   # Then Fetch all phone numbers and verify the previous 2 stored numbers in RNR
   # Then User navigates back to RNR welcome page
   # Then User navigates back to Home Page
   # Non-referred Campaign
   # When User navigates to Non-referred Candidates
   # Then Let's start Non-referred Campaign
   # Then The user verifies the pending section in non-Referred Campaign
   # When Capturing the first lead number in non-referred
   # Then the user clicks on Start Auto Dialing in Non referred campaign if leads exist
   # Then the user ends the call in NRC
   # When The Call note pop up appears in NRC
   # When The user saves the call note in NRC
   # Then Verify if the previously stored number is present in NRC
   # Then The user ends the second call in NRC
   # When The new Call note pop up appears in NRC
   # When The user saves the new call note in NRC
   # Then User pauses the Autodialler in NRC
  
