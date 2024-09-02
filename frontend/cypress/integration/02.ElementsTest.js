/// <reference types ="Cypress"/>
context('Elements Check', () => {
    it('Check if all necessary elements exist', () => {
        cy.visit(Cypress.env('baseURL')).wait(5000)
        cy.get('[data-testid="loginNavbarLink"]').click();
        cy.get('[data-testid="loginEmailFormField"]').type('farhan2742@amazon.com')
        cy.get('[data-testid="loginPasswordFormField"]').type('demo123')
        cy.get('[data-testid="loginSubmitFormButton"]').click().wait(5000);
        cy.get('[data-testid="AddNew"]').should('have.length', 1)
        cy.get('[data-testid="AddNew"]').click();
        cy.get('[data-testid="AddNewDialog"]').should('have.length', 1)
        cy.get('[data-testid="AddNewText"]').should('have.length', 1)
        cy.get('[data-testid="AddNewSubmit"]').should('have.length', 1)
        cy.get('[data-testid="AddNewCancel"]').should('have.length', 1)
        cy.get('[data-testid="AddNewCancel"]').click();
        cy.get('[data-testid="URL_Table"]').should('have.length', 1)
        cy.get('.MuiDataGrid-main').should('have.length', 1)
        cy.get('.MuiDataGrid-columnHeaders').should('have.length', 1)
        cy.get('.MuiDataGrid-row').should('have.length.greaterThan', 1)
        cy.get('[title="Go to next page"]').should('have.length', 1)
        cy.get('[data-testid="ViewSubButton"]').should('have.length.greaterThan', 1)
        cy.get('[data-testid="ViewSubButton"]').first().click().wait(5000)
        cy.get('[data-testid="SubDialog"]').should('have.length', 1)
        cy.get('[data-testid="SubChart"]').should('have.length', 1)
        cy.get('[data-testid="SubClose"]').should('have.length', 1)
        cy.get('[data-testid="SubClose"]').click();
        cy.get('[data-testid="ViewStatsButton"]').should('have.length.greaterThan', 1)
        cy.get('[data-testid="ViewStatsButton"]').first().click().wait(5000)
        cy.get('[data-testid="StatsDialog"]').should('have.length', 1)
        cy.get('.highcharts-container ').should('have.length', 2)
        cy.get('[data-testid="StatsClose"]').should('have.length', 1)
        cy.get('[data-testid="StatsClose"]').click();
        cy.get('[data-testid="EditButton"]').should('have.length.greaterThan', 1)
        cy.get('[data-testid="EditButton"]').first().click()
        cy.get('[data-testid="EditDialog"]').should('have.length', 1)
        cy.get('[data-testid="EditText"]').should('have.length', 1)
        cy.get('[data-testid="EditSubmit"]').should('have.length', 1)
        cy.get('[data-testid="EditClose"]').should('have.length', 1)
        cy.get('[data-testid="EditClose"]').click();
        cy.get('[data-testid="DeleteButton"]').should('have.length.greaterThan', 1)
        cy.get('[data-testid="logoutNavbarLink"]').click().wait(500)
    });
})