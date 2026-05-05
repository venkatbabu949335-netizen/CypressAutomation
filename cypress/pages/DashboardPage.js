class DashboardPage {

  verifyDashboard() {
    cy.contains('Dashboard').should('be.visible')
  }
}

export default new DashboardPage()