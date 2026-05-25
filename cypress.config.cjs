const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true,
    supportFile: false,
    pageLoadTimeout: 120000, // Aumentado para 120s para o Codespaces
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});