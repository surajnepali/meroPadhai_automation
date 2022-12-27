class ForumPage{

    constructor(){
        this.pageVerify = ':nth-child(3) > .chakra-breadcrumb__link'
        this.courseTitle = '.css-gj2ina'
        this.forumContainer = '.css-cyin89'
        this.queryContainer = '.css-keracv'
        this.queryName = 'p.chakra-text.css-ykhys7'

    }

    getPageVerify(){
        const pageVerify = cy.get(this.pageVerify)
        return pageVerify
    }

    getCourseTitle(){
        const courseTitle = cy.get(this.courseTitle)
        return courseTitle
    }

    getForumContainer(){
        const forumContainer = cy.get(this.forumContainer)
        return forumContainer
    }

    getQueryContainer(){
        const queryContainer = cy.get(this.queryContainer)
        return queryContainer
    }

    getQueryName(){
        const queryName = cy.get(this.queryName)
        return queryName
    }

}

 export default ForumPage 