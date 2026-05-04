describe("Action page",()=>{
    it("test",()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('#name').type("KAKANI VENKATA SUBBAIAH")
        cy.get('#email').type("venkat9@gmail.com")
        cy.get('#phone').type("9729729729")
        cy.get('#textarea').type("G378")
        cy.get(".form-check > input[type='radio']").last().check()
        cy.get(".form-check > input[type='checkbox']").check(['sunday', 'monday'])
        cy.get('select[id=country]').select('China')
        cy.get('select[id=colors]').select('white')
 cy.get('select[id=animals]').select('lion')
 //cy.get('input#datepicker').type('03/10/1996 {enter}')

//  cy.get('input#txtDate.hasDatepicker')
//  .click()
//  cy.contains('select.ui-datepicker-year')
//  cy.get("select.ui-datepicker-year").select('2009')
//  .get("select.ui-datepicker-month").select('2')
//  .get('table.ui-datepicker-calendar>tbody>tr:nth-child(3) >td:nth-child(1)').click();

    })
})