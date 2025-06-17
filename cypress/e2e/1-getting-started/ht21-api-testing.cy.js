/// <reference types="cypress" />

describe('API testing', () => {

    let sid, expenseId;

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
            if (expenseId) {
                cy.request({
                    method: 'DELETE',
                    url: `/api/expenses/${expenseId}`,
                    headers: {
                        'Cookie': sid
                    },
                })
                    .then((response) => {
                        expect(response.status).to.be.eq(200);
                    })
            }
    });

    it('POST add new expenses', () => {
        const newExpenses = {
            "carId": 367300,
            "mileage": 350,
            "liters": 11,
            "totalCost": 11,
            "reportedAt": "2025-06-15",
            "forceMileage": false
        }
            cy.request({
                method: 'POST',
                url: '/api/expenses',
                body: newExpenses,
                headers: {
                    'Cookie': sid
                }
            })
                .then((response) => {
                    const body = response.body.data;
                    expenseId = body.id;

                    expect(response.status).to.be.eq(200);
                    expect(body.mileage).to.be.eq(newExpenses.mileage);
                })        
    });

    it('GET all fuel expenses', () => {
        const pageNumber = 1, carId = 367300;
        cy.request({
          method: 'GET',
          url: `/api/expenses?carId=${carId}&page=${pageNumber}`,
          headers: {
            'Cookie': sid,
          },
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.status).to.eq('ok');
        });
      });
    
      it('GET - fuel expense by ID', () => {
        const expenseId = 349888;
        cy.request({
          method: 'GET',
          url: `/api/expenses/${expenseId}`,
          headers: {
            'Cookie': sid,
          },
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.status).to.eq('ok');
          expect(response.body.data.id).to.eq(expenseId);
        });
      });

      it('PUT - edits expense by ID', () => {
        const expenseId = 349909;
        const newExpenses = {
            "carId": 368249,
            "reportedAt": "2025-06-16",
            "mileage": 130,
            "liters": 43,
            "totalCost": 591
        }
        cy.request({
          method: 'PUT',
          url: `/api/expenses/${expenseId}`,
          body: newExpenses,
          headers: {
            'Cookie': sid,
          },
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.status).to.eq('ok');

        });
      });   
});