// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Directory where test files are located
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Fail build on CI if test.only is left accidentally
  forbidOnly: !!process.env.CI,

  // Retry tests on CI
  retries: process.env.CI ? 2 : 0,

  // Limit workers on CI to save resources
  workers: process.env.CI ? 1 : undefined,

  // Reporters: list for CLI, html for artifact, allure for integration
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright'],
  ],

  // Global timeouts
  timeout: 120_000,

  use: {
    // Per action timeout
    actionTimeout: 10_000,

    // Navigation timeout
    navigationTimeout: 20_000,

    // Enable tracing for failed tests only (optional)
    trace: 'on-first-retry',
  },

  // Define projects for different browsers
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Uncomment to enable Firefox or WebKit
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});
