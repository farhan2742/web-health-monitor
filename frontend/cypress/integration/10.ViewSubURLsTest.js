/// <reference types ="Cypress"/>
context('View Sub-Urls Check', () => {
    it('Check if sub-urls can be viewed', () => {
        cy.visit(Cypress.env('baseURL')).wait(5000)
        cy.get('[data-testid="loginNavbarLink"]').click();
        cy.get('[data-testid="loginEmailFormField"]').type('farhan2742@amazon.com')
        cy.get('[data-testid="loginPasswordFormField"]').type('demo123')
        cy.get('[data-testid="loginSubmitFormButton"]').click().wait(5000)
        cy.get('[data-testid="ViewSubButton"]').first().click().wait(5000)
        cy.get('[data-testid="SubDialog"]').should('have.length', 1)
        cy.get('[data-testid="SubChart"]').should('have.length', 1)
        cy.get('[data-testid="SubClose"]').click();
        cy.get('[data-testid="logoutNavbarLink"]').click().wait(500)
    });
})