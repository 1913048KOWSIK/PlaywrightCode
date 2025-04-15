class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = page.getByRole('textbox', { name: 'Username *' });
      this.passwordInput = page.getByRole('textbox', { name: 'Password *' });
      this.signInButton = page.getByRole('button', { name: 'Sign In' });
      this.closeModalButton = page.getByRole('button', { name: 'Close' });
    }
  
    async gotoLoginPage() {
      await this.page.goto('https://testajensiacloud.carifer.com/login');
    }

  
    async login(username, password) {
      await this.usernameInput.fill(username);
      await this.passwordInput.fill(password);
      await this.signInButton.click();
  
      const modalVisible = await this.closeModalButton.isVisible().catch(() => false);
      if (modalVisible) {
        await this.closeModalButton.click();
      }

    }
  }
  
  module.exports = { LoginPage };
  