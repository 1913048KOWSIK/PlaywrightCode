import { test, expect } from '@playwright/test';
import { login } from '../../ProjectLogin/AjensiaLogin';

test('test', async ({ page }) => {
    await login(page);

  await page.getByRole('button', { name: ' Master 󰅂' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: 'Job Description' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Add Job Description' }).click();
  await page.waitForTimeout(2000);

  await page.getByLabel('Department').selectOption('5');
  await page.waitForTimeout(2000);

  await page.getByLabel('Designation').selectOption('6');
  await page.waitForTimeout(2000);

  await page.locator('#editor').click();
  await page.waitForTimeout(2000);

  await page.locator('iframe[title="Editor\\, editor"]').contentFrame().locator('html').click();
  await page.waitForTimeout(2000);

  await page.locator('iframe[title="Editor\\, editor"]').contentFrame().getByRole('textbox', { name: 'Editor, editor' }).fill('New Idealogy and Frameworks ');
  await page.waitForTimeout(2000);

  await page.getByText('Submit').click();
  await page.waitForTimeout(2000);

  await page.getByTitle('Delete Data').nth(1).click();
  await page.waitForTimeout(2000);

});