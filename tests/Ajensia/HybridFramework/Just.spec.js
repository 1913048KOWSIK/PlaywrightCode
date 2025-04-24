import { test, expect } from '@playwright/test';
import { readExcel } from '../../DataDriven/readExcel';
import { EmployeePage } from '../../POMFramework/EmployeeManagement';

const loginData = readExcel();

loginData.forEach(({ Username, Password }) => {
  test(`Hybrid Test: Login with ${Username} and access Employee Management`, async ({ page }) => {
    // Login (Data-Driven)
    await page.goto('https://testajensiacloud.carifer.com/login');
    await page.getByRole('textbox', { name: 'Username *' }).fill(Username);
    
    
    await page.getByRole('textbox', { name: 'Password *' }).fill(Password);
    await page.getByRole('button', { name: 'Sign In' }).click();

    await page.getByRole('button', { name: 'Close' }).click();

    await page.waitForTimeout(3000); 
    // Employee Management (POM)l
    
    const empPage = new EmployeePage(page);
    await empPage.navigateToEmployeeManagement(); 
    await page.waitForTimeout(2000); 

    await empPage.selectDepartment('8');
    await page.waitForTimeout(2000); 

    await empPage.clearDepartmentSelection();
    await page.waitForTimeout(2000); 

  });
});
