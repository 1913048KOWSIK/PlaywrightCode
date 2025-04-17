import { test, expect } from '@playwright/test';
import { login } from '../../ProjectLogin/AjensiaLogin';


test('test', async ({ page }) => {
  await login(page);

    

  await page.getByRole('button', { name: ' Payslip Management 󰅂' }).click();
  await page.waitForTimeout(1000);

  await page.getByRole('link', { name: 'Payroll List' }).click();
  await page.waitForTimeout(1000);

  await page.getByLabel('Payment Status').selectOption('paid');
  await page.waitForTimeout(3000);

  await page.getByLabel('Payment Status').selectOption('');
  await page.waitForTimeout(3000);

  await page.getByLabel('Payslip Status').selectOption('0');
  await page.waitForTimeout(3000);

  await page.getByLabel('Payslip Status').selectOption('1');
  await page.waitForTimeout(3000);

  await page.getByLabel('Payslip Status').selectOption('2');
  await page.waitForTimeout(3000);

  await page.getByLabel('Payslip Status').selectOption('');
  await page.waitForTimeout(2000);

});