const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    supportFile: "cypress/support/e2e.js", 
     reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
