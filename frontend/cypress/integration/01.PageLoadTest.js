/// <reference types ="Cypress"/>
context('Page Loads', () => {
    it('Check if page Loads', () => {
        cy.visit(Cypress.env('baseURL')).wait(5000)
    });
})