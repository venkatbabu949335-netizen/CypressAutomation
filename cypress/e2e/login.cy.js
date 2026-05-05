describe("Login Tests (CSV Driven)", () => {
    let data = [];

  before(() => {
    cy.loadCsv("login.csv").then((csvData) => {
      data = csvData;
    });
  });

  it("Run login tests from CSV", () => { //login test

    data.forEach((row) => {

      cy.log(row.testDescription)

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

      cy.get('[placeholder="Username"]').type(row.username)
      cy.get('[placeholder="Password"]').type(row.password)
      cy.get('.oxd-button').click();
        cy.contains('Dashboard').should('be.visible')
     cy.reload();

    })

  })

})