import { test, expect } from '@playwright/test';
import { login } from '../../ProjectLogin/AjensiaLogin';


test('test', async ({ page }) => {
     await login(page);
   

    await page.getByRole('button', { name: ' Asset Management 󰅂' }).click();
    await page.waitForTimeout(2000);
        
    await page.getByRole('link', { name: 'Assets Assigned List' }).click();
    await page.waitForTimeout(4000);
        
    await page.getByRole('link', { name: 'Add Assigned Asset' }).click();
    await page.waitForTimeout(2000);
        
    await page.getByLabel('Employee').selectOption('320');
    await page.waitForTimeout(2000);
        
    await page.getByLabel('Asset Category').selectOption('20');
    await page.waitForTimeout(2000);
        
    await page.getByLabel('Asset Model').selectOption('12');
    await page.waitForTimeout(2000);
        
    await page.getByRole('button', { name: 'Assign Asset' }).click();
    await page.waitForTimeout(1000);
        
    await page.getByRole('dialog', { name: 'Assign Asset' }).getByLabel('Close').click();
    await page.waitForTimeout(2000);
        
    await page.getByRole('link', { name: '' }).nth(1).click();
    await page.waitForTimeout(2000);
        
    await page.getByRole('button', { name: 'Update Asset' }).click();
    await page.waitForTimeout(2000);
        
    await page.getByRole('link', { name: '' }).nth(1).click();
    await page.waitForTimeout(2000);
        
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(2000);
    
});