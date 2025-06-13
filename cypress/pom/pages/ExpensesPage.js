class ExpensesPage{

    get addAnExpenseButton(){
        return cy.get('div.panel-page .btn-primary');
    }

    get addAnExpenseForm(){
        return cy.contains('h4', 'Add an expense');
    }   

    get carDropdownInExpenseForm(){
        return cy.get('#addExpenseCar');
    }

    get reportDateInExpenseForm(){
        return  cy.get('#addExpenseDate');
    }

    get mileageFieldInExpenseForm(){
        return  cy.get('#addExpenseMileage');
    }

    get litersFieldInExpenseForm() {
        return cy.get('#addExpenseLiters');
    }

    get costFieldInExpenseForm() {
        return cy.get('#addExpenseTotalCost');
    }

    get addNewExpenseFormButton() {
        return cy.get('div.modal-footer .btn-primary');
    }

    addNewExpense(carIndex, liters, cost, date){
        this.carDropdownInExpenseForm
        .find('option')
        .eq(carIndex)
        .then(option => {
            const value = option.val();
            this.carDropdownInExpenseForm.select(value);
        });
        this.reportDateInExpenseForm.clear().type(date);
        this.mileageFieldInExpenseForm.invoke('val').then((oldMileage) => {
            const newMileage = +oldMileage + 10;

            this.mileageFieldInExpenseForm.clear().type(newMileage);
            this.litersFieldInExpenseForm.type(liters);
            this.costFieldInExpenseForm.type(cost);
            this.addNewExpenseFormButton.click();
        })
    }





    visit(){
        cy.visit('/panel/expenses');
    }
}

export default new ExpensesPage();