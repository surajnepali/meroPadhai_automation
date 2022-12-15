class MyLibrary{

    constructor(){
        this.pageTitle = ':nth-child(2) > .chakra-breadcrumb__link'
        this.courseName = 'h2.css-108nr98'

    }

    getPageTitle(){
        const pageTitle = cy.get(this.pageTitle)
        return pageTitle
    }

    getCourseName(){
        const courseName = cy.get(this.courseName)
        return courseName
    }

}

export default MyLibrary