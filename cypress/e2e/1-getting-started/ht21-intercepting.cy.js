/// <reference types="cypress" />
import HomePage from "../../pom/pages/HomePage"
import SignInForm from "../../pom/forms/SignInForm"


describe('Intercept' , () =>{
    const homePage = HomePage;
    const signInForm = SignInForm;

    it('Intercept query', () => {
        const newUserNameResponse = {
            "status": "ok",
            "data": {
                "userId": 227789,
                "photoFilename": "default-user.png",
                "name": "Polar",
                "lastName": "Bear"
            }
        }

        cy.intercept('GET', '/api/users/profile', newUserNameResponse).as('changeUserName');
        homePage.visit();
        homePage.openSignInForm();
        signInForm.loginWithCredentials('anna.fatyus+testUser1@gmail.com', 'Qwerty123tesT');
        cy.get('[routerlink="profile"]').click();
        cy.wait('@changeUserName');
    });
})