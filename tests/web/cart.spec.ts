import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { ProductsPage } from '../pages/products.page';
import { CartPage } from '../pages/cart.page';

test.describe('Carrinho de compras', () => {
  test('TS-011 - preservar o carrinho durante a sessão', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await loginPage.acessar();
    await loginPage.realizarLogin('standard_user', 'secret_sauce');
    await loginPage.validarLoginComSucesso();

    await productsPage.adicionarPrimeiroProdutoAoCarrinho();
    await productsPage.validarQuantidadeNoCarrinho(1);

    await productsPage.acessarCarrinho();
    await cartPage.validarQuantidadeDeProdutos(1);

    await cartPage.continuarComprando();

    await productsPage.validarQuantidadeNoCarrinho(1);

    await productsPage.acessarCarrinho();
    await cartPage.validarQuantidadeDeProdutos(1);
  });
});