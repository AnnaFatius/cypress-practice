import GaragePage from "../../../pom/pages/GaragePage";
import HomePage from "../../../pom/pages/HomePage";
import SignInForm from "../../../pom/forms/SignInForm";
import ExpensesPage from "../../../pom/pages/ExpensesPage";

const todayDate = new Date();

describe('Add new expense in "Fuel expenses" page', () =>{

    beforeEach(()=>{
        HomePage.visit();
        HomePage.openSignInForm();
        SignInForm.loginWithCredentials(Cypress.env('TEST_USER_EMAIL2'), Cypress.env('TEST_USER_PASSWORD2'));
        GaragePage.pageHeader.should('be.visible');
        ExpensesPage.visit();
        ExpensesPage.addAnExpenseButton.click();
        ExpensesPage.addAnExpenseForm.should('be.visible');
     });

    it('Adding new expense (index 0)', () => {
        ExpensesPage.addNewExpense(0, '4', '34', `${todayDate.getDate()}.${todayDate.getMonth() + 1}.${todayDate.getFullYear()}`);
    });

    it('Adding new expense(index 2)', () => {
        ExpensesPage.addNewExpense(2, '21', '93', `${todayDate.getDate()}.${todayDate.getMonth() + 1}.${todayDate.getFullYear()}`);
    });

    it('Adding new expense(index 5)', () => {
        ExpensesPage.addNewExpense(4, '1', '4', `${todayDate.getDate()}.${todayDate.getMonth() + 1}.${todayDate.getFullYear()}`);
    });
})