class VerifyContactPage{

    constructor(){
        this.pageTitle = 'h1.css-tvkyhx'
        this.contactText = '.css-1p8zgth'
    }

    getPageTitle(){
        const title = cy.get(this.pageTitle)
        return title
    }

    getContactText(){
        const contact = cy.get(this.contactText)
        return contact
    }

}

export default VerifyContactPage