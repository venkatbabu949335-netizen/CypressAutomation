const { defineConfig } = require("cypress");

const { convertCsvToJson } = require("./cypress-util/csvUtil");

module.exports = defineConfig({
  allowCypressEnv: true,

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
      on("task", {
        csvToJson({ inputPath }) {
          return convertCsvToJson(inputPath);
        }
      });
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
