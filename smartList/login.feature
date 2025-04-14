Feature: Login functionality
Scenario: Smart List Flow
   Given the user enters the mobile number
   When the user clicks on the Request OTP button
   Then the user enters the OTP
   Then the user clicks on ok to close the default phone app pop up
   Given I am on the Hotline dashboard
   # When The user punch in
   When The user navigates to Campaigns
   When User is entering the Campaigns
   Then User opens the Smartlist Campaign
   When User enters First trip Smart List
   Then the user verifies the pending section
   When Capturing the first lead name
   Then the user clicks on Start Auto Dialing if leads exist
   Then User checks if the previous calls pop-up appears
   Then the user ends the call
   When The Call note pop up appears
   When The user saves the call note
   Then Verify if the previously stored number is present
   Then The user ends the second call
   When The new Call note pop up appears
   When The user saves the new call note
   Then User pauses the Autodialler
   Then User navigates back to campaigns page
   Then User navigates back to welcome screen
   Then User navigates back to campaigns Page
   # When The user re-navigates to Campaigns
   Then The user clicks the RNR campaign
   Then Click on the dropdown
   Then Click on the "Today" button
   Then Click on the "Let's Start" button
   Then Verify the text "RNR Candidates" on the screen
   Then Fetch all phone numbers and verify stored number
                       # RNR Calls
   When Capture and store the first lead number from RNR
   # Then Click on the RNR Auto Dial button
   Then The user clicks on RNR Start Auto Dialing
   Then User checks if the previous calls pop-up appears in the RNR
   Then The user ends the call from RNR
   When The Call note pop up appears in RNR
   When The user saves the call note in RNR
   Then Verify if the previously stored number is present in RNR
   Then The user ends the second call in RNR
   When The new Call note pop up appears in RNR
   When The user saves the new call note in RNR
   Then The user clicks on the back button
   Then Fetch all phone numbers and verify the previous 2 stored numbers in RNR
   Then User navigates back to RNR welcome page
   Then User navigates back to Home Page