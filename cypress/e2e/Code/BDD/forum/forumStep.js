import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

const LoginPage = require('../../../../support/PageObject/LoginPage')
const HomePage = require('../../../../support/PageObject/HomePage')
const LogHomePage = require('../../../../support/PageObject/LogHomePage')
const MyLibrary = require('../../../../support/PageObject/MyLibrary')
const CourseWatchPage = require('../../../../support/PageObject/CourseWatchPage')
const ForumPage = require('../../../../support/PageObject/ForumPage')
const QueryPage = require('../../../../support/PageObject/QueryPage')

const homePage = new HomePage()
const loginPage = new LoginPage()
const logHomePage = new LogHomePage()
const myLibrary = new MyLibrary()
const courseWatchPage = new CourseWatchPage()
const forumPage = new ForumPage()
const queryPage = new QueryPage()

let count = 0

Given('user opens the meropadhai website', () => {
    cy.viewport(1920, 1080)
    cy.visit(Cypress.env('url'))
    homePage.getPageTitle().should('have.text', 'Learn all courses at home.')
})

When('user goes to login page and logs in with {string} and {string}', (email, password) => {
    homePage.getLoginButton().click()
    cy.url().should('include', '/auth/signin')
    loginPage.haveTitle().should('have.text', 'Sign in to continue')
    loginPage.fillEmail(email)
    loginPage.fillPassword(password)
    loginPage.submitBtn()
})

When('user clicks on the My Library button', () => {
    logHomePage.getVerifyPopUp().should('exist')
    logHomePage.getSkipBtn().should('exist').contains('Skip').click()
    logHomePage.libraryBtn().click()
    cy.url().should('include', '/my-learning')
})

When('user selects the {string} and clicks it', (course) => {
    myLibrary.getCourseContainer().find('.css-bc2ghm').each(($el, index, $list) => {
        const courseName = $el.find('h2.css-108nr98').text()
        if (courseName.includes(course)) {
            cy.wrap($el).find('h2.css-108nr98').click()
        }
    })
    courseWatchPage.getPageVerify().should('exist').and('have.text', course)
    courseWatchPage.getWatchCourse().should('exist').contains('Watch')
    courseWatchPage.getTableOfContent().should('exist').contains('Table of Content')
})

When('user clicks on Forum module', () => {
    courseWatchPage.getForumBtn().should('exist').contains('Forum')
    courseWatchPage.getForumBtn().click()
})

When('user clicks on Publish button', () => {
    courseWatchPage.getQueryPublishBtn().should('exist').contains('Publish')
    courseWatchPage.getQueryPublishBtn().click()
})

When('user clicks on Views all queries', () => {
    courseWatchPage.getViewAllQueriesBtn().should('exist').contains('View All Queries')
    courseWatchPage.getViewAllQueriesBtn().click()
})

Then('user should see the negative toast message', () => {
    courseWatchPage.getToastMessage().should('exist').contains('Please fill required field.')
})

Then('user sees all the queries associated with {string}', (course) => {
    // cy.location('hash').should('include', '#/forum')
    forumPage.getPageVerify().should('exist').and('have.text', 'Forum')
    forumPage.getCourseTitle().should('exist').and('have.text', course)

    // counts the number of queries
    forumPage.getForumContainer().find('.css-keracv').each(($el, index, $list) => {
        const queryName = $el.find('.css-pm7iwl > .chakra-text').text()
            count++
    }).then(() => {
        cy.log(count)   
    })
    count = 0
})

When('user writes the query in the text box and clicks on Views all queries', () => {
    courseWatchPage.getQueryField().should('exist').type('This is a test query')
    courseWatchPage.getViewAllQueriesBtn().should('exist').contains('View All Queries')
    courseWatchPage.getViewAllQueriesBtn().click()
})

When('user writes the query in the text box and clicks on Publish button', () => {
    courseWatchPage.getQueryField().should('exist').type('This is a test query')
    courseWatchPage.getQueryPublishBtn().should('exist').contains('Publish')
    courseWatchPage.getQueryPublishBtn().click()
})

When('user writes the query, add an image and clicks on Publish button', () => {
    courseWatchPage.getQueryField().should('exist').type('This is a test query')
    courseWatchPage.getChooseImage().should('exist').selectFile('Frame 1000002049.png')
    courseWatchPage.getUploadedImage().should('exist')
    courseWatchPage.getQueryPublishBtn().should('exist').contains('Publish')
    courseWatchPage.getQueryPublishBtn().click()
})

Then('user goes back and finds query textarea is cleared', () => {
    cy.wait(5000)
    cy.go('back')
    courseWatchPage.getQueryField().should('exist').and('have.value', '')
})

Then('user clicks first query and sees the query', () => {
    const queryNaam = forumPage.getForumContainer().find('p.chakra-text.css-ykhys7').eq(0)
    queryNaam.click({force: true})
    cy.wait(5000)
    if(queryNaam == queryPage.getQueryName()){
        queryPage.getQueryName().should('exist')
        queryPage.getQueryDescription().should('exist')
    }
    // forumPage.getQueryTitle().should('exist')
    // forumPage.getQueryDescription().should('exist')
})

Then('user includes chapter name and should see the positive toast message', () => {
    courseWatchPage.getIncludeChapterPopUp().should('exist')
    courseWatchPage.getIncludeChapterBtn().contains('Yes').click()
    courseWatchPage.getToastMessage().should('exist').contains('Your question has been sent to be reviewed.')
})

Then('user does not include chapter name and should see the positive toast message', () => {
    courseWatchPage.getIncludeChapterPopUp().should('exist')
    courseWatchPage.getIncludeChapterNoBtn().contains('No').click()
    courseWatchPage.getToastMessage().should('exist').contains('Your question has been sent to be reviewed.')
})

