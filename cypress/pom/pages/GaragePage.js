class GaragePage{

    get pageHeader(){
        return cy.contains('h1', 'Garage');
    }

    get addNewCarButton(){
        return cy.get('div.panel-page_heading .btn-primary');
    }

    get brandDropdown(){
        return cy.get('#addCarBrand');
    }

    get modalDropdown(){
        return cy.get('#addCarModel');
    }

    get mileageField(){
        return cy.get('#addCarMileage');
    }

    get submitAddingNewFormButton(){
        return cy.get('app-add-car-modal .btn-primary');
    }

    get addCarFormHeader(){
        return cy.get('.modal-title');
    }

    get cancelButtonInAddNewCarForm(){
        return cy.get('.btn-secondary');
    }

    get addedCarNames() {
        return cy.get('p.car_name');
    }

    visit(){
        cy.visit('/panel/garage');
    }

    addNewCar(brand, model, mileage){
        this.addNewCarButton.click();
        this.brandDropdown.select(brand);
        this.modalDropdown.select(model);
        this.mileageField.type(mileage);
        this.submitAddingNewFormButton.click();
    }

    verifyLastAddedCar(carName) {
        this.addedCarNames.first().should('have.text', carName);
    }
}

export default new GaragePage();