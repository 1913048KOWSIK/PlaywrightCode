import { test, expect } from '@playwright/test';
import { login } from '../../ProjectLogin/AjensiaLogin';

test('test', async ({ page }) => {
    await login(page);

  await page.getByRole('button', { name: ' Salary Structure 󰅂' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: 'Employee Salary Structure' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Add Salary Structure' }).click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Details').click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Details').fill('Daily Basis');
  await page.waitForTimeout(2000);

  await page.getByText('Submit').click();
  await page.waitForTimeout(2000);

  await page.getByRole('row', { name: 'Daily Basis     ' }).locator('a').nth(3).click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Details').click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Details').fill('Daily Basis ');
  await page.waitForTimeout(2000);

  await page.getByText('Submit').click();
  await page.waitForTimeout(2000);

  await page.getByRole('row', { name: 'Daily Basis     ' }).getByRole('link').first().click();
  await page.waitForTimeout(2000);

  await page.goto('https://testajensiacloud.carifer.com/salary-structure');
  await page.waitForTimeout(2000);

  await page.getByRole('row', { name: 'Daily Basis     ' }).getByRole('link').nth(1).click();
  await page.waitForTimeout(2000);
  await page.goBack();

  await page.getByRole('row', { name: 'Daily Basis     ' }).getByRole('link').nth(2).click();
  await page.waitForTimeout(2000);
  await page.goBack();

  await page.getByRole('row', { name: 'Daily Basis     ' }).getByRole('link').nth(3).click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(2000);

});