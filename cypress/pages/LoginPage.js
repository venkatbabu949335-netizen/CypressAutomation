class LoginPage {

  visit() {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  }

  enterUsername(username) {
    cy.get('[placeholder="Username"]').type(username)
  }

  enterPassword(password) {
    cy.get('[placeholder="Password"]').type(password)
  }

  clickLogin() {
    cy.get('.oxd-button').click()
  }

  login(username, password) {
    this.enterUsername(username)
    this.enterPassword(password)
    this.clickLogin()
  }
}

export default new LoginPage()