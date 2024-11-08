import  login  from "../pagesForEBS/login";
import add_new_issue from "../pagesForEBS/add_new_issue";

describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://uat-crm.oss.net.bd/')
        login.clickPortal()
        login.clickLogin()
        login.typeEmail('sqatest1@ba-systems.com')
        login.typePassword('Sqa@!@#098_baT)')
        login.loginButton()
        cy.url().should('include','users/profileinfo')
        cy.wait(2000)
        add_new_issue.issueListShow()
        add_new_issue.selectOneValue()
        add_new_issue.selectissueType()
        add_new_issue.selectissueTypeMore()
        add_new_issue.selectprojectCode()
        add_new_issue.searchproject('Business Automation LTD{enter}')
        add_new_issue.selectMilestone('394')
        add_new_issue.selectTaskID('419')
        add_new_issue.typeIssueTitle('Adaptor does not work')
        add_new_issue.typeDescription('Its very urgent to fix that issue')
        add_new_issue.assignToSomeOne()
        cy.wait(10000)
        add_new_issue.assignToSearchSomeOne('assaduzzaman{enter}')
        add_new_issue.Severty('Block')
        add_new_issue.setPriority()
        add_new_issue.setReproductibily('Block')
        add_new_issue.stepReproduct('Please do necessary steps')
        add_new_issue.setNotifyVai()
        add_new_issue.setNotifyVaiSMS()
        add_new_issue.setAttachment('URL')
        add_new_issue.enterAttachmentLink('https://drive.google.com/file/d/1B8Gq8N-l6Q9iL0ZHWjKfXm_mmBMkxt-w/view?usp=sharing')
        add_new_issue.selectRelationship('None')
        add_new_issue.saveButton()

    });
})