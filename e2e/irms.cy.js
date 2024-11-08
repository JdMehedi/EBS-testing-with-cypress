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
    cy.get('a').contains('Log In').click();

    // Switch to the new origin
    cy.wait(5000)
    cy.origin('https://osspid.org', () => {
      cy.wait(5000)
      cy.get('input[name="email"]').type('mhasan.egov@gmail.com');
      cy.get('button[id="next_btn"]').click();
      cy.get('input[id="password"]').type('ossp2122');
      cy.get('button[id="login_btn"]').click();
    });

    // switch to the main origin again but we have to wait for that
    cy.wait(5000)
      cy.get('a[href="https://uat-irms.oss.net.bd/cms/list"]').click()
      cy.get('button').contains(' Add New ').click()
      cy.wait(5000)
      cy.get('input[id="organization_name"]').type('Business LTD')
      cy.get('select[id="type_of_org"]').select(4)
      cy.get('select[id="related_to"]').select(7)
      cy.get('select[id="org_country"]').select(18)
      cy.wait(5000)
      cy.get('input[id="major_activites"]').type('Mirpur')
      cy.get('select[id="busness_sector"]').select('2', { force: true });
      cy.wait(4000)
      cy.get('#select2-sub_sect-container').click();
      cy.get('input[class="select2-search__field"]').type('Forestry, logging and related{enter}');
     
      
  });
});
