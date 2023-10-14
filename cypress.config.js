const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { configureAllureAdapterPlugins } = require("@mmisty/cypress-allure-adapter/plugins");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      configureAllureAdapterPlugins(on, config)
      return config;

    },

    env: {
      allure: true,
      senha: '123456@'
    },
    experimentalRunAllSpecs: true,
  },
  video: true,    
  watchForFileChanges: false,
});
