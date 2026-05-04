const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    supportFile: "cypress/support/e2e.js", 
  reporter: 'cypress-mochawesome-reporter',
reporterOptions: {
  reportDir: 'cypress/reports',
  charts: true,
  reportPageTitle: 'Test Report',
  embeddedScreenshots: true,
  inlineAssets: true
},
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
