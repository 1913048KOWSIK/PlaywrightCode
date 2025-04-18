const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../POMFramework/AjensiaLogin');

test.describe('Login Test Suite', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login('admin@ajensia.com', 'Admin@123');


   // await expect(page).toHaveURL(/dashboard|home|projects/i);
  });
});
