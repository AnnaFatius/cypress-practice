const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://example.cypress.io',
    },
    retries: {
      runMode: 3,
      openMode: 2
    },
    viewportHeight: 800,
    viewportWidth: 1280,
    pageLoadTimeout: 20000,
    defaultCommandTimeout: 10000
  },
);
