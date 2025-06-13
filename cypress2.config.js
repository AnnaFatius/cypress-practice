const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://guest:welcome2qauto@qauto2.forstudy.space',
    },

    retries: {
      runMode: 2,
      openMode: 2
    },

    env: {
      AUTH_NAME: 'guest',
      AUTH_PASSWORD: 'welcome2qauto',
      TEST_USER_EMAIL2: 'nana.tnyd+testUser1@gmail.com',
      TEST_USER_PASSWORD2: 'QWERTY098test',
    },
  });