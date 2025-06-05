
describe('Registration Form', () => {
    beforeEach(() => {
        cy.visit('/'); 
    });
  
    it('Messages about an empty field', () => {

        cy.contains('Sign up').click();

        cy.get('[class="btn btn-primary"]').should('be.disabled');
        
        cy.get('[id="signupName"]').focus().blur();
        cy.contains('Name required').should('be.visible');
        cy.get('[id="signupName"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    
        cy.get('[id="signupLastName"]').focus().blur();
        cy.contains('Last name required').should('be.visible');
        cy.get('[id="signupLastName"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');

        cy.get('[id="signupEmail"]').focus().blur();
        cy.contains('Email required').should('be.visible');
        cy.get('[id="signupEmail"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');

        cy.get('[id="signupPassword"]').focus().blur();
        cy.contains('Password required').should('be.visible');
        cy.get('[id="signupPassword"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
 
        cy.get('[id="signupRepeatPassword"]').focus().blur();
        cy.contains('Re-enter password required').should('be.visible');
        cy.get('[id="signupRepeatPassword"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');

    });

    it.only('Valid user data in the registration form', () => {
        cy.contains('Sign up').click();
               
        cy.get('[id="signupName"]').type('Anna');
        cy.contains('Name required').should('not.exist');
    
        cy.get('[id="signupLastName"]').type('Test');
        cy.contains('Last name required').should('not.exist');

        const email = `anna.fatyus+testUser${Date.now()}01@gmail.com`
            cy.get('[id="signupEmail"]').type(email);

        cy.get('[id="signupPassword"]').type('Qwerty123tesT');
        cy.contains('Password required').should('not.exist');
 
        cy.get('[id="signupRepeatPassword"]').type('Qwerty123tesT');
        cy.contains('Re-enter password required').should('not.exist');

        cy.contains('Register').click();
   });

    it('Invalid user data in the registration form', () => {
        cy.contains('Sign up').click();

        //Name
        cy.get('[id="signupName"]').type('A');
        cy.get('[id="signupName"]').blur();
        cy.get('[class="invalid-feedback"]').contains('Name has to be from 2 to 20 characters long').should('be.visible');
        cy.get('[id="signupName"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');

        cy.get('[id="signupName"]').type('qwertyiopqweujrtyuiop');
        cy.get('[id="signupName"]').blur();
        cy.get('[class="invalid-feedback"]').contains('Name has to be from 2 to 20 characters long').should('be.visible');
        cy.get('[id="signupName"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('[id="signupName"]').clear(); 

        //LastName
        cy.get('[id="signupLastName"]').type('o');
        cy.get('[id="signupLastName"]').blur();
        cy.get('[class="invalid-feedback"]').contains('Last name has to be from 2 to 20 characters long').should('be.visible');
        cy.get('[id="signupLastName"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');

        cy.get('[id="signupLastName"]').type('qwertyuioiughiwertyuiop');
        cy.get('[id="signupLastName"]').blur();
        cy.get('[class="invalid-feedback"]').contains('Last name has to be from 2 to 20 characters long').should('be.visible');
        cy.get('[id="signupLastName"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('[id="signupLastName"]').clear(); 

        //Email
        cy.get('[id="signupEmail"]').type('aaognvosn;o');
        cy.get('[id="signupEmail"]').blur();
        cy.get('[class="invalid-feedback"]').contains('Email is incorrect').should('be.visible');
        cy.get('[id="signupEmail"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('[id="signupEmail"]').clear(); 
        
        //Password
        cy.get('[id="signupPassword"]').type('jdh');
        cy.get('[id="signupPassword"]').blur();
        cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible');
        cy.get('[id="signupPassword"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        

        //RepeatPassword
        cy.get('[id="signupRepeatPassword"]').type('QwertykycykckyctesT');
        cy.get('[id="signupRepeatPassword"]').blur();
        cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible');
        cy.get('[id="signupRepeatPassword"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');

        cy.get('[id="signupPassword"]').clear()
        cy.get('[id="signupRepeatPassword"]').clear()
    }); 
  });