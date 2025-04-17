import { test, expect } from '@playwright/test';
import { login } from '../../ProjectLogin/AjensiaLogin';

test('test', async ({ page }) => {

    await login(page);
    
  await page.getByRole('button', { name: ' Master 󰅂' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: 'Designation' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Add Designation' }).click();
  await page.waitForTimeout(2000);

  await page.locator('select').selectOption('5');
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Details').click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Details').fill('UI Design');
  await page.waitForTimeout(2000);

  await page.getByText('Submit').click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: '2' }).click();
  await page.waitForTimeout(2000);
  
  await page.getByRole('row', { name: 'Design UI Design  ' }).locator('a').first().click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Details').click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Details').press('ControlOrMeta+a');
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Details').fill('UI/UX');
  await page.waitForTimeout(2000);

  await page.getByText('Submit').click();
  await page.waitForTimeout(2000);

  await page.getByRole('row', { name: 'Design UI/UX  ' }).locator('a').nth(1).click();
  await page.waitForTimeout(2000);

});