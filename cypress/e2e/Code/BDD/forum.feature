Feature: All testcases of FORUM

    Background:
    Given user opens the meropadhai website

    Scenario Outline: Click Publish button without writing any query
    When user goes to login page and logs in with '<email>' and '<password>'
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user clicks on Publish button
    Then user should see the negative toast message
    Examples:
    | email                     | password | course                                 |
    | ravila9384@fanneat.com    | password | Fundamentals of Financial Management   |

    
    Scenario Outline: Click views all queries
    When user goes to login page and logs in with '<email>' and '<password>'
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user clicks on Views all queries
    Then user sees all the queries associated with '<course>'  
    Examples:
    | email                     | password | course                                 |
    | ravila9384@fanneat.com    | password | Fundamentals of Financial Management   |


    Scenario Outline: Write query, click View All Queries, and go back, written query is cleared
    When user goes to login page and logs in with '<email>' and '<password>'
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user writes the query in the text box and clicks on Views all queries
    Then user goes back and finds query textarea is cleared
    Examples:
    | email                     | password | course                                 |
    | ravila9384@fanneat.com    | password | Fundamentals of Financial Management   |


    Scenario Outline: See one of the query
    When user goes to login page and logs in with '<email>' and '<password>'
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user clicks on Views all queries
    And user sees all the queries associated with '<course>' 
    Then user clicks first query and sees the query
    Examples:
    | email                     | password | course                                 |
    | ravila9384@fanneat.com    | password | Fundamentals of Financial Management   |


    Scenario Outline: Write query, click Publish including chapter name, query for review message is shown.
    When user goes to login page and logs in with '<email>' and '<password>'
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user writes the query in the text box and clicks on Publish button
    Then user includes chapter name and should see the positive toast message
    Examples:
    | email                     | password | course                                 |
    | ravila9384@fanneat.com    | password | Fundamentals of Financial Management   |   


    Scenario Outline: Write query, click Publish without including chapter name, query for review message is shown.
    When user goes to login page and logs in with '<email>' and '<password>'
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user writes the query in the text box and clicks on Publish button
    Then user does not include chapter name and should see the positive toast message
    Examples:
    | email                     | password | course                                 |
    | ravila9384@fanneat.com    | password | Fundamentals of Financial Management   |


    Scenario Outline: Write query, select image, click Publish including chapter name.
    When user goes to login page and logs in with '<email>' and '<password>'
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user writes the query, add an image and clicks on Publish button
    Then user includes chapter name and should see the positive toast message
    Examples:
    | email                     | password | course                                 |
    | ravila9384@fanneat.com    | password | Fundamentals of Financial Management   |