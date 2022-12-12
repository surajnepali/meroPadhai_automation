class LogHomePage{

    constructor(){
        this.title = '.css-gxanvf > .chakra-heading'
        this.succesfulLogin = 'div.ct-text' 
    }

    pageTitle(){
        const title = cy.get(this.title)
        return title
    }

    successfulLogin(){
        const success = cy.get(this.successfulLogin)
        return success
    }

}

export default LogHomePage