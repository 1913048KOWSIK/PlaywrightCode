import { test, expect } from '@playwright/test';
import { login } from '../../ProjectLogin/AjensiaLogin';

test('test', async ({ page }) => {

    await login(page);

  await page.getByRole('button', { name: ' Master 󰅂' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: 'Document Type' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Add Document Type' }).click();
  await page.waitForTimeout(2000);

  await page.locator('select').selectOption('Common');
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Details').click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Details').fill('Nil');
  await page.waitForTimeout(2000);

  await page.getByText('Submit').click();
  await page.waitForTimeout(2000);

  await page.getByRole('row', { name: 'Common Nil No  ' }).locator('a').first().click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Details').click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Details').press('ControlOrMeta+a');
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Details').fill('Insentives');
  await page.waitForTimeout(2000);

  await page.getByText('Submit').click();
  await page.waitForTimeout(2000);

});