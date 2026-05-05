describe("login to OrangeHrm",()=>{

    before(() => {
     cy.loadCsv("test.csv");   // 👈 just pass file name
    });
 
 it("read data from json", function() {
       
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('[placeholder="Username"]').type(this.testData[0].username);
        cy.get('[placeholder="Password"]').type(this.testData[0].password);
        cy.get('.oxd-button').click();
        cy.contains('Dashboard').should('be.visible')
  });
      
    
})
