import GaragePage from "../../pom/pages/GaragePage";
import HomePage from "../../pom/pages/HomePage";
import SignInForm from "../../pom/forms/SignInForm";

describe('Adding new cars', () =>{

    beforeEach(()=>{
        HomePage.visit();
        HomePage.openSignInForm();
        SignInForm.loginWithCredentials(Cypress.env('TEST_USER_EMAIL2'), Cypress.env('TEST_USER_PASSWORD2'));
        GaragePage.pageHeader.should('be.visible');
        GaragePage.visit();
     });

    it('Add [Audi TT] car', () => {
        GaragePage.addNewCar('Audi', 'TT', '10');
        GaragePage.verifyLastAddedCar('Audi TT');
    });
    
    it('Add [BMW X5] car', () => {
        GaragePage.addNewCar('BMW', 'X5', '9868');
        GaragePage.verifyLastAddedCar('BMW X5');
    });

    it('Add [Ford Mondeo] car', () => {
        GaragePage.addNewCar('Ford', 'Mondeo', '76');
        GaragePage.verifyLastAddedCar('Ford Mondeo');
    });

    it('Add [Porsche Panamera] car', () => {
        GaragePage.addNewCar('Porsche', 'Panamera', '10987');
        GaragePage.verifyLastAddedCar('Porsche Panamera');
    });
    
    it('Add [Fiat Scudo] car', () => {
        GaragePage.addNewCar('Fiat', 'Scudo', '295');
        GaragePage.verifyLastAddedCar('Fiat Scudo');
    });
})