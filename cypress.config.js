const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8080",
    specPattern: ["cypress/e2e/login.cy.js", "cypress/e2e/**/*.cy.js"],
  },
});
