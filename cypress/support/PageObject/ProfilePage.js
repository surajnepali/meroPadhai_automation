class ProfilePage{

    constructor(){
        this.pageTitle = 'button.chakra-button.large.css-qcqfxy'
        this.nameField = 'h1.chakra-heading.css-m03q1o'
        this.contactField = '.css-1fr6byp'
    }
    
    getPageTitle(){
        const title = cy.get(this.pageTitle)
        return title
    }

    getNameField(){
        const name = cy.get(this.nameField)
        return name
    }

    getContactField(){
        const contact = cy.get(this.contactField)
        return contact
    }

}

export default ProfilePage