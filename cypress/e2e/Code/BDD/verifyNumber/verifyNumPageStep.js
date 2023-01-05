/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { contains } from "cypress/types/jquery";

const HomePage = require("../../../../support/PageObject/HomePage")
const LoginPage = require("../../../../support/PageObject/LoginPage")
const LogHomePage = require("../../../../support/PageObject/LogHomePage")
const ProfilePage = require("../../../../support/PageObject/ProfilePage")
const VerifyContactPage = require("../../../../support/PageObject/VerifyContactPage")

const homePage = new HomePage()
const loginPage = new LoginPage()
const logHomePage = new LogHomePage()
const profilePage = new ProfilePage()
const verifyContactPage = new VerifyContactPage()

let name = ""



Given("user opens the meropadhai website", () => {
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

When('user clicks Skip button', () => {
    logHomePage.getSkipBtn().should('exist').contains('Skip').click()
    cy.wait(2500)
})

When('user types {string} in phone number field', (phone) => {
    logHomePage.getContactField().should('exist').type(phone)    
})

When('user checks whether the entered {string} is not saved in contact field of profile page', (phone) => {
    logHomePage.getAvatarBtn().should('exist').click()
    logHomePage.getProfileBtn().should('exist').click()
    profilePage.getPageTitle().should('have.text', 'Account Setting')
    profilePage.getNameField().should('exist').then((result) => {
        expect(result.text()).to.equal(name)
    })
    profilePage.getContactField().should('not.contain', phone)
    cy.go('back')
    cy.wait(2500)
})

When('user logs out from the website', () => {
    logHomePage.getAvatarBtn().should('exist').click()
    logHomePage.getLogoutBtn().should('exist').click()
    cy.wait(2500)
    homePage.getPageTitle().should("have.text", "Learn all courses at home.")
})

When('user clicks Verify button for {string} but cancel the verification', (phone) => {
    logHomePage.verifyContact().should('exist').click()
    verifyContactPage.getPageTitle().should('have.text', 'Enter OTP')
    verifyContactPage.getContactText().should('exist').contains(phone).click()
    cy.go('back')
})

Then('verify phone number pop up should appear with {string}', (email) => {
    logHomePage.getVerifyPopUp().should('exist')
    logHomePage.getVerifyTitle().should('have.text', 'Verify Phone Number')
    logHomePage.getEmailField().should('exist').and('have.value', email)
    logHomePage.getNameField().invoke('val').then((text) => {
        name = text
    })
})

Then('user should be redirected to home page', () => {
    logHomePage.pageTitle().should('have.text', 'On your markGet set Learn!')
})

Then('contact field should be empty in pop up box',() => {
    cy.wait(2500)
    logHomePage.getContactField().should('exist').and('have.value', '')
})