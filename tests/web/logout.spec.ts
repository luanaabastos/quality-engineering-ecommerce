import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('Logout de usuários', () => {
  test('TS-014 - invalidar a sessão após logout', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.acessar();
    await loginPage.realizarLogin('standard_user', 'secret_sauce');
    await loginPage.validarLoginComSucesso();

    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();

    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();

    await page.goto('https://www.saucedemo.com/inventory.html');

    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  });
});