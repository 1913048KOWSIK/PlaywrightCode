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

  await page.getByRole('link', { name: 'Leave Manager' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Add Leave Managers' }).click();
  await page.waitForTimeout(2000);

  await page.locator('form').filter({ hasText: 'Enter Team Name Select Leave' }).locator('input[type="text"]').click();
  await page.waitForTimeout(2000);

  await page.locator('form').filter({ hasText: 'Enter Team Name Select Leave' }).locator('input[type="text"]').fill('Ajensia');
  await page.waitForTimeout(2000);

  await page.locator('select').selectOption('2');
  await page.waitForTimeout(2000);

  await page.locator('select').selectOption(['2', '39']);
  await page.waitForTimeout(2000);

  await page.getByText('Submit').click();
  await page.waitForTimeout(2000);

  await page.getByTitle('Edit').nth(4).click();
  await page.waitForTimeout(2000);

  await page.locator('select').selectOption('1');
  await page.waitForTimeout(2000);

  await page.getByText('Submit').click();
  await page.waitForTimeout(2000);

  await page.getByTitle('Delete').nth(4).click();
  await page.waitForTimeout(2000);


});