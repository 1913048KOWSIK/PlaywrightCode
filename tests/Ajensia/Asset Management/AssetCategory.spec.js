import { test, expect } from '@playwright/test';
import { login } from '../../ProjectLogin/AjensiaLogin';


test('test', async ({ page }) => {
  await login(page);


    await page.getByRole('button', { name: ' Asset Management 󰅂' }).click();
    await page.waitForTimeout(2000);

    await page.getByRole('link', { name: 'Asset Category' }).click();
    await page.waitForTimeout(4000);

    await page.getByRole('link', { name: 'Add Assets Category' }).click();
    await page.waitForTimeout(3000);

    await page.getByRole('textbox', { name: 'Category Name' }).click();
    await page.waitForTimeout(3000);

    await page.getByRole('textbox', { name: 'Category Name' }).fill('NoteBook');
    await page.waitForTimeout(3000);

    await page.getByRole('dialog', { name: 'Add Details' }).getByRole('combobox').selectOption('active');
    await page.waitForTimeout(2000);

    await page.getByRole('checkbox', { name: 'Fixed Asset' }).check();
    await page.waitForTimeout(2000);

    await page.getByRole('button', { name: 'Submit' }).click();
    await page.waitForTimeout(3000);

    await page.evaluate(() => {
    window.scrollBy(0, 500); // Scroll down 500px
  });

    await page.getByRole('row', { name: 'NoteBook Active Yes  ' }).getByRole('link').first().click();
    await page.waitForTimeout(2000);

    await page.getByRole('checkbox', { name: 'Fixed Asset' }).uncheck();
    await page.waitForTimeout(2000);

    await page.getByRole('button', { name: 'Submit' }).click();
    await page.waitForTimeout(4000);

    await page.evaluate(() => {
    window.scrollBy(0, 500); // Scroll down 500px
  });

    await page.getByRole('row', { name: 'NoteBook Active No  ' }).locator('#deleteLink').click();
    await page.waitForTimeout(2000);

    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(2000);

});