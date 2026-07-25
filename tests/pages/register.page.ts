import { expect, type Locator, type Page } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly registerButton: Locator;
  readonly message: Locator;

  constructor(page: Page) {
    this.page = page;

    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password', { exact: true });
    this.confirmPasswordInput = page.getByLabel('Confirm Password');
    this.registerButton = page.getByRole('button', {
      name: 'Register',
    });

    this.message = page.locator('#flash');
  }

  async acessar(): Promise<void> {
    await this.page.goto('https://practice.expandtesting.com/register');
  }

  async cadastrar(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(password);
    await this.registerButton.click();
  }

  async validarCadastroComSucesso(): Promise<void> {
    await expect(this.page).toHaveURL(/\/login/);

    await expect(this.message).toContainText(
      /successfully registered/i,
    );
  }

  async validarCadastroDuplicado(): Promise<void> {
    await expect(this.page).toHaveURL(/\/register/);

    await expect(this.message).toContainText(
      /already exists|username.*taken|user.*exists|an error occurred during registration/i,
    );
  }
}