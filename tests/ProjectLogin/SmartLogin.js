export async function loginIOT(page) {
  
    
    await page.goto('https://testnuwaco.carifer.com/admin/signin');
    await page.getByRole('textbox', { name: 'Password Password' }).click();
    await page.getByRole('textbox', { name: 'Email E-mail Confirm E-mail' }).click();
    await page.getByRole('textbox', { name: 'Email E-mail Confirm E-mail' }).fill('admin@carifer.com');
    await page.getByRole('textbox', { name: 'Password Password' }).click();
    await page.getByRole('textbox', { name: 'Password Password' }).fill('Password@123');
    await page.getByRole('button', { name: 'Log In' }).click();
}
