import { test, expect } from '@playwright/test';
import { login } from '../../ProjectLogin/AjensiaLogin';

test('test', async ({ page }) => {
  
    await login(page);

  await page.getByRole('button', { name: ' Master 󰅂' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: 'Department' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Add Department' }).click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Details').click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Details').fill('Branding');
  await page.waitForTimeout(2000);

  await page.getByText('Submit').click();
  await page.waitForTimeout(2000);

  await page.getByRole('row', { name: 'Branding  ' }).locator('a').first().click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Details').click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Details').fill('Branding and Promotion');
  await page.waitForTimeout(2000);

  await page.getByText('Submit').click();
  await page.waitForTimeout(2000);

  await page.getByRole('row', { name: 'Branding and Promotion  ' }).locator('a').nth(1).click();
  await page.waitForTimeout(2000);

});