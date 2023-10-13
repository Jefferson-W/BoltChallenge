const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    env:{
      senha: '123456@'
    },
    experimentalRunAllSpecs: true,    
  },
  watchForFileChanges: false,
});
