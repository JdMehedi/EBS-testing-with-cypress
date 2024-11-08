class UserLogin
{
    loginPath = 'a'
    osspURL = 'https://osspid.org'
    emailInput = 'input[name="email"]'
    clickButton = 'button[id="next_btn"]'
    inputPass ='input[id="password"]'
    clickBtnAgain = 'button[id="login_btn"]'

    clickLogin(){
        cy.get(this.loginPath).contains('Log In').click();
    }
    originOSSP(email, password) {
        const emailInput = this.emailInput;
        cy.origin(this.osspURL, { args: { email, password, emailInput } }, ({ email, password, emailInput }) => {
          // Wait for the email input to be visible before interacting with it
          cy.log(email,password)
          cy.get(emailInput).first().should('have.length', 1).type(email);
          cy.get('button[id="next_btn"]').should('be.visible').click();
          cy.get('input[id="password"]').first().should('be.visible').type(password);
          cy.get('button[id="login_btn"]').should('be.visible').click();
        });
    }


    typeEmail(email){
        cy.get(this.emailInput).type(email);
    }
    clickNextButton(){
        cy.get(this.clickButton).click();
    }
    typePassword(password){
        cy.get(this.inputPass).type(password);
    }
    loginButton(){
        cy.get(this.clickBtnAgain).click();
    }

}

module.exports = new UserLogin()