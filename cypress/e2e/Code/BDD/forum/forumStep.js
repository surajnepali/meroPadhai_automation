import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

const LoginPage = require('../../../../support/PageObject/LoginPage')
const HomePage = require('../../../../support/PageObject/HomePage')
const LogHomePage = require('../../../../support/PageObject/LogHomePage')
const MyLibrary = require('../../../../support/PageObject/MyLibrary')
const CourseWatchPage = require('../../../../support/PageObject/CourseWatchPage')
const ForumPage = require('../../../../support/PageObject/ForumPage')

const homePage = new HomePage()
const loginPage = new LoginPage()
const logHomePage = new LogHomePage()
const myLibrary = new MyLibrary()
const courseWatchPage = new CourseWatchPage()
const forumPage = new ForumPage()

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

Then('user should see the list of all queries of {string}', (course) => {
    // cy.location('hash').should('include', '#/forum')
    forumPage.getPageVerify().should('exist').and('have.text', 'Forum')
    forumPage.getCourseTitle().should('exist').and('have.text', course)
    
})