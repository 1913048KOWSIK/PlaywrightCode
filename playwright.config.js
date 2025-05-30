const { devices } = require('@playwright/test');

module.exports = {
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,  

  workers: process.env.CI ? 1 : undefined,  

  // ✅ Enhanced reporters
  reporter: [
    ['list'],
    ['playwright-html-reporter', { outputFolder: 'html-report', openReport: 'always' }],
    ['allure-playwright'],
  ],

  timeout: 120_000,

  use: {
    actionTimeout: 10_000,
    navigationTimeout: 20_000,
    trace: 'on-first-retry',          // Trace recording
    video: 'retain-on-failure',       // Video recording	
    screenshot: 'only-on-failure',    // Screenshot recording
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
};
