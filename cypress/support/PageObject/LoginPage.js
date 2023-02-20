import HomePage from "./HomePage"

class LoginPage extends HomePage{
    constructor(){
        super()
        this.title = 'span.css-65le5m'
        this.email = '//input[@name="email"]'
        this.password = '//input[@name="password"]'
        this.loginButton = '.chakra-button'
        
    }

    haveTitle(){
        const title = cy.get(this.title)
        return title
    }

    fillEmail(value){
        const field = cy.xpath(this.email)
        field.type(value)
        return this
    }
    fillPassword(value){
        const field = cy.xpath(this.password)
        field.type(value)
        return this
    }
    submitBtn(){
        const button = cy.get(this.loginButton)
        button.click()
    }

    existenceTest(){
        const error = cy.get('div.ct-text')
        return error
    }

    emailEmpty(){
        const noEmail = cy.get(':nth-child(1) > .css-15hpn1y > .chakra-text')
        return noEmail
    }

    passwordEmpty(){
        const noPassword = cy.get(':nth-child(2) > .css-15hpn1y > .chakra-text')
        return noPassword
    }

}

export default LoginPage;