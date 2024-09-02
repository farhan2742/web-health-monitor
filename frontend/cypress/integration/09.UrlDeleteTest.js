/// <reference types ="Cypress"/>
context('Delete URL Check', () => {
    it('Check if urls are can be deleted', () => {
        cy.visit(Cypress.env('baseURL')).wait(5000)
        cy.get('[data-testid="loginNavbarLink"]').click();
        cy.get('[data-testid="loginEmailFormField"]').type('farhan2742@amazon.com')
        cy.get('[data-testid="loginPasswordFormField"]').type('demo123')
        cy.get('[data-testid="loginSubmitFormButton"]').click().wait(5000);
        cy.get('[title="Go to next page"]').click();
        cy.get('[data-testid="DeleteButton"]').last().click().wait(5000);
        cy.get('[data-testid="SuccessAlert"]').should('have.length', 1).wait(150)
        cy.get('[data-testid="SuccessAlertClose"]').click()
        cy.get('[data-testid="logoutNavbarLink"]').click().wait(500)
    });
})