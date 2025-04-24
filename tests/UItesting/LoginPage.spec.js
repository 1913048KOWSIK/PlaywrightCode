import { test, expect } from '@playwright/test';

test('Visual Regression Test - Homepage', async ({ page }) => {
  // Open the webpage
  await page.goto('https://testajensiacloud.carifer.com/');

  // Wait for full load and settle any dynamic elements
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000); // Optional: wait for animations or lazy load to finish

  // Take a screenshot and compare with baseline snapshot (allow minor pixel changes)
  expect(await page.screenshot()).toMatchSnapshot('Loginpage-visual.png', {
    threshold: 0.01, // Allows 1% pixel difference
    maxDiffPixelRatio: 0.01 // Optional redundancy for threshold
  });
});
