Feature: Change Contact Number of the user

    As a user, I want to change my contact number

    Background:
        Given user opens the meropadhai website

    # Scenario Outline: Click change without typing anything
    #     When user clicks Login button and redirected to login page
    #     And user logs in with "<email>" and "<password>"
    #     And verify Phone pop up box appears for '<email>' but user clicks skip button
    #     And user is redirected to home page and clicks Profile button
    #     And user clicks Change button and clicks Submit button
    #     Then user should see negative  toast message
    #     Examples:
    #         | email                 | password |
    #         | xoceya2492@chnlog.com | password |

    Scenario Outline: Enter number and click Cancel button
        When user clicks Login button and redirected to login page
        And user logs in with "<email>" and "<password>"
        And verify Phone pop up box appears for '<email>' but user clicks skip button
        And user is redirected to home page and clicks Profile button
        And user clicks Change button
        And user enters "<number>" in the text box and clicks Cancel button
        Then user clicks Change button and should see the recently typed '<number>' in the text box
        Examples:
            | email                 | password | number |
            | xoceya2492@chnlog.com | password | 9841   |