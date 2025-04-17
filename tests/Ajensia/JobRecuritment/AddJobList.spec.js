import { test, expect } from '@playwright/test';
import { login } from '../../ProjectLogin/AjensiaLogin';

test('test', async ({ page }) => {
    await login(page);

  await page.getByRole('button', { name: ' Job Recuritment 󰅂' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: ' Job List' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: ' Add New Job' }).click();
  await page.waitForTimeout(2000);

  await page.getByLabel('Department').selectOption('5');
  await page.waitForTimeout(2000);

  await page.getByLabel('Designation').selectOption('6');
  await page.waitForTimeout(2000);

  await page.getByLabel('Job Type').selectOption('Full Time');
  await page.waitForTimeout(2000);

  await page.getByRole('spinbutton', { name: 'Experience (Years)' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('spinbutton', { name: 'Experience (Years)' }).fill('3');
  await page.waitForTimeout(2000);

  await page.getByLabel('Job Mode').selectOption('Direct Pay');
  await page.waitForTimeout(2000);

  await page.getByLabel('Hiring Manager').selectOption('320');
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'Required Skills' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'Required Skills' }).fill('Designing Frameworks');
  await page.waitForTimeout(2000);

  await page.getByRole('spinbutton', { name: 'Minimum Salary' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('spinbutton', { name: 'Minimum Salary' }).fill('30000');
  await page.waitForTimeout(2000);

  await page.getByRole('spinbutton', { name: 'Maximum Salary' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('spinbutton', { name: 'Maximum Salary' }).fill('38000');
  await page.waitForTimeout(2000);

  await page.getByRole('spinbutton', { name: 'Number of Positions' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('spinbutton', { name: 'Number of Positions' }).fill('3');
  await page.waitForTimeout(2000);

  await page.evaluate(() => {
    window.scrollBy(0, 500); // Scroll down 500px
  });

  await page.getByLabel('Country').selectOption('101');
  await page.waitForTimeout(2000);

  await page.getByLabel('State').selectOption('4035');
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'City' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'City' }).fill('Chennai');
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'Zip Code' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'Zip Code' }).fill('60201');
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'Address' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'Address' }).fill('Tambaram');
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Sumbit' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('row', { name: '3 UI/UX Designer 3 Tambaram' }).getByRole('link').click();
  await page.waitForTimeout(2000);

  await page.getByRole('spinbutton', { name: 'Experience (Years)' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('spinbutton', { name: 'Experience (Years)' }).press('ControlOrMeta+a');
  await page.waitForTimeout(2000);

  await page.getByRole('spinbutton', { name: 'Experience (Years)' }).fill('2');
  await page.waitForTimeout(2000);

  await page.evaluate(() => {
    window.scrollBy(0, 500); // Scroll down 500px
  });

  await page.getByRole('button', { name: 'Update' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('combobox').first().selectOption('14');
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('combobox').nth(1).selectOption('Quality analyst');
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('combobox').first().selectOption('');
  await page.waitForTimeout(2000);

  await page.getByRole('combobox').nth(1).selectOption('');
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('row', { name: '3 UI/UX Designer 3 Tambaram' }).getByRole('button').click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(2000);

});