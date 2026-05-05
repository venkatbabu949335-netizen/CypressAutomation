import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashboardPage'

describe("OrangeHRM Login POM", () => {

  it("Valid Login", () => {

    LoginPage.visit()

    LoginPage.login(
      Cypress.env('username'),
      Cypress.env('password')
    )

    DashboardPage.verifyDashboard()
  })

})