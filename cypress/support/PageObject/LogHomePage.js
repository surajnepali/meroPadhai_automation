class LogHomePage{

    constructor(){
        this.title = '.css-gxanvf > .chakra-heading'
        this.succesfulLogin = 'div.ct-text' 
        this.explore = '.css-8p37wn > a:nth-child(1)'
        this.library = '.css-8p37wn > a:nth-child(3)'
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

    libraryBtn(){
        const library = cy.get(this.library)
        return library
    }

}

export default LogHomePage