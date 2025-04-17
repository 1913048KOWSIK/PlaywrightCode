import { test, expect } from '@playwright/test';
import { login } from '../../ProjectLogin/AjensiaLogin';


test('test', async ({ page }) => {
    await login(page);

  await page.getByRole('button', { name: ' Salary Structure 󰅂' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: 'Salary Reimbursement' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('row', { name: '2 manager max Farheen' }).getByRole('link').click();
  await page.waitForTimeout(2000);

  await page.getByLabel('Salary Reimbursement Details').getByText('Close').click();
  await page.waitForTimeout(2000);

  // After this, the portal not works 
});