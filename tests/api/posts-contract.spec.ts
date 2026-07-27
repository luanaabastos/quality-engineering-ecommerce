import { test, expect } from '../fixtures/api.fixture';
import {
  createdPostSchema,
  postSchema,
  postsSchema,
} from '../schemas/post.schema';
import { newPostPayload } from '../fixtures/posts.data';

test.describe('Contratos da API de posts', () => {
  test('API-011 - validar contrato de um post', async ({
    apiContext,
  }) => {
    const response = await apiContext.get('/posts/1');

    expect(response.status()).toBe(200);

    const body: unknown = await response.json();
    const result = postSchema.safeParse(body);

    expect(
      result.success,
      result.success ? undefined : result.error.message,
    ).toBeTruthy();
  });

  test('API-012 - validar contrato da lista de posts', async ({
    apiContext,
  }) => {
    const response = await apiContext.get('/posts');

    expect(response.status()).toBe(200);

    const body: unknown = await response.json();
    const result = postsSchema.safeParse(body);

    expect(
      result.success,
      result.success ? undefined : result.error.message,
    ).toBeTruthy();

    if (result.success) {
      expect(result.data).toHaveLength(100);
    }
  });

  test('API-013 - validar contrato do post criado', async ({
    apiContext,
  }) => {
    const response = await apiContext.post('/posts', {
      data: newPostPayload,
    });

    expect(response.status()).toBe(201);

    const body: unknown = await response.json();
    const result = createdPostSchema.safeParse(body);

    expect(
      result.success,
      result.success ? undefined : result.error.message,
    ).toBeTruthy();

    if (result.success) {
      expect(result.data).toEqual(
        expect.objectContaining(newPostPayload),
      );
    }
  });

  test('API-014 - rejeitar contrato inválido', async () => {
    const invalidPost = {
      userId: '1',
      id: 1,
      title: '',
      body: 123,
    };

    const result = postSchema.safeParse(invalidPost);

    expect(result.success).toBeFalsy();

    if (!result.success) {
      expect(result.error.issues.length).toBeGreaterThan(0);
    }
  });
});