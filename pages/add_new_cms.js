class AddNewCMS
{

    cmsList = 'a[href="https://uat-irms.oss.net.bd/cms/list"]'
    AddNewBtn = 'button'
    orgName = 'input[id="organization_name"]'
    TypeOrg = 'select[id="type_of_org"]'
    rltdTo = 'select[id="related_to"]'
    orgCountry = 'select[id="org_country"]'
    majorActivities = 'input[id="major_activites"]'
    BusinessSector = 'select[id="busness_sector"]'
    SubSector = '#select2-sub_sect-container'
    selectSubSectordata = 'input[class="select2-search__field"]'
    searchSubSector = 'input[class="select2-search__field"]'

    cmsListShow(){
        cy.get(this.cmsList).click()
    }
    AddnewButton(){
        cy.get(this.AddNewBtn).contains(' Add New ').click()

    }
    InputOrgName(){
        cy.get(this.orgName).type('Business LTD')

    }
    selectTypeORG(){
        cy.get(this.TypeOrg).select(4)
    }
    selectrelatedTo(){
        cy.get(this.rltdTo).select(7)

    }
    selectOrgCountry(){
        cy.get(this.orgCountry).select(18)

    }
    typeActivities(){
        cy.get(this.majorActivities).type('Mirpur')

    }
    selectBusinesssector(){
        cy.get(this.BusinessSector).select('2', { force: true });

    }
    clickSubSector(){
        cy.get(this.SubSector).click();

    }
    searchSubSectorData(){
        cy.get(this.searchSubSector).type('Forestry, logging and related{enter}');

    }

}

module.exports = new AddNewCMS()