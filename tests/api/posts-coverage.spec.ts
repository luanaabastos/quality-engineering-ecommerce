import { test, expect } from '../fixtures/api.fixture';
import type { Post } from '../types/post.types';

test.describe('Cobertura complementar da API de posts', () => {
  test('API-006 - listar todos os posts', async ({ apiContext }) => {
    const response = await apiContext.get('/posts');

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain(
      'application/json',
    );

    const body = await response.json();

    expect(Array.isArray(body)).toBeTruthy();
    expect(body).toHaveLength(100);

    expect(body[0]).toEqual(
      expect.objectContaining({
        userId: expect.any(Number),
        id: expect.any(Number),
        title: expect.any(String),
        body: expect.any(String),
      }),
    );
  });

  test('API-007 - filtrar posts por usuário', async ({
    apiContext,
  }) => {
    const userId = 1;

    const response = await apiContext.get('/posts', {
      params: {
        userId,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);

    for (const post of body) {
      expect(post.userId).toBe(userId);
    }
  });

  test('API-008 - retornar lista vazia para usuário inexistente', async ({
    apiContext,
  }) => {
    const response = await apiContext.get('/posts', {
      params: {
        userId: 999999,
      },
    });

    expect(response.status()).toBe(200);
    expect(await response.json()).toEqual([]);
  });

  test('API-009 - criar post sem título', async ({
    apiContext,
  }) => {
    const payload = {
      body: 'Post criado sem o campo title',
      userId: 1,
    };

    const response = await apiContext.post('/posts', {
      data: payload,
    });

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        body: payload.body,
        userId: payload.userId,
      }),
    );

    expect(body.title).toBeUndefined();
  });

  test('API-010 - consultar posts com filtro parametrizado', async ({
    apiContext,
  }) => {
    const filtros = [1, 2, 3];

    for (const userId of filtros) {
      const response = await apiContext.get('/posts', {
        params: {
          userId,
        },
      });

      expect(response.status()).toBe(200);

      const body = await response.json();

      expect(body.length).toBeGreaterThan(0);
      expect(
        body.every(
          (post: { userId: number }) => post.userId === userId,
        ),
      ).toBeTruthy();
    }
  });
});