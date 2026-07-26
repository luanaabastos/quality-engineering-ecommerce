import { expect, type Locator, type Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly checkoutButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly cancelButton: Locator;
  readonly errorMessage: Locator;
  readonly summaryItems: Locator;
  readonly subtotalLabel: Locator;
  readonly taxLabel: Locator;
  readonly totalLabel: Locator;
  readonly confirmationTitle: Locator;

  constructor(page: Page) {
    this.page = page;

    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.cancelButton = page.locator('[data-test="cancel"]');

    this.errorMessage = page.locator('[data-test="error"]');
    this.summaryItems = page.locator('.cart_item');
    this.subtotalLabel = page.locator('[data-test="subtotal-label"]');
    this.taxLabel = page.locator('[data-test="tax-label"]');
    this.totalLabel = page.locator('[data-test="total-label"]');

    this.confirmationTitle = page.locator(
      '[data-test="complete-header"]',
    );
  }

  async iniciarCheckout(): Promise<void> {
    await this.checkoutButton.click();

    await expect(this.page).toHaveURL(
      /checkout-step-one\.html/,
    );
  }

  async preencherDados(
    primeiroNome: string,
    sobrenome: string,
    cep: string,
  ): Promise<void> {
    await this.firstNameInput.fill(primeiroNome);
    await this.lastNameInput.fill(sobrenome);
    await this.postalCodeInput.fill(cep);
  }

  async continuar(): Promise<void> {
    await this.continueButton.click();
  }

  async validarResumoDaCompra(): Promise<void> {
    await expect(this.page).toHaveURL(
      /checkout-step-two\.html/,
    );

    await expect(this.summaryItems).toHaveCount(1);
    await expect(this.subtotalLabel).toContainText('Item total: $');
    await expect(this.taxLabel).toContainText('Tax: $');
    await expect(this.totalLabel).toContainText('Total: $');
    await expect(this.finishButton).toBeVisible();
  }

  async finalizarCompra(): Promise<void> {
    await this.finishButton.click();
  }

  async validarCompraFinalizada(): Promise<void> {
    await expect(this.page).toHaveURL(
      /checkout-complete\.html/,
    );

    await expect(this.confirmationTitle).toHaveText(
      'Thank you for your order!',
    );
  }

  async validarMensagemDeErro(
    mensagemEsperada: string | RegExp,
  ): Promise<void> {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText(mensagemEsperada);
  }
}