const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3ymtkd',
  e2e: {
    baseUrl: 'http://www.uitestingplayground.com/',
    viewportWidth: 1366,
  	viewportHeight: 768,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
