import { test } from '@playwright/test';
import { RegisterPage } from '../pages/register.page';

test.describe('Cadastro de usuários', () => {
  test('TS-007 - cadastrar usuário com e-mail único', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const username = `luana-${Date.now()}`;

    await registerPage.acessar();
    await registerPage.cadastrar(username, 'StrongPassword123!');
    await registerPage.validarCadastroComSucesso();
  });

  test('TS-008 - impedir cadastro com usuário duplicado', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const username = `luana-${Date.now()}`;

    await registerPage.acessar();
    await registerPage.cadastrar(username, 'StrongPassword123!');
    await registerPage.validarCadastroComSucesso();

    await registerPage.acessar();
    await registerPage.cadastrar(username, 'StrongPassword123!');
    await registerPage.validarCadastroDuplicado();
  });
});