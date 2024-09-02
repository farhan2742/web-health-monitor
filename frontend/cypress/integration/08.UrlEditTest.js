/// <reference types ="Cypress"/>
context('Edit URL Check', () => {
    it('Check if urls are can be edited', () => {
        cy.visit(Cypress.env('baseURL')).wait(5000)
        cy.get('[data-testid="loginNavbarLink"]').click();
        cy.get('[data-testid="loginEmailFormField"]').type('farhan2742@amazon.com')
        cy.get('[data-testid="loginPasswordFormField"]').type('demo123')
        cy.get('[data-testid="loginSubmitFormButton"]').click().wait(5000);
        cy.get('[title="Go to next page"]').click();
        cy.get('[data-testid="EditButton"]').last().click()
        cy.get('[data-testid="EditText"]').type('http://www.espn.com')
        cy.get('[data-testid="EditSubmit"]').click().wait(5000);
        cy.get('[data-testid="SuccessAlert"]').should('have.length', 1).wait(150)
        cy.get('[data-testid="SuccessAlertClose"]').click()
        cy.get('[data-testid="logoutNavbarLink"]').click().wait(500)
    });
})