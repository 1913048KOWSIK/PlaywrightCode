import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testajensiacloud.carifer.com/login');
  await page.getByRole('textbox', { name: 'Username *' }).click();
  await page.getByRole('textbox', { name: 'Username *' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Username *' }).fill('admin@ajensia.com');
  await page.waitForTimeout(1000);

  await page.getByRole('textbox', { name: 'Password *' }).click();
  await page.getByRole('textbox', { name: 'Password *' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Password *' }).fill('Admin@123');
  await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Close' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000); // Optional: wait for animations or lazy load to finish

  // Take a screenshot and compare with baseline snapshot (allow minor pixel changes)
  expect(await page.screenshot()).toMatchSnapshot('Homepage-visual.png', {
    threshold: 0.01, // Allows 1% pixel difference
    maxDiffPixelRatio: 0.01 // Optional redundancy for threshold
  });
});