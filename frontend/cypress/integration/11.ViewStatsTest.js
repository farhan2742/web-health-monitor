/// <reference types ="Cypress"/>
context('View Url Stats Check', () => {
    it('Check if Url stats can be viewed', () => {
        cy.visit(Cypress.env('baseURL')).wait(5000)
        cy.get('[data-testid="loginNavbarLink"]').click();
        cy.get('[data-testid="loginEmailFormField"]').type('farhan2742@amazon.com')
        cy.get('[data-testid="loginPasswordFormField"]').type('demo123')
        cy.get('[data-testid="loginSubmitFormButton"]').click().wait(5000)
        cy.get('[data-testid="ViewStatsButton"]').first().click().wait(5000)
        cy.get('.highcharts-container ').should('have.length', 2)
        cy.get('[data-testid="StatsClose"]').click();
        cy.get('[data-testid="logoutNavbarLink"]').click().wait(500)
    });
})