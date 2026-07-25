import { expect, test } from '@playwright/test';

test.describe('Smoke tests', () => {
  test('deve acessar uma aplicação pública com sucesso', async ({ page }) => {
    const response = await page.goto('https://www.saucedemo.com/');

    expect(response?.ok()).toBeTruthy();
    await expect(page).toHaveTitle(/Swag Labs/i);
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  });
});