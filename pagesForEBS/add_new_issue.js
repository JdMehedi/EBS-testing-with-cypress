class AddNewIssuetracker
{

    issueList = 'a[href="https://uat-crm.oss.net.bd/issue/lists"]'
    selectDropdown = 'button[class="btn btn-default dropbtn"]'
    selectBug ='label>div>input[value="Bug"]'
    selectCR = 'label>div>input[value="CR"]'
    projectCode = 'span[id="select2-project_id-container"]'
    projectSearch = 'input[class="select2-search__field"]'
    projectMilstone = 'select[id="milestone_id"]'
    taskID = 'select[id="task_id"]'
    issueTitle = 'input[id="issue_title"]'
    description = 'div[contenteditable="true"]'
    assignTo = 'span[id="select2-assigned_to_team-container"]'
    assignToSearch = 'input[class="select2-search__field"]'
    selectSeverty = 'select[id="severity"]'
    clickPriority = 'label>div>input[value="High"]'
    selectReproductibily = 'select[id="reproducibility"]'
    stepToreproduct = 'input[name="reproduction_steps"]'
    notifyVai = 'input[value="2"]'
    notifyVaiSMS = 'input[value="1"]'
    attachment = 'label[class="col-md-3 col-xs-3 specialRadiodiv"]'
    attachmentLink = '[id="URL"]'
    relationship = '[id="relationships"]'
    submitButton = 'button>b'


    // cy.get('a[href="https://uat-crm.oss.net.bd/issue/lists"]').click()
    // cy.get('button[class="btn btn-default dropbtn"]').click()
    // cy.get('label>div>input[value="Bug"]').click()
    // cy.wait(1000)
    // cy.get('label>div>input[value="CR"]').click()
    // cy.get('span[id="select2-project_id-container"]').click()
    // cy.get('input[class="select2-search__field"]').type('Business Automation LTD{enter}')
    // cy.get('select[id="milestone_id"]').select('394')
    // cy.get('select[id="task_id"]').select('419')
    // cy.get('input[id="issue_title"]').type('Adaptor does not work')
    // cy.get('div[contenteditable="true"]').type('Its very urgent to fix that issue')
    // cy.get('select[id="severity"]').select('Block')
    // cy.get('label>div>input[value="High"]').click()
    // cy.get('select[id="reproducibility"]').select('Block')
    // cy.get('input[name="reproduction_steps"]').type('Please do necessary steps')
    // cy.get('span[id="select2-assigned_to_team-container"]').click()
    // cy.get('input[class="select2-search__field"]').type('industry{enter}')
    // cy.get('span[class="select2-selection select2-selection--single"]').eq(2).click()
    // cy.get('input[class="select2-search__field"]').type('assaduzzaman{enter}')
    // cy.get('input[value="2"]').click()
    // cy.get('input[value="1"]').eq(1).click()
    // cy.get('label[class="col-md-3 col-xs-3 specialRadiodiv"]').contains('URL').click()
    // cy.get('[id="URL"]').type('https://drive.google.com/file/d/1B8Gq8N-l6Q9iL0ZHWjKfXm_mmBMkxt-w/view?usp=sharing')
    // cy.get('[id="relationships"]').select("None")
    // cy.get('button>b').click()

    issueListShow(){
        cy.get(this.issueList).click()
    }
    selectOneValue(){
        cy.get(this.selectDropdown).click()
    }
    selectissueType(){
        cy.get(this.selectBug).click()
    }
    selectissueTypeMore(){
        cy.get(this.selectCR).click()
    }
    selectprojectCode(){
        cy.get(this.projectCode).click()

    }
    searchproject(business){
        cy.get(this.projectSearch).type(business)

    }
    selectMilestone(value){
        cy.get(this.projectMilstone).select(value)

    }
    selectTaskID(value){
        cy.get(this.taskID).select(value)

    }
    typeIssueTitle(value){
        cy.get(this.issueTitle).type(value)

    }
    typeDescription(value){
        cy.get(this.description).type(value)

    }
    assignToSomeOne(){
        cy.get(this.assignTo).click()

    }
    assignToSearchSomeOne(value){
        cy.get(this.assignToSearch).type(value)

    }
    Severty(value){
        cy.get(this.selectSeverty).select(value)

    }
    setPriority(){
        cy.get(this.clickPriority).click()

    }
    setReproductibily(value){
        cy.get(this.selectReproductibily).select(value)

    }
    stepReproduct(value){
        cy.get(this.stepToreproduct).type(value)
    }
    setNotifyVai(){
        cy.get(this.notifyVai).click()

    }
    setNotifyVaiSMS(){
        cy.get(this.notifyVaiSMS).eq(1).click()

    }
    setAttachment(value){
        cy.get(this.attachment).contains(value).click()

    }
    enterAttachmentLink(value){
        cy.get(this.attachmentLink).type(value)

    }
    selectRelationship(value){
        cy.get(this.relationship).select(value);

    }
    saveButton(){
        cy.get(this.submitButton).click()

    }

}

module.exports = new AddNewIssuetracker()