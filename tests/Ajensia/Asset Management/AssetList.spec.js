import { test, expect } from '@playwright/test';
import { login } from '../../ProjectLogin/AjensiaLogin';


test('test', async ({ page }) => {
    await login(page);


    await page.getByRole('button', { name: ' Asset Management 󰅂' }).click();
    await page.waitForTimeout(2000);

    await page.getByRole('link', { name: 'Asset List' }).click();
    await page.waitForTimeout(4000);

    await page.getByRole('link', { name: 'Add Asset' }).click();
    await page.waitForTimeout(2000);

    await page.getByLabel('Asset Category', { exact: true }).selectOption('20');
    await page.waitForTimeout(2000);

    await page.getByRole('textbox', { name: 'Brand Name' }).click();
    await page.waitForTimeout(2000);

    await page.getByRole('textbox', { name: 'Brand Name' }).fill('Sony');
    await page.waitForTimeout(2000);

    await page.getByRole('dialog', { name: 'Add Asset' }).locator('#vendorDropdown').selectOption('1');
    await page.waitForTimeout(2000);

    await page.getByRole('textbox', { name: 'Qty Purchased Date' }).fill('2025-04-02');
    await page.waitForTimeout(2000);

    await page.getByRole('textbox', { name: 'Warranty From' }).fill('2025-04-30');
    await page.waitForTimeout(2000);

    await page.getByRole('textbox', { name: 'Warranty To' }).fill('2025-04-30');
    await page.waitForTimeout(2000);

    await page.getByRole('spinbutton', { name: 'Unit Price' }).click();
    await page.waitForTimeout(2000);

    await page.getByRole('spinbutton', { name: 'Unit Price' }).fill('5000');
    await page.waitForTimeout(2000);

    await page.getByRole('spinbutton', { name: 'Total Unit' }).click();
    await page.waitForTimeout(2000);

    await page.getByRole('spinbutton', { name: 'Total Unit' }).fill('10');
    await page.waitForTimeout(2000);

    await page.getByRole('button', { name: 'Submit' }).click();
    await page.waitForTimeout(3000);

    await page.getByRole('link', { name: '' }).nth(2).click();
    await page.waitForTimeout(2000);

    await page.getByRole('spinbutton', { name: 'Total Unit' }).click();
    await page.waitForTimeout(2000);

    await page.getByRole('spinbutton', { name: 'Total Unit' }).press('ControlOrMeta+a');
    await page.waitForTimeout(2000);

    await page.getByRole('spinbutton', { name: 'Total Unit' }).fill('20');
    await page.waitForTimeout(2000);

    await page.getByRole('button', { name: 'Submit' }).click();
    await page.waitForTimeout(3000);

    await page.getByRole('row', { name: '3 Projector Sony 5000.00 20' }).locator('#deleteLink').click();
    await page.waitForTimeout(2000);

    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(1000);

});