describe("login to OrangeHrm",()=>{
    it("login to OrangeHrm it block",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('[placeholder="Username"]').type("Admin");
        cy.get('[placeholder="Password"]').type("admin123");
        cy.get('.oxd-button').click();
        cy.contains('Dashboard').should('be.visible')
    
})
})