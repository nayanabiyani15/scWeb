const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Project ID is set through Github Actions
  // projectId: '3ymtkd',
  e2e: {
    baseUrl: 'http://www.uitestingplayground.com/',
    viewportWidth: 1366,
  	viewportHeight: 768,
    setupNodeEvents(on, config) {
      const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
      const exec = require('child_process').execSync;
        module.exports = (on) => {
          on('before:run', async (details) => {
          console.log('override before:run');
          await beforeRunHook(details);
          await exec("IF EXIST cypress\\screenshots rmdir /Q /S cypress\\screenshots")
          await exec("IF EXIST cypress\\reports rmdir /Q /S cypress\\reports")
        });
        on('after:run', async () => {
          console.log('override after:run');
          await afterRunHook();
        });
      };
    },
    "reporter": "junit",
    "reporterOptions": {
        "reportDir": "cypress/reports",
        "mochaFile": "cypress/reports/reports-[hash].xml",
        "toConsole": true
      }
  },
});
