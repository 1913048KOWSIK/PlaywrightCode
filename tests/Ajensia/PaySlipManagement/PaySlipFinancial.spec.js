import { test, expect } from '@playwright/test';
import { login } from '../../ProjectLogin/AjensiaLogin';

test('test', async ({ page }) => {
 
  await login(page);


  await page.getByRole('button', { name: ' Payslip Management 󰅂' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: 'Finance Executive' }).click();
  await page.waitForTimeout(2000);

  await page.locator('#paymentStatus').selectOption('paid');
  await page.waitForTimeout(3000);

  await page.locator('#paymentStatus').selectOption('');
  await page.waitForTimeout(2000);

  // await page.pause();

});