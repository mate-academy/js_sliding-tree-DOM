const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: true,
  viewportHeight: 1920,
  viewportWidth: 1080,
  screenshotOnRunFailure: true,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'raw_reports',
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:8080',
    supportFile: false,
  },
})
