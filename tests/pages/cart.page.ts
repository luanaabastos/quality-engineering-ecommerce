import { expect, type Locator, type Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItems: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');

    this.continueShoppingButton = page.getByRole('button', {
      name: /continue shopping/i,
    });
  }

  async validarQuantidadeDeProdutos(quantidade: number): Promise<void> {
    await expect(this.cartItems).toHaveCount(quantidade);
  }

  async continuarComprando(): Promise<void> {
    await this.continueShoppingButton.click();
  }
}