describe("login to OrangeHrm",()=>{
    it("login to OrangeHrm it block",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('[placeholder="Username"]').type(Cypress.env('username'));
        cy.get('[placeholder="Password"]').type(Cypress.env('password'));
        cy.get('.oxd-button').click();
        cy.contains('Dashboard').should('be.visible')
    
})
})