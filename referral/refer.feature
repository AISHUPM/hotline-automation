Feature: Referral
Scenario: referral
   Given the user enters the mobile number
   When the user clicks on the Request OTP button
   Then the user enters the OTP
   Given I am on the Hotline dashboard
   When The user punch in
   When the user clicks on 'Refer a Lead button'
   Then the user verifies if the title "Refer a Lead" is present
   Then the user enters name in the "Enter Lead Name" field
   Then the user enters phone number
   Then the user clicks on the "Enter City Preference" component
   Then the user fetches the list of cities from the bottom sheet
   Then the user clicks on the search field and searches for the city
   Then the user selects the city
   When the user clicks on the Enter Client Preference field
   When the user fetches the list of clients
   When the user clicks on the bottom sheet field
   When the user selects the first locality
   When the user clicks on the Submit button
   

   