/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const HomePage = require("../../../../support/PageObject/HomePage")
const LoginPage = require("../../../../support/PageObject/LoginPage")
const LogHomePage = require("../../../../support/PageObject/LogHomePage")
const ProfilePage = require("../../../../support/PageObject/ProfilePage")

const homePage = new HomePage()
const loginPage = new LoginPage()
const logHomePage = new LogHomePage()
const profilePage = new ProfilePage()

let name = ""
let num = ""

Given('user opens the meropadhai website', () => {
    cy.visit(Cypress.env("url"))
    homePage.getPageTitle().should("have.text", "Learn all courses at home.")
})

When('user clicks Login button and redirected to login page', () => {
    homePage.getLoginButton().click()
    cy.url().should('include', '/auth/signin')
    loginPage.getPageTitle().should('have.text', 'Sign in to continue')
})

When('user logs in with {string} and {string}', (email, password) => {
    loginPage.fillEmail(email)
    loginPage.fillPassword(password)
    loginPage.submitBtn()
})

When('verify Phone pop up box appears for {string} but user clicks skip button', (email) => {
    logHomePage.getVerifyPopUp().should('be.visible')
    logHomePage.getVerifyTitle().should('have.text', 'Verify Phone Number')
    logHomePage.getEmailField().should('exist').and('have.value', email)
    logHomePage.getNameField().invoke('val').then((text) => {
        name = text
    })
    logHomePage.getSkipBtn().should('exist').contains('Skip').click()
    cy.wait(2000)
})

When('user is redirected to home page and clicks Profile button', () => {
    logHomePage.pageTitle().should('exist').contains('On your markGet set Learn!')
    logHomePage.getAvatarBtn().should('exist').click()
    logHomePage.getProfileBtn().should('exist').click()
    profilePage.getPageTitle().should('have.text', 'Account Setting')
    profilePage.getNameField().should('exist').then((result) => {
        expect(result.text()).to.equal(name)
    })
})

When('user clicks Change button and clicks Submit button', () => {
    profilePage.getChangeNumberBtn().should('exist').click()
    profilePage.getSubmitBtn().should('exist').click()
})

When('user clicks Change button', () => {
    profilePage.getChangeNumberBtn().should('exist').click()
})

When('user enters {string} in the text box and clicks Cancel button', (phone) => {
    profilePage.getChangeNumberField().should('exist').type(phone)
    profilePage.getChangeNumberField().invoke('val').then((text) => {
        num = text
        cy.log(num)
    })
    profilePage.getChangeCancelBtn().should('exist').click()
})

Then('user should see negative  toast message', () => {
    profilePage.getToastMessage().should('exist').and('have.text', "Invalid contact provided for 'contact' in body")
})

Then('user clicks Change button and should see the recently typed {string} in the text box', (phone) => {
    profilePage.getChangeNumberBtn().should('exist').click()
    profilePage.getNumEnteredField().should('exist').and('have.value', num)
})