const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/e2e/*.cy.js",
    excludeSpecPattern: [
      "**/node_modules/**",
      "**/Application Data/**",
      "**/AppData/**"
    ]
  }
});
            