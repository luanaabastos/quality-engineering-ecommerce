import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('Autenticação de usuários', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.acessar();
  });

  test('TS-009 - realizar login com credenciais válidas', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.realizarLogin('standard_user', 'secret_sauce');
    await loginPage.validarLoginComSucesso();
  });

  test('TS-010 - impedir login com credenciais inválidas', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.realizarLogin('standard_user', 'senha_invalida');
    await loginPage.validarMensagemDeErro();
  });
});