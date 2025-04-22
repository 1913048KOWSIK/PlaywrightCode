// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Limit workers on CI to avoid resource issues */
  workers: process.env.CI ? 1 : undefined,

  /* Configure reporters */
  reporter: [
    ['list'], // Console output
    ['html', { outputFolder: 'playwright-report', open: 'never' }], // HTML report
    ['allure-playwright'], // Allure report
  ],

  /* Global timeout settings */
  timeout: 120_000, // 120 seconds per test

  use: {
    actionTimeout: 10_000, // Timeout for individual actions
    navigationTimeout: 20_000, // Timeout for page navigations
  },

  /* Define projects (browsers) */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Add Firefox/WebKit if needed
  ],
});
