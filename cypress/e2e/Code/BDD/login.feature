Feature: Mero Padhai

    Background:
    Given user opens the meropadhai website

    Scenario: User goes to login page
    When user clicks on Login button
    Then user should be redirected to Login page

    Scenario: User logs in without login credentials
    When user clicks Login button and redirected to Login page
    And user clicks on arrow icon to login
    Then user should see error message

    Scenario Outline: User tries to login with unregistered email
    When user clicks Login button and redirected to Login page
    And user enters email '<email>' and password '<password>'
    And user clicks on arrow icon for loggin in
    Then user not existing message is shown
    Examples:
    | email              | password |
    | litime458@3mkz.com | 12345678 |

    Scenario Outline: User tries to login with short password
    When user clicks Login button and redirected to Login page
    And user enters email '<email>' and password '<password>'
    And user clicks on arrow icon for loggin in
    Then user should password required atleast 8 characters message is shown
    Examples:
    | email               | password |
    | litime4584@3mkz.com | 1234567  |

    Scenario Outline: State Clear
    When user clicks Login button and redirected to Login page
    And user enters email '<email>' and password '<password>'
    And user clicks Forgot Password button and redirected to Forgot Password page
    Then user comes back to Login page and previously filled form is cleared
    Examples:
    | email               | password |
    | litime4584@3mkz.com | 12345678 |