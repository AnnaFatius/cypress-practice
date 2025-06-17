/// <reference types="cypress" />

// Завдання 3:

// Встановіть будь-який плагін для API тестів 

// Напишіть 3 будь-які API тести за допомогою методу плагіну

import 'cypress-plugin-api'

describe('Testing with Plugin', () => {

    let sid

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
        
        cy.request('POST', '/api/auth/signin', user)
        .then((response) => {
          const token = response.headers["set-cookie"][0].split(';')[0];
          expect(typeof token).to.eq('string');
          sid = token;
        }); 

    });
    after(() => {
        const carId = 368540;
        if (carId) {
            cy.request({
                method: 'DELETE',
                url: `/api/expenses/${carId}`,
                headers: {
                    'Cookie': sid
                },
            })
                .then((response) => {
                    expect(response.status).to.be.eq(200);
                })
        }
    });

    it('GET - cars brands', () => {

        cy.api('GET', '/api/cars/brands')
            .then((response) => {
            const body = response.body.data;
            expect(response.status).to.be.eq(200);
            expect(body[0].title).to.be.eq('Audi');
        })
    });

    it('GET - cars models', () => {

        cy.api('GET', '/api/cars/models')
            .then((response) => {
            const body = response.body.data;
            expect(response.status).to.be.eq(200);
            expect(body[7].title).to.be.eq('X5');
        })
    });

    it('POST - add new car', () => {
        const newCar = {
            "carBrandId": 1,
            "carModelId": 2,
            "mileage": 111,

        }

        cy.api({
            method: 'POST', 
            url: '/api/cars',
            body: newCar,
            headers: {
                'Cookie': sid
            } 
        })

            .then((response) => {
            const body = response.body.data;
            expect(response.status).to.be.eq(201);
            expect(body.brand).to.be.eq('Audi');
            expect(body.model).to.be.eq('R8');
            expect(body.mileage).to.be.eq(newCar.mileage);
        })
    });
});