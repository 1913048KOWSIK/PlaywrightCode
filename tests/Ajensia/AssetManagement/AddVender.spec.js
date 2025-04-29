import { test, expect } from '@playwright/test';
import { login } from '../../ProjectLogin/AjensiaLogin';

test('test', async ({ page }) => {

    await login(page);
  
    await page.waitForTimeout(2000);

  await page.getByRole('button', { name: ' Asset Management 󰅂' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: 'Vendor', exact: true }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: 'Add New Vendor' }).click();
  await page.waitForTimeout(5000);

  await page.getByRole('textbox', { name: 'Enter Vendor Name' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'Enter Vendor Name' }).fill('Alex');
  await page.waitForTimeout(2000);

  await page.locator('#vendorTypeDropdown').selectOption('6');
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'Service Provided' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'Service Provided' }).fill('Mechanic');
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'Company Website' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'Company Website' }).fill('https://google.com');
  await page.waitForTimeout(4000);

  await page.getByLabel('Country').selectOption('101');
  await page.waitForTimeout(4000);

  await page.getByLabel('State').selectOption('4035');
  await page.waitForTimeout(4000);

  await page.getByLabel('City').selectOption('132821');
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'Enter the Address' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'Enter the Address' }).fill('Simmakkal');
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: ' Go to Contact Info' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'Person Name' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'Person Name' }).fill('Starc');
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'Designation' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'Designation' }).fill('AC');
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'Email Address' }).fill('satrc@gmail.com');
  await page.waitForTimeout(2000);

  await page.getByRole('spinbutton', { name: 'Phone Number', exact: true }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('spinbutton', { name: 'Phone Number', exact: true }).fill('8456974123');
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: ' Go to Financial Info' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'Enter Bank Name' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'Enter Bank Name' }).fill('Bank of baroda');
  await page.waitForTimeout(2000);

  await page.getByRole('spinbutton', { name: 'Account Number' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('spinbutton', { name: 'Account Number' }).fill('1112490010005453');
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'IFSC Code' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'IFSC Code' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'IFSC Code' }).fill('KVBL0001120');
  await page.waitForTimeout(2000);

  await page.getByRole('combobox').selectOption('2');
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: ' Go to Additional Info' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'Enter the Details' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'Enter the Details' }).fill('Allocation');
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: ' Submit' }).click();
  await page.waitForTimeout(2000);

  await page.evaluate(() => {
    window.scrollBy(0, 500); // Scroll down 500px
  });
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: '2' }).click();
  await page.waitForTimeout(2000);

  await page.getByTitle('View Data').nth(2).click();
  await page.waitForTimeout(2000);

  await page.getByRole('tab', { name: 'Contact Info' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('tab', { name: 'Bank Info' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('tab', { name: 'Additional Info' }).click();
  await page.waitForTimeout(2000);

  await page.goBack();

/*

await page.waitForLoadState("domcontentloaded");
await page.getByRole('row', { name: '3 Alex VEN_0015 str' }).getByRole('link').dblclick();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(2000);
*/
});