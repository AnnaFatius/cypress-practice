/// <reference types="cypress" />


describe('Search buttons', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('header', () => {
        cy.get('button').contains('About');
        cy.get('[class="btn header-link"]').contains('Contacts');
        cy.get('[class="header-link -guest"]');
        cy.get('button').contains('Sign In');
        cy.get('[class="hero-descriptor_btn btn btn-primary"]');
    })
  
    it('footer', () => {
        cy.get('.socials_link').first();
        cy.get('[class*="icon-telegram"]');
        cy.get('.socials_link').filter('[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]');
        cy.get('.socials_link').eq(3);
        cy.get('[class*="icon-linkedin"]');
        })

    it('links', () => {
        cy.get('.contacts_link').filter('[href="https://ithillel.ua"]');
        cy.get('.contacts_link').contains('support@ithillel.ua');
    })
    
})