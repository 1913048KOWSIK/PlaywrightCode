import { test, expect } from '@playwright/test';
import { login } from '../../ProjectLogin/AjensiaLogin';

test('test', async ({ page }) => {

    await login(page);

  await page.getByRole('button', { name: ' Asset Management 󰅂' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: 'Payment Cycle' }).click();
  await page.waitForTimeout(4000);

  await page.getByRole('button', { name: 'Add PaymentCycle' }).click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Details').click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Details').fill('Daily');
  await page.waitForTimeout(2000);

  await page.getByText('Submit').click();
  await page.waitForTimeout(2000);

  await page.getByRole('row', { name: 'Daily  ' }).locator('a').first().click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Details').click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Details').fill('Daily Payment');
  await page.waitForTimeout(2000);

  await page.getByText('Submit').click();
  await page.waitForTimeout(2000);

  await page.getByRole('row', { name: 'Daily Payment  ' }).getByRole('link').click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(2000);

});