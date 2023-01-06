class ProfilePage{

    constructor(){
        this.pageTitle = 'button.chakra-button.large.css-qcqfxy'
        this.nameField = 'h1.chakra-heading.css-m03q1o'
        this.contactField = '.css-1fr6byp'
        this.changeNumberBtn = 'button.chakra-button.css-n4qrmo'
        this.changeNumberField = '#field-10'
        this.numEnteredField = '#field-11'
        this.submitBtn = 'button.chakra-button.css-spv0dk'
        this.changeCancelBtn = 'button.chakra-button.css-n4qrmo'
        this.toastMessage = 'div.ct-text'
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

    getChangeNumberBtn(){
        const changeNum = cy.get(this.changeNumberBtn)
        return changeNum
    }

    getChangeNumberField(){
        const changeNumField = cy.get(this.changeNumberField)
        return changeNumField
    }

    getNumEnteredField(){
        const numEntered = cy.get(this.numEnteredField)
        return numEntered
    }

    getSubmitBtn(){
        const submit = cy.get(this.submitBtn)
        return submit
    }

    getToastMessage(){
        const message = cy.get(this.toastMessage)
        return message
    }

    getChangeCancelBtn(){
        const cancel = cy.get(this.changeCancelBtn)
        return cancel
    }

}

export default ProfilePage