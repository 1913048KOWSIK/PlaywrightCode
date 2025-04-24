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
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright'],
  ],

  timeout: 120_000,

  use: {
    actionTimeout: 10_000,
    navigationTimeout: 20_000,

    // ✅ Enable trace recording
    trace: 'on-first-retry',   
           //  'on',

    // ✅ Record video only on test failure
    video: 'retain-on-failure', 
          //   'on',

    // ✅ Take screenshot only on failure (optional)
    screenshot:  'only-on-failure', 
             // 'on',  
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
