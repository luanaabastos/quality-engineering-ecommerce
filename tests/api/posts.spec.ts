import { expect, test } from '@playwright/test';

test.describe('API de posts', () => {
    test('API-001 - consultar um post existente', async ({ request }) => {
        const response = await request.get(
            'https://jsonplaceholder.typicode.com/posts/1',
        );

        expect(response.status()).toBe(200);
        expect(response.ok()).toBeTruthy();

        const contentType = response.headers()['content-type'];

        expect(contentType).toContain('application/json');

        const body = await response.json();

        expect(body).toEqual(
            expect.objectContaining({
                userId: expect.any(Number),
                id: 1,
                title: expect.any(String),
                body: expect.any(String),
            }),
        );

        expect(body.title.length).toBeGreaterThan(0);
        expect(body.body.length).toBeGreaterThan(0);
    });

    test('API-002 - retornar recurso inexistente', async ({ request }) => {
        const response = await request.get(
            'https://jsonplaceholder.typicode.com/posts/999999',
        );

        expect(response.status()).toBe(404);

        const body = await response.json();

        expect(body).toEqual({});
    });

    test('API-003 - criar um novo post', async ({ request }) => {
        const payload = {
            title: 'Quality Engineering',
            body: 'Automação de testes de API com Playwright',
            userId: 1,
        };

        const response = await request.post(
            'https://jsonplaceholder.typicode.com/posts',
            {
                data: payload,
            },
        );

        expect(response.status()).toBe(201);

        const body = await response.json();

        expect(body).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                title: payload.title,
                body: payload.body,
                userId: payload.userId,
            }),
        );
    });

    test('API-004 - atualizar um post existente', async ({ request }) => {
        const payload = {
            id: 1,
            title: 'Post atualizado',
            body: 'Conteúdo atualizado via API',
            userId: 1,
        };

        const response = await request.put(
            'https://jsonplaceholder.typicode.com/posts/1',
            {
                data: payload,
            },
        );

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body).toEqual(payload);
    });

    test('API-005 - excluir um post existente', async ({ request }) => {
        const response = await request.delete(
            'https://jsonplaceholder.typicode.com/posts/1',
        );

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body).toEqual({});
    });
});