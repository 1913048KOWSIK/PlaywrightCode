import { test, expect } from '@playwright/test';
import { login } from '../../ProjectLogin/AjensiaLogin';

test('test', async ({ page }) => {
    await login(page);

  await page.getByRole('button', { name: ' Master 󰅂' }).click();
  await page.evaluate(() => {
    window.scrollBy(0, 500); // Scroll down 500px
  });
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Leave Policy 󰅂' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: 'Public Holiday' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Add Public Holiday' }).click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Leave Description').click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Leave Description').fill('Christmas');
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Select Date').fill('2025-04-26');
  await page.waitForTimeout(2000);

  await page.getByText('Submit').click();
  await page.waitForTimeout(2000);

  await page.getByRole('row', { name: 'Christmas 2025-04-26  ' }).locator('a').first().click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Select Date').fill('2025-12-25');
  await page.waitForTimeout(2000);

  await page.getByText('Submit').click();
  await page.waitForTimeout(2000);

  await page.getByRole('row', { name: 'Christmas 2025-12-25  ' }).locator('a').nth(1).click();
  await page.waitForTimeout(2000);

});