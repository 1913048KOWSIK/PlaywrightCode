import { test, expect } from '@playwright/test';
import { login } from '../../ProjectLogin/AjensiaLogin';

test('test', async ({ page }) => {
    await login(page);

  await page.getByRole('button', { name: ' Approvals 󰅂' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: 'Approval Request' }).click();
  await page.waitForTimeout(2000);

  await page.locator('div:nth-child(5) > .card > .d-flex').click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'New Approval Request' }).click();
  await page.waitForTimeout(2000);

  await page.locator('form').filter({ hasText: 'Subject Request Type Select' }).locator('input[type="text"]').click();
  await page.waitForTimeout(2000);

  await page.locator('form').filter({ hasText: 'Subject Request Type Select' }).locator('input[type="text"]').fill('Sick Leave');
  await page.waitForTimeout(2000);

  await page.locator('select').selectOption('2');
  await page.waitForTimeout(2000);

  await page.locator('input[type="date"]').first().fill('2025-04-11');
  await page.waitForTimeout(2000);

  await page.locator('input[type="date"]').nth(1).fill('2025-04-12');
  await page.waitForTimeout(2000);

  await page.locator('textarea').click();
  await page.waitForTimeout(2000);

  await page.locator('textarea').fill('xyz');
  await page.waitForTimeout(2000);

  await page.getByText('Submit').click();
  await page.waitForTimeout(2000);

});