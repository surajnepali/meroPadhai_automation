/// reference types="cypress" />
import LoginPage from "../../support/PageObject/LoginPage"

describe('Login Page of Mero Padhai', () => {

    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit(Cypress.env('url')+ '/auth/signin')
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('should have a title', () => {
        const loginPage = new LoginPage()

        loginPage.havetitle().should('have.text', 'Sign in to continue')
    })

    it("User doesnot fill the login form but enters sign in button", () => {
        const loginPage = new LoginPage()

        loginPage.submitBtn()
        loginPage.havetitle().click()
        loginPage.emailEmpty().should('have.text', 'This field is required.')
        loginPage.passwordEmpty().should('have.text', 'Password is required.')
        
    })

    it('Enter not existed email', () => {
        const loginPage = new LoginPage()

        loginPage.fillEmail("litime484@3mkz.com")
        loginPage.fillPassword("password")
        loginPage.submitBtn()
        loginPage.userNotExist().should('have.text', 'User doesn\'t exist')

    })

    it.only("If password is less than 8 letters", () => {
        const loginPage = new LoginPage()

        loginPage.fillEmail("litime4584@3mkz.com")
        loginPage.fillPassword("pass")
        loginPage.submitBtn()
        loginPage.passwordEmpty().should('have.text', 'Password should be at least 8 characters.')
    })

})