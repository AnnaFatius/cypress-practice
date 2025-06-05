const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space/',
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
