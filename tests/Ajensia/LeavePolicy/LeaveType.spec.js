import { test, expect } from '@playwright/test';
import { login } from '../../ProjectLogin/AjensiaLogin';

test('test', async ({ page }) => {
    await login(page);

  await page.getByRole('button', { name: ' Master 󰅂' }).click();
  await page.waitForTimeout(2000);

  await page.evaluate(() => {
    window.scrollBy(0, 500); // Scroll down 500px
  });

  await page.getByRole('button', { name: 'Leave Policy 󰅂' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: 'Leave Type' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Add Leave Type' }).click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Leave Type').click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Leave Type').fill('Common Leave');
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Total Days').click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Total Days').fill('8');
  await page.waitForTimeout(2000);

  await page.getByText('Submit').click();
  await page.waitForTimeout(2000);

  await page.getByRole('row', { name: 'Common Leave 8  ' }).locator('a').first().click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Total Days').click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Total Days').press('ControlOrMeta+a');
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Total Days').fill('7');
  await page.waitForTimeout(2000);

  await page.getByText('Submit').click();
  await page.waitForTimeout(2000);

  await page.getByRole('row', { name: 'Common Leave 7  ' }).locator('a').nth(1).click();
  await page.waitForTimeout(2000);

});