import { test, expect } from '@playwright/test';
import { login } from '../../ProjectLogin/AjensiaLogin';


test('Salary', async ({ page }) => {
  await login(page);

  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: ' Salary Management 󰅂' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: 'Salary list' }).click();
  await page.waitForTimeout(2000);

  // They have no function after the salary list 
});
  