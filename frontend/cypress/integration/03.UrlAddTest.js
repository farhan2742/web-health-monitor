/// <reference types ="Cypress"/>
context('Add URL Check', () => {
    it('Check if new urls are can be added', () => {
        cy.visit(Cypress.env('baseURL')).wait(5000)
        cy.get('[data-testid="loginNavbarLink"]').click();
        cy.get('[data-testid="loginEmailFormField"]').type('farhan2742@amazon.com')
        cy.get('[data-testid="loginPasswordFormField"]').type('demo123')
        cy.get('[data-testid="loginSubmitFormButton"]').click().wait(5000);
        cy.get('[data-testid="AddNew"]').click();
        cy.get('[data-testid="AddNewText"]').type('http://www.test.com')
        cy.get('[data-testid="AddNewSubmit"]').click().wait(5000);
        cy.get('[data-testid="SuccessAlert"]').should('have.length', 1)
        cy.get('[data-testid="SuccessAlertClose"]').click()
        cy.get('[data-testid="logoutNavbarLink"]').click().wait(500)
    });
})