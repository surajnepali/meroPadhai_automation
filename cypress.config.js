const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  projectId: 'v4n17b',
  chromeWebSecurity: false,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000,
  viewportHeight: 1080,
  viewportWidth: 1920,
  experimentalSessionAndOrigin: true,
  env: {
    url: "https://meropadhai.com",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: 'cypress/e2e/Code/BDD/*.feature',
  },
});
