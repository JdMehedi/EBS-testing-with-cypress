import login from "../pages/login";
import cms from "../pages/add_new_cms";
describe('template spec', () => {
    beforeEach(() => {
      cy.on('uncaught:exception', (err, runnable) => {
        // Prevents Cypress from failing the test for this specific exception
        if (err.message.includes('$myCarousel.carousel is not a function') ||  
        err.message.includes('Cannot read properties of undefined (reading \'top\')')) {
          return false;
        }
        // Fails the test for other exceptions
        return true;
      });
    });
  
    it('passes', () => {
      cy.visit('https://uat-irms.oss.net.bd');
     login.clickLogin()
    //  cy.url().should('include',login.osspURL)
     login.originOSSP('mhasan.egov@gmail.com', 'ossp2122');
     cy.url().should('include','https://uat-irms.oss.net.bd/dashboard')
     cms.cmsListShow()
     cms.AddnewButton()
     cms.InputOrgName()
     cms.selectTypeORG()
     cms.selectrelatedTo()
     cms.selectOrgCountry()
     cms.typeActivities()
     cms.selectTypeORG()
     cms.selectBusinesssector()
     cms.clickSubSector()
     cms.searchSubSectorData()

    });
})