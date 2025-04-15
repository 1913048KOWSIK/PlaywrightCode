// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report' }], // Generates HTML report
    ['allure-playwright'], // Generates Allure report
  ],

  timeout: 120000, // 120 seconds timeout for each test

  use: {
    actionTimeout: 10000, // Each action waits up to 10 seconds
    navigationTimeout: 20000, // Navigation waits up to 20 seconds
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
