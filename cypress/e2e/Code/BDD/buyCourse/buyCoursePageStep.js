import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

const LoginPage = require('../../../../support/PageObject/LoginPage')
const HomePage = require('../../../../support/PageObject/HomePage')
const LogHomePage = require('../../../../support/PageObject/LogHomePage')
const ExplorePage = require('../../../../support/PageObject/ExplorePage')
const CourseDetailsPage = require('../../../../support/PageObject/CourseDetailsPage')
const CartPage = require('../../../../support/PageObject/CartPage')
const EsewaPage = require('../../../../support/PageObject/EsewaPage')


const homePage = new HomePage()
const loginPage = new LoginPage()
const logHomePage = new LogHomePage()
const explorePage = new ExplorePage()
const courseDetailsPage = new CourseDetailsPage()
const cartPage = new CartPage()
const eSewaPage = new EsewaPage()


Given('user opens the meropadhai website', () => {
    cy.viewport(1920, 1080)
    cy.visit(Cypress.env('url'))
    homePage.getPageTitle().should('have.text', 'Learn all courses at home.')
})

When('user goes to login page and logs in with {string} and {string}', (email, password) => {
    homePage.getLoginButton().click()
    cy.url().should('include', '/auth/signin')
    loginPage.getPageTitle().should('have.text', 'Sign in to continue')
    loginPage.fillEmail(email)
    loginPage.fillPassword(password)
    loginPage.submitBtn()
    logHomePage.pageTitle().should('have.text', 'On your markGet set Learn!')
})

When('user clicks on the explore button', () => {
    logHomePage.exploreBtn().click()
    cy.url().should('include', '/explore')
    explorePage.getPageTitle().should('have.text', 'Explore courses, topics and skills')
})

When('user selects the course {string}', (courseName) => {
    explorePage.getGridContainer().find('.css-bc2ghm').each(($el, index, $list) => {

        const courseNaam = $el.find('h2.css-108nr98').text()
        
        if (courseNaam.includes(courseName)) {
            cy.scrollTo('right') // Scrolls 'footer' into view
            cy.wrap($el).find('.css-6y3qij').click()
        }
    })
    cy.get('h1.css-d36phq').should('exist').contains(courseName)
})

When('user clicks on the buy now button', () => {
    let buyNowButton = courseDetailsPage.getBuyNowBtn()
    if(buyNowButton.contains('Buy Now')){
        buyNowButton.click({force: true})
        cy.log("Choose Course Pricing popup is displayed")
        courseDetailsPage.getPricePopUp().should('exist')
    }
})

When('user choses course pricing for {string} and continues', (month) => {
    if(courseDetailsPage.getDropdown().select(month)){
        courseDetailsPage.getPrice().should('exist').and('have.text', 'Rs. 200')
    }
    if(courseDetailsPage.getContinueBtn().contains('Rs.200')){
        cy.log("Continue button is enabled")
        courseDetailsPage.getContinueBtn().click()
    }
    cy.url().should('include', '/cart')
})

When('user clicks Checkout button, selects e-Sewa payment method and checkout with {string}', (courseName) => {
    
    //Proper validation with Checkout button
    cartPage.getCartTitle().should('have.text', ' Course in cart.')
    cartPage.getPriceSummary().should('exist').and('have.text', 'Price summary')
    cartPage.getCourseName().should('exist').and('have.text', courseName)
    let sum = 0
    let total = 0
    cartPage.getPricePerCourse().should('exist').each(($el, index, $list) => {
        const amount = $el.text()
        let result = amount.split(".")
        result = result[1].trim()
        cy.log(result)
        sum = Number(sum) + Number(result)
    }).then( () => {
        cy.log(sum)
    })
    
        // cartPage.getTotalPrice().should('exist').and('have.text', 'Rs. ' + sum)

    cartPage.getTotalPrice().then( (elem) =>{
        const amount = elem.text()
        let result = amount.split(".")
        total = result[1].trim()
        cy.log(total)
        if(expect(Number(total)).to.equal(sum)){
            cartPage.getCheckoutBtn().click()
            cartPage.getPaymentPopUp().should('exist')

            //user selects e-Sewa payment method and checkout
            cartPage.getESewaMethod().check().should('be.checked')
            cartPage.getActualCheckout().click()
        }
    })
})

When('user is redirected to e-Sewa website, fills form with {string} and {string}, buys properly', (eSewaId, eSewaPassword) => {
    eSewaPage.getESewaVerify().should('have.text', 'Please login to make your payment ')
    eSewaPage.getESewaId(eSewaId)
    eSewaPage.getESewaPassword(eSewaPassword)
    eSewaPage.getESewaLogin().click()
    eSewaPage.getWarningMessage()
        .should('have.text', ' Please enter token sent to your phone carefully. You only have one attempt for security reason. ')
    eSewaPage.getTokenField().should('exist')
    cy.wait(20000)
    eSewaPage.getContinuePayment().click()
    eSewaPage.getDetailEsewaId().should('have.value', eSewaId)
    eSewaPage.getDetailName().type('Suraj Nepali')
    eSewaPage.getDetailContact().type(eSewaId)
    eSewaPage.getDetailEmail().type('surajnepali7896@gmail.com')
    eSewaPage.getDetailAddress().type('Pokhara')
    eSewaPage.getContPayBtn().click()
    
})

Then('user is redirected to meropadhai website and course is bought', () => {

})