import { test, expect } from '../fixtures/api.fixture';
import type { Post } from '../types/post.types';
import {
    newPostPayload,
    updatedPostPayload,
} from '../fixtures/posts.data';

test.describe('API de posts', () => {
    test('API-001 - consultar um post existente', async ({
        apiContext,
    }) => {
        const response = await apiContext.get('/posts/1');

        expect(response.status()).toBe(200);
        expect(response.ok()).toBeTruthy();
        expect(response.headers()['content-type']).toContain(
            'application/json',
        );

        const body = (await response.json()) as Post;

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

    test('API-002 - retornar recurso inexistente', async ({
        apiContext,
    }) => {
        const response = await apiContext.get('/posts/999999');

        expect(response.status()).toBe(404);
        expect(await response.json()).toEqual({});
    });

    test('API-003 - criar um novo post', async ({
        apiContext,
    }) => {
        const response = await apiContext.post('/posts', {
            data: newPostPayload,
        });

        expect(response.status()).toBe(201);

        const body = (await response.json()) as Post;

        expect(body).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                ...newPostPayload,
            }),
        );
    });

    test('API-004 - atualizar um post existente', async ({
  apiContext,
}) => {
  const response = await apiContext.put('/posts/1', {
    data: updatedPostPayload,
  });

  expect(response.status()).toBe(200);

  const body = (await response.json()) as Post;

  expect(body).toEqual(updatedPostPayload);
});

test('API-005 - excluir um post existente', async ({
  apiContext,
}) => {
  const response = await apiContext.delete('/posts/1');

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body).toEqual({});
});
});