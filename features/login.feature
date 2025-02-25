Feature: Login functionality

  Scenario: User logs in successfully
    Given the user enters the mobile number
    When the user clicks on the Request OTP button
    Then the user enters the OTP
    When the user allows permissions for make calls
    When the user allows Battery permission