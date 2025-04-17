import { test, expect } from '@playwright/test';
import { login } from '../../ProjectLogin/AjensiaLogin';


test('Employee Management Test', async ({ page }) => {
  await login(page);


  // Navigate to Employee Management
  await page.getByRole('button', { name: 'Employee Management' }).click();
  await page.waitForTimeout(1000); // wait for 1 second

  await page.getByRole('link', { name: 'Employee', exact: true }).click();
  await page.waitForTimeout(1000); // wait for 1 second

  await page.getByRole('row', { name: '1 Sankaran Mohankumar' }).locator('a').first().click();
  await page.waitForTimeout(1000); // wait for 1 second

  // Navigate to Employee Page (Playwright will wait for the page)
  await page.goto('https://testajensiacloud.carifer.com/employee');
  await page.waitForTimeout(1000); // wait for 1 second

  // Select Dropdown Options (No need for extra waits)
  await page.getByLabel('Department').selectOption('2');
  await page.waitForTimeout(1000); // wait for 1 second

  await page.getByLabel('Job Title').selectOption('2');
  await page.waitForTimeout(1000); // wait for 1 second

  await page.getByLabel('Gender').selectOption('Male');
  await page.waitForTimeout(1000); // wait for 1 second

  // await page.pause();
});
