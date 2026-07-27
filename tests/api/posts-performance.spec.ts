import { expect, test } from '../fixtures/api.fixture';

test.describe('Performance básica da API de posts', () => {
  test('PERF-001 - responder consulta de post dentro do limite', async ({
    apiContext,
  }) => {
    const startTime = Date.now();

    const response = await apiContext.get('/posts/1');

    const duration = Date.now() - startTime;

    expect(response.status()).toBe(200);

    expect(
      duration,
      `A requisição levou ${duration} ms`,
    ).toBeLessThan(3000);
  });

  test('PERF-002 - manter tempo médio aceitável em consultas sucessivas', async ({
    apiContext,
  }) => {
    const durations: number[] = [];
    const numberOfRequests = 5;

    for (let id = 1; id <= numberOfRequests; id += 1) {
      const startTime = Date.now();

      const response = await apiContext.get(`/posts/${id}`);

      durations.push(Date.now() - startTime);

      expect(response.status()).toBe(200);
    }

    const averageDuration =
      durations.reduce((total, duration) => total + duration, 0) /
      durations.length;

    const maximumDuration = Math.max(...durations);

    console.log('Tempos das requisições:', durations);
    console.log(`Tempo médio: ${averageDuration.toFixed(2)} ms`);
    console.log(`Maior tempo: ${maximumDuration} ms`);

    expect(
      averageDuration,
      `O tempo médio foi ${averageDuration.toFixed(2)} ms`,
    ).toBeLessThan(2000);

    expect(
      maximumDuration,
      `A requisição mais lenta levou ${maximumDuration} ms`,
    ).toBeLessThan(4000);
  });
});