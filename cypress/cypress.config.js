const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      on('before:run', () => {
        console.log('Starting test run...')
      })

      return require('@cypress/code-coverage/task')(on, config);
    },
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'results/junit.xml',
      toConsole: true
    }
  }
});