
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testajensiacloud.carifer.com/login');

  // Using ID for username
  await page.locator('#username').click();
  await page.locator('#username').press('ControlOrMeta+a');
  await page.locator('#username').fill('admin@ajensia.com');

  // Using ID for password
  await page.locator('#password-input').click();
  await page.locator('#password-input').press('ControlOrMeta+a');
  await page.locator('#password-input').fill('Admin@123');

  // Buttons (still using getByRole)
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
});
