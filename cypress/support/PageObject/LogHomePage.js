class LogHomePage{

    constructor(){
        this.title = '.css-gxanvf > .chakra-heading'
        this.succesfulLogin = 'div.ct-text' 
        this.explore = '.css-8p37wn > a:nth-child(1)'
        this.library
    }

    pageTitle(){
        const title = cy.get(this.title)
        return title
    }

    successfulLogin(){
        const success = cy.get(this.successfulLogin)
        return success
    }

    exploreBtn(){
        const explore = cy.get(this.explore)
        return explore
    }

}

export default LogHomePage