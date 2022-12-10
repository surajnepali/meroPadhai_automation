class HomePage{
    constructor(){
        this.title = '.container > p'
        this.exploreButton = '.css-8p37wn > [href="/explore"]'
        this.aboutUsButton = '.css-8p37wn > [href="/about-us"]'
        this.contactButton = '.css-8p37wn > [href="/contact"]'
        this.loginButton = '[href="/auth/signin"] > .chakra-button'
        this.signUpButton = '[href="/auth/signup"] > .chakra-button'
    }

    getPageTitle(){
        return cy.get(this.title)
    }

    getExploreButton(){
        return cy.get(this.exploreButton)
    }

    getAboutUsButton(){
        return cy.get(this.aboutUsButton)
    }

    getContactButton(){
        return cy.get(this.contactButton)
    }

    getLoginButton(){
        return cy.get(this.loginButton)
    }

    getSignUpButton(){
        return cy.get(this.signUpButton)
    }
}

export default HomePage;