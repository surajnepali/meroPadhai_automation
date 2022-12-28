class QueryPage{

    constructor(){
        this.queryName = '.css-ykhys7'
        this.queryDltBtn = '.css-asvefe > svg'
        this.addResponse = '.css-1rv4e52 > .chakra-button'
        this.responseTextArea = '.txt-area'
        this.publishResponse = '.css-11ya3lz'
        this.selectImage = '.css-3ehjyz > svg:nth-child(1)' //div.css-0:nth-child(3)
        this.responseContainer = 'div.css-0:nth-child(3)'
        this.aResponse = '.css-16g34o9'
        this.responseReader = '.css-1hgneaz'
    }

    getQueryName(){
        return cy.get(this.queryName)
    }

    getQueryDltBtn(){
        return cy.get(this.queryDltBtn)
    }

    getAddResponse(){
        return cy.get(this.addResponse)
    }

    getResponseTextArea(){
        return cy.get(this.responseTextArea)
    }

    getPublishResponse(){
        return cy.get(this.publishResponse)
    }

    getSelectImage(){
        return cy.get(this.selectImage)
    }
    
    getResponseContainer(){
        return cy.get(this.responseContainer)
    }

    getAResponse(){
        return cy.get(this.aResponse)
    }

    getResponseReader(){
        return cy.get(this.responseReader)
    }

}

export default QueryPage