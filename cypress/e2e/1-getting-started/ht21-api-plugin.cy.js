/// <reference types="cypress" />

// Завдання 3:

// Встановіть будь-який плагін для API тестів 

// Напишіть 3 будь-які API тести за допомогою методу плагіну

import 'cypress-plugin-api'

describe('Plugin', () => {

    before(() => {     
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        })
        
        const user = {
          email: "anna.fatyus+testUser1@gmail.com",
          password: "Qwerty123tesT",
        };         
    });
    it('Testing with plugin', () => {

        cy.request('GET', '/api/cars/brands')
            .then((response) => {
            const body = response.body.data;
            expect(response.status).to.be.eq(200);
            expect(body[0].title).to.be.eq('Audi');
        })
    });
});