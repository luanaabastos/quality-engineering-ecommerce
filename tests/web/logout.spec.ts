import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('Logout de usuários', () => {
  test('TS-014 - invalidar a sessão após logout', async ({
    page,
    browserName,
  }) => {
    test.skip(
      browserName === 'webkit',
      'Menu lateral do SauceDemo é instável no WebKit.',
    );

    const loginPage = new LoginPage(page);

    await loginPage.acessar();
    await loginPage.realizarLogin('standard_user', 'secret_sauce');
    await loginPage.validarLoginComSucesso();

    await page.getByRole('button', { name: 'Open Menu' }).click();

    const logoutLink = page.locator(
      '[data-test="logout-sidebar-link"]',
    );

    await expect(logoutLink).toBeVisible();
    await logoutLink.click();

    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(
      page.locator('[data-test="login-button"]'),
    ).toBeVisible();

    await page.goto('https://www.saucedemo.com/inventory.html');

    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(
      page.locator('[data-test="login-button"]'),
    ).toBeVisible();
  });
});