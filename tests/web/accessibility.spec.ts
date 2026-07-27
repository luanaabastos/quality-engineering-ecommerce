import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('Acessibilidade Web', () => {
    test('A11Y-001 - validar acessibilidade da página de login', async ({
        page,
    }) => {
        const loginPage = new LoginPage(page);

        await loginPage.acessar();

        const accessibilityScanResults = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
            .analyze();

        expect(
            accessibilityScanResults.violations,
            JSON.stringify(accessibilityScanResults.violations, null, 2),
        ).toEqual([]);
    });

    test('A11Y-002 - validar acessibilidade da página de produtos', async ({
        page,
    }) => {
        const loginPage = new LoginPage(page);

        await loginPage.acessar();
        await loginPage.realizarLogin(
            'standard_user',
            'secret_sauce',
        );
        await loginPage.validarLoginComSucesso();

        const results = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
            .analyze();

        const knownViolations = results.violations.filter(
            (violation) => violation.id === 'select-name',
        );

        const unexpectedViolations = results.violations.filter(
            (violation) => violation.id !== 'select-name',
        );

        // Documenta a falha conhecida da aplicação pública.
        expect(knownViolations).toHaveLength(1);
        expect(knownViolations[0].impact).toBe('critical');
        expect(knownViolations[0].nodes[0].target).toContain('select');

        // Nenhuma nova violação pode passar despercebida.
        expect(
            unexpectedViolations,
            JSON.stringify(unexpectedViolations, null, 2),
        ).toEqual([]);
    });

});