class QueryPage{

    constructor(){
        this.queryName = '.css-ykhys7'
        this.queryDltBtn = '.css-asvefe > svg'
        this.addResponse = '.css-1rv4e52 > .chakra-button'
        this.responseTextArea = '.txt-area'
        this.publishResponse = '.css-11ya3lz'
        this.selectImage = '.css-3ehjyz > svg:nth-child(1)'
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
    
}

export default QueryPage