    import { test, expect } from '@playwright/test';
    import { login } from '../../ProjectLogin/AjensiaLogin';

    test('test', async ({ page }) => {

        await login(page);

    await page.getByRole('button', { name: ' Asset Management 󰅂' }).click();
    await page.waitForTimeout(2000);

    await page.getByRole('link', { name: 'Vendor Type' }).click();
    await page.waitForTimeout(3000);

    await page.getByRole('button', { name: 'Add VendorType' }).click();
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Enter Details').click();
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Enter Details').fill('Labours');
    await page.waitForTimeout(2000);

    await page.getByText('Submit').click();
    await page.waitForTimeout(2000);

    await page.evaluate(() => {
    window.scrollBy(0, 500); // Scroll down 500px
  });
    await page.waitForTimeout(2000);


    await page.getByRole('row', { name: 'Labours  ' }).locator('a').first().click();
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Enter Details').click();
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Enter Details').press('ControlOrMeta+a');
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Enter Details').fill('Workers');
    await page.waitForTimeout(2000);

    await page.getByText('Submit').click();
    await page.waitForTimeout(2000);

    await page.getByRole('row', { name: 'Workers  ' }).getByRole('link').click();
    await page.waitForTimeout(2000);

    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(2000);

    }); 