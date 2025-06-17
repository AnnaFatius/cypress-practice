class SignInForm{
   
    get emailField(){
        return cy.get('#signinEmail');
    }
    get passwordField(){
        return cy.get('#signinPassword');
    }
    get loginButton(){
        return cy.get('[class="btn btn-primary"]');
    }
    get emptyEmailField(){
        return cy.contains('Email required');
    }
    get emptyPasswordField(){
        return  cy.contains('Password required');
    }
    get incorrectEmailField(){
        return cy.contains('Email is incorrect');
    }
    get wrongDataMessage(){
        return cy.contains('Wrong email or password');
    }

    enterEmail(email) {
        this.emailField.type(email);
    }

    enterPassword(password) {
        this.passwordField.type(password);
    }

    clickLoginButton() {
        this.loginButton.click();
    }

    loginWithCredentials(email, password) {
        this.enterEmail(email);
        this.enterPassword(password);
        this.clickLoginButton();
    }

    triggerEmptyErrorMessageForField(fieldName) {
        const element = fieldName === 'email' ? this.emailField : this.passwordField;
        element.focus();
        element.blur();
    }

    verifyLoginButtonIsDisabled(){
        this.loginButton.should('be.disabled');
    }
    
    verifyErrorMessageForFieldIsVisible(fieldName){
        const element = fieldName === 'email' ? this.emailField : this.passwordField;
        element.should('be.visible');
    }

    verifyIncorrectEmailMessageIsVisible() {
        this.incorrectEmailField.should('be.visible');
    }

    verifyWrongDataMessageIsVisible() {
        this.wrongDataMessage.should('be.visible');
    }
}

export default new SignInForm();
