describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://uat-btrclims.oss.net.bd/')
    // cy.visit('http://localhost:8000/')
    cy.get('header>div>div>nav>div>div>div>a').contains('Login / Signup').click()
    cy.get('a[class="input-link"]').click()
    cy.get('input[type="email"]').type('mhasan.chairman@gmail.com')
    cy.get('input[type="password"]').type('123456a@')
    cy.intercept('POST', 'https://uat-btrclims.oss.net.bd/login/check').as('loginRequest')
    cy.get('button').click()
    cy.wait(10000)
    cy.wait('@loginRequest').then((interception) => {
      cy.log(JSON.stringify(interception.response.body));
        const response = interception.response.body
      if (response.responseCode === 1 && response.redirect_to) {
        const paths = response.redirect_to
        // cy.getCookies().then((cookies) => {
        //   // cy.log('Cookies after login: ' + JSON.stringify(cookies));
        // });
          cy.visit(`https://uat-btrclims.oss.net.bd${paths}`, { failOnStatusCode: false });
          cy.get('input[type="email"]').type('mhasan.chairman@gmail.com')
          cy.get('input[type="password"]').type('123456a@')
          cy.wait(500)
        //   cy.intercept('POST', 'https://uat-btrclims.oss.net.bd/login/check').as('loginRequest')
          cy.get('button[class="btn-btrc btn-primary"]').click()
      } else {
          cy.log(response.msg)
      }
    })
   
  })
})