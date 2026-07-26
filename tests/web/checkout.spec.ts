import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { ProductsPage } from '../pages/products.page';
import { CheckoutPage } from '../pages/checkout.page';

test.describe('Checkout', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.acessar();
    await loginPage.realizarLogin(
      'standard_user',
      'secret_sauce',
    );
    await loginPage.validarLoginComSucesso();

    await productsPage.adicionarPrimeiroProdutoAoCarrinho();
    await productsPage.validarQuantidadeNoCarrinho(1);
    await productsPage.acessarCarrinho();
  });

  test('TS-015 - finalizar uma compra com sucesso', async ({
    page,
  }) => {
    const checkoutPage = new CheckoutPage(page);

    await checkoutPage.iniciarCheckout();

    await checkoutPage.preencherDados(
      'Luana',
      'Bastos',
      '01001-000',
    );

    await checkoutPage.continuar();
    await checkoutPage.validarResumoDaCompra();

    await checkoutPage.finalizarCompra();
    await checkoutPage.validarCompraFinalizada();
  });

  test('TS-016 - impedir checkout sem dados obrigatórios', async ({
    page,
  }) => {
    const checkoutPage = new CheckoutPage(page);

    await checkoutPage.iniciarCheckout();
    await checkoutPage.continuar();

    await checkoutPage.validarMensagemDeErro(
      /first name is required/i,
    );
  });
});