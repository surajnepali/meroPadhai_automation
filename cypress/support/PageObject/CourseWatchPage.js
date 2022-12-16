class CourseWatchPage{

    constructor() {
        this.pageVerify = ':nth-child(2) > .chakra-breadcrumb__link'
        this.watchCourse = ':nth-child(3) > .chakra-breadcrumb__link'
        this.tableOfContent = '.css-wufdrj > .chakra-heading'
        this.forumBtn = '#tabs-14--tab-1'
        this.noteBtn = '#tabs-14--tab-2'
        this.queryPublishBtn = '.css-5bygcd > .chakra-button'
        this.toastMessage = '.ct-toast'
        this.chooseImage = '.css-3ehjyz > svg'
        this.viewAllQueries = '.css-vyj8pe > .chakra-text'
    }

    getPageVerify() {
        const pageVerify = cy.get(this.pageVerify)
        return pageVerify
    }

    getWatchCourse() {
        const watchCourse = cy.get(this.watchCourse)
        return watchCourse
    }

    getTableOfContent() {
        const tableOfContent = cy.get(this.tableOfContent)
        return tableOfContent
    }

    getForumBtn() {
        const forumBtn = cy.get(this.forumBtn)
        return forumBtn
    }

    getNoteBtn() {
        const noteBtn = cy.get(this.noteBtn)
        return noteBtn
    }

    getQueryPublishBtn() {
        const queryPublishBtn = cy.get(this.queryPublishBtn)
        return queryPublishBtn
    }

    getToastMessage() {
        const toastMessage = cy.get(this.toastMessage)
        return toastMessage
    }

    getChooseImage() {
        const chooseImage = cy.get(this.chooseImage)
        return chooseImage
    }

    getViewAllQueriesBtn() {
        const viewAllQueries = cy.get(this.viewAllQueries)
        return viewAllQueries
    }

}

export default CourseWatchPage