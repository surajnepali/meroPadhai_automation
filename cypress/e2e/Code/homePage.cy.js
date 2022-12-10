/// <reference types="cypress" />
import HomePage from "../../support/PageObject/HomePage"

describe('Home Page of Mero Padhai', () => {
  beforeEach('passes', () => {
    cy.viewport(1920, 1080)
    cy.visit(Cypress.env('url'))
    
  })

  it('should have a title', () => {
    const homePage = new HomePage()
    homePage.getPageTitle().should('have.text', 'Learn all courses at home.')
  })

  it('Clicks on Login button', () => {
    const homePage = new HomePage()
    homePage.getLoginButton().click()
  })
})