import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {


  await page.goto('https://testajensiacloud.carifer.com/login');
  await page.getByRole('textbox', { name: 'Username *' }).click();
  await page.getByRole('textbox', { name: 'Username *' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Username *' }).fill('admin@ajensia.com');
  await page.locator('form div').filter({ hasText: 'Forgot password? Password *' }).locator('div').nth(1).click();
  await page.getByRole('textbox', { name: 'Password *' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Password *' }).fill('Admin@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: ' Employee Management 󰅂' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name*' }).click();
  await page.getByRole('textbox', { name: 'First Name*' }).fill('vinoth');
  await page.getByRole('textbox', { name: 'Last Name*' }).click();
  await page.getByRole('textbox', { name: 'Last Name*' }).fill('b');
  await page.getByRole('textbox', { name: 'Mobile Number*' }).click();
  
  // Mandatory
  await page.getByRole('textbox', { name: 'Mobile Number*' }).fill('9383335278');
  await page.getByRole('textbox', { name: 'Personal Email*' }).click();
  await page.getByRole('textbox', { name: 'Personal Email*' }).fill('vBno7@gmail.com');
  await page.getByRole('textbox', { name: 'PAN Number*' }).click();
  await page.getByRole('textbox', { name: 'PAN Number*' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'PAN Number*' }).fill('CSBFG2233K');
  await page.getByRole('textbox', { name: 'Aadhaar Card Number*' }).click();
  await page.getByRole('textbox', { name: 'Aadhaar Card Number*' }).fill('101178954125');

  await page.getByLabel('Gender*').selectOption('Male');
  await page.getByRole('textbox', { name: 'Permanent Address*' }).click();
  await page.getByRole('textbox', { name: 'Permanent Address*' }).fill('CHENNAI');
  await page.getByRole('textbox', { name: 'Permanent Address*' }).press('CapsLock');
  await page.getByRole('button', { name: ' Next' }).click();
  await page.getByRole('textbox', { name: 'Current Address*' }).click();
  await page.getByRole('textbox', { name: 'Current Address*' }).fill('chennai');
  await page.getByRole('textbox', { name: 'Name of Dependent' }).click();
  await page.getByRole('textbox', { name: 'Name of Dependent' }).fill('nil');
  await page.getByRole('textbox', { name: 'Relationship to Employee' }).click();
  await page.getByRole('textbox', { name: 'Relationship to Employee' }).fill('nil');
  await page.getByRole('textbox', { name: 'Mobile Number*' }).click();
  await page.getByRole('textbox', { name: 'Date Of Birth*' }).fill('2001-02-16');
  await page.getByRole('button', { name: ' Next' }).click();
  await page.getByRole('textbox', { name: 'College Name*' }).click();
  await page.getByRole('textbox', { name: 'College Name*' }).fill('dfgdgdfgdfv');
  await page.getByRole('textbox', { name: 'Course*' }).click();
  await page.getByRole('textbox', { name: 'Course*' }).fill('fzsfzdgzfgvdfzg');
  await page.getByRole('textbox', { name: 'Year Of Completion*' }).click();
  await page.getByRole('textbox', { name: 'Year Of Completion*' }).fill('2017');
  await page.getByRole('textbox', { name: 'Previous Company Name' }).click();
  await page.getByRole('textbox', { name: 'Previous Company Name' }).fill('sdfasdfsdf');
  await page.getByRole('textbox', { name: 'Previous Company Reference' }).click();
  await page.getByRole('textbox', { name: 'Previous Company Reference' }).fill('sdfsdfsdf');
  await page.getByRole('textbox', { name: 'Previous Designation' }).click();
  await page.getByRole('textbox', { name: 'Previous Designation' }).fill('dfgasfgxsdgxd');
  await page.getByRole('textbox', { name: 'Date of Joined' }).fill('2023-11-01');
  await page.getByText('Previous Company Name Previous Company Reference Number Previous Designation').click();
  await page.getByRole('button', { name: ' Next' }).click();
  await page.getByText('Job Type* select Contract').click();
  await page.getByLabel('Job Type*').selectOption('1');

  // Mandatory
  await page.getByRole('textbox', { name: 'Official Email*' }).click();
  await page.getByRole('textbox', { name: 'Official Email*' }).fill('mcv@gmail.com');
  await page.getByRole('textbox', { name: 'Joining Date*' }).fill('2025-03-31');
  await page.getByRole('button', { name: ' Next' }).click();
});
