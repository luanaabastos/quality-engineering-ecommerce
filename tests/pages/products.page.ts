import { expect, type Locator, type Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly firstProductButton: Locator;
  readonly cartLink: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstProductButton = page
      .getByRole('button', { name: /add to cart/i })
      .first();

    this.cartLink = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async adicionarPrimeiroProdutoAoCarrinho(): Promise<void> {
    await this.firstProductButton.click();
  }

  async validarQuantidadeNoCarrinho(quantidade: number): Promise<void> {
    await expect(this.cartBadge).toHaveText(String(quantidade));
  }

  async acessarCarrinho(): Promise<void> {
    await this.cartLink.click();
  }
}