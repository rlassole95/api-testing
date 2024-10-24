const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://jsonplaceholder.typicode.com',
  },
  reporter: 'spec',
  reporterOptions: {
    mochaFile: 'reports/test-results-[hash].xml',
    toConsole: true
  }
});
