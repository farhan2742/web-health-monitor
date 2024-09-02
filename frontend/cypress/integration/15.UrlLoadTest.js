/// <reference types ="Cypress"/>
context('Url Load Check', () => {
    it('Checks if urls are loaded on each page load', () => {
        cy.visit(Cypress.env('baseURL')).wait(5000)
        cy.get('[data-testid="loginNavbarLink"]').click();
        cy.get('[data-testid="loginEmailFormField"]').type('farhan2742@amazon.com')
        cy.get('[data-testid="loginPasswordFormField"]').type('demo123')
        cy.get('[data-testid="loginSubmitFormButton"]').click().wait(5000)
        cy.get('[class="MuiDataGrid-cellContent"]').first().contains('http://www.skipq.org');
        cy.get('[title="Go to next page"]').click();
        cy.get('[class="MuiDataGrid-cellContent"]').last().contains('http://www.hbo.com');
        cy.get('[data-testid="logoutNavbarLink"]').click().wait(500)
    });
})