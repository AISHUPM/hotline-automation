Feature: Login functionality

   Scenario: User logs in successfully
    Given the user enters the mobile number
    When the user clicks on the Request OTP button
    Then the user enters the OTP
    Given I am on the Hotline dashboard
    When The user punch in
    When The user navigates to Campaigns
    When User is entering the Campaigns
    Then User opens the Smartlist Campaign
   When User enters First trip Smart List
   Then the user verifies the pending section
   When Capturing the first lead name
   Then User checks if the previous calls pop-up appears
   Then the user clicks on Start Auto Dialing if leads exist
   Then the user ends the call
   When The Call note pop up appears
   When The user saves the call note
   Then Verify if the previously stored number is present
   Then The user ends the second call
   When The new Call note pop up appears
   When The user saves the new call note
   Then User pauses the Autodialler
   # Then User navigates back to campaigns page
   # Then User navigates back to welcome screen
   # Then User navigates back to Home Page