import { test, expect } from '@playwright/test';
import { readExcel } from '../DataDriven/readExcel';  // Corrected path


const testData = readExcel();  // Read test data from the Excel file

console.log(testData);  // Add this line to log the data


testData.forEach((data) => {
  test(`Login test for user: ${data.Username}`, async ({ page }) => {
    console.log(`Running test for user: ${data.Username}`);  // Log the username for each test

    await page.goto('https://testajensiacloud.carifer.com/login');
    
   
    await page.getByRole('textbox', { name: 'Username *' }).fill(data.Username);
    await page.getByRole('textbox', { name: 'Password *' }).fill(data.Password);

    
    await page.waitForTimeout(1000);
    
    await page.getByRole('button', { name: 'Sign In' }).click();
    
    
    await page.waitForTimeout(2000);

    
    await page.getByRole('button', { name: 'Close' }).click();
    await page.waitForTimeout(1000);
  });
});
