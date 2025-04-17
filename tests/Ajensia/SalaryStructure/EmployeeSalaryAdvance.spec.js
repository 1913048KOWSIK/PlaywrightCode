import { test, expect } from '@playwright/test';
import { login } from '../../ProjectLogin/AjensiaLogin';

test('test', async ({ page }) => {
    await login(page);

  await page.getByRole('button', { name: ' Salary Structure 󰅂' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: 'Employee Salary Advance' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Add Salary Advance' }).click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter the Name').click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter the Name').fill('Thala');
  await page.waitForTimeout(2000);

  await page.locator('input[type="date"]').first().fill('2025-04-07');
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter the Employee ID').click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter the Employee ID').fill('005');
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter no of due').click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter no of due').fill('5');
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter the Amount').click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter the Amount').fill('5000');
  await page.waitForTimeout(2000);

  await page.locator('input[type="date"]').nth(1).fill('2025-04-15');
  await page.waitForTimeout(2000);

  await page.locator('#addSalaryAdvance').getByText('Submit').click();
  await page.waitForTimeout(2000);


});