export async function devopslogin(page){


  await page.goto('https://dev-devops.haroob.com/');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Email' }).fill('admin123@devops.com');
  await page.getByRole('textbox', { name: '********' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: '********' }).fill('dEvOpstest @2025');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForTimeout(1000);
};