import { test, expect } from '@playwright/test';
import { login } from '../../ProjectLogin/AjensiaLogin';


test('test', async ({ page }) => {
    await login(page);

  await page.getByRole('button', { name: ' Master 󰅂' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: 'Employment Type' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Add Employment Type' }).click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Details').click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Details').fill('Free Lanser');
  await page.waitForTimeout(2000);

  await page.getByText('Submit').click();
  await page.waitForTimeout(2000);

  await page.getByRole('row', { name: 'Free Lanser  ' }).locator('a').first().click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Details').click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Details').press('ControlOrMeta+a');
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Details').fill('Free Lansing');
  await page.waitForTimeout(2000);

  await page.getByText('Submit').click();
  await page.waitForTimeout(2000);

  await page.getByRole('row', { name: 'Free Lansing  ' }).locator('a').nth(1).click();
  await page.waitForTimeout(2000);

});