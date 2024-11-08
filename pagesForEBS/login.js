class EBSLogin
{
    portal = 'a[href="#ebsPortal"]'
    loginPath = 'a'
    emailInput = 'input[id="username"]'
    inputPass ='input[id="password"]'
    clickButton = 'input[id="kc-login"]'

    clickPortal(){
        cy.get(this.portal).click();
    }
    clickLogin(){
        cy.get(this.loginPath).contains('Log In').click();
    }
    typeEmail(email){
        cy.get(this.emailInput).type(email);
    }
    typePassword(password){
        cy.get(this.inputPass).type(password);
    }
    loginButton(){
        cy.get(this.clickButton).click();
    }

}

module.exports = new EBSLogin()