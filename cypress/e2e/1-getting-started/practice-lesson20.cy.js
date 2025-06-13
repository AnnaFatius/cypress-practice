/// <reference types="cypress" />
import HomePage from "../../pom/pages/HomePage";
import SignInForm from "../../pom/forms/SignInForm";

describe('Sign in with POM', () => {
    
    beforeEach(()=>{
       HomePage.visit();
       HomePage.openSignInForm();
    });
    it('Successful sign in', () => {
        SignInForm.loginWithCredentials('anna.fatyus+testUser1@gmail.com' , 'Qwerty123tesT');
        cy.get('h1').should('have.text', 'Garage');
    });

    it('Sign in without email', () => {
        SignInForm.triggerEmptyErrorMessageForField('email');
        SignInForm.enterPassword('Qwerty123tesT');
        SignInForm.verifyLoginButtonIsDisabled();
        SignInForm.verifyErrorMessageForFieldIsVisible('email');
    });

    it('Sign in without password', () => {
        SignInForm.enterEmail('anna.fatyus+testUser1@gmail.com');
        SignInForm.triggerEmptyErrorMessageForField('password');
        SignInForm.verifyLoginButtonIsDisabled();
        SignInForm.verifyErrorMessageForFieldIsVisible('password');
    });

    it('Sign in with invalid email', () => {
        SignInForm.enterEmail('anna.fatyus')
        SignInForm.enterPassword('Qwerty123tesT');
        SignInForm.verifyLoginButtonIsDisabled();
        SignInForm.verifyIncorrectEmailMessageIsVisible();
    });

    it('Sign in with incorrect data', () => {
        SignInForm.loginWithCredentials('anna.fayfg@gmail.com' , 'Qwerty12lkmntesT');
        SignInForm.verifyWrongDataMessageIsVisible();
    });
})

describe.skip('Sign in WITHOUT POM', () => {
    
    beforeEach(()=>{
        cy.visit('/');
        cy.get('.header_signin').click();
    });
    it('Successful sign in', () => {
        cy.get('#signinEmail').type('anna.fatyus+testUser1@gmail.com');
        cy.get('#signinPassword').type('Qwerty123tesT');
        cy.get('[class="btn btn-primary"]').click();
        cy. get('h1').should('have.text', 'Garage');
    });

    it('Sign in without email', () => {
        cy.get('#signinEmail').focus().blur();
        cy.get('#signinPassword').type('Qwerty123tesT');
        cy.get('[class="btn btn-primary"]').should('be.disabled');
        cy.contains('Email required').should('be.visible');
    });

    it('Sign in without password', () => {
        cy.get('#signinEmail').type('anna.fatyus+testUser1@gmail.com')
        cy.get('#signinPassword').focus().blur();
        cy.get('[class="btn btn-primary"]').should('be.disabled');
        cy.contains('Password required').should('be.visible');
    });

    it('Sign in with invalid email', () => {
        cy.get('#signinEmail').type('anna.fatyus')
        cy.get('#signinPassword').type('Qwerty123tesT');
        cy.get('[class="btn btn-primary"]').should('be.disabled');
        cy.contains('Email is incorrect').should('be.visible');
    });

    it('Sign in with incorrect data', () => {
        cy.get('#signinEmail').type('anna.fatyus+testUygckvljser1@gmail.com')
        cy.get('#signinPassword').type('tejkhvi2GsT');
        cy.get('[class="btn btn-primary"]').click();
        cy.contains('Wrong email or password').should('be.visible');
    });
})