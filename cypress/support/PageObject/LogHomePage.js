class LogHomePage{

    constructor(){
        this.title = '.css-gxanvf > .chakra-heading'
        this.succesfulLogin = 'div.ct-text' 
        this.courses = '.css-8p37wn > a:nth-child(1)'
        this.library = '.css-8p37wn > a:nth-child(3)'
        this.verifyPopUp = '#chakra-modal-9'
        this.contactField = '#field-15'
        this.verifyContact = '.css-13kjd4r'
        this.skipPopUp = '.css-14j2ktk'

    }

    pageTitle(){
        const title = cy.get(this.title)
        return title
    }

    successfulLogin(){
        const success = cy.get(this.successfulLogin)
        return success
    }

    coursesBtn(){
        const explore = cy.get(this.courses)
        return explore
    }

    libraryBtn(){
        const library = cy.get(this.library)
        return library
    }

    getVerifyPopUp(){
        const verify = cy.get(this.verifyPopUp)
        return verify
    }

    contactField(){
        const contact = cy.get(this.contactField)
        return contact
    }

    verifyContact(){
        const verify = cy.get(this.verifyContact)
        return verify
    }

    getSkipBtn(){
        const skip = cy.get(this.skipPopUp)
        return skip
    }

}

export default LogHomePage