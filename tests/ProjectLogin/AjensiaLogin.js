export async function login(page) {  
    
  await page.goto('https://testajensiacloud.carifer.com/login');
  
  await page.getByRole('textbox', { name: 'Username *' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Username *' }).press('ControlOrMeta+a');
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Username *' }).fill('admin@ajensia.com');
  await page.waitForTimeout(1000);

  await page.getByRole('textbox', { name: 'Password *' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Password *' }).press('ControlOrMeta+a');
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Password *' }).fill('Admin@123');
  await page.waitForTimeout(3000);

  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Close' }).click();
  await page.waitForTimeout(2000);


}
