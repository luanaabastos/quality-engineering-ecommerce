import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
  {
    name: 'api',
    testMatch: /tests\/api\/.*\.spec\.ts/,
  },
  {
    name: 'chromium',
    testIgnore: /tests\/api\/.*\.spec\.ts/,
    use: { ...devices['Desktop Chrome'] },
  },
  {
    name: 'firefox',
    testIgnore: [
      /tests\/api\/.*\.spec\.ts/,
      /tests\/web\/register\.spec\.ts/,
    ],
    use: { ...devices['Desktop Firefox'] },
  },
  {
    name: 'webkit',
    testIgnore: [
      /tests\/api\/.*\.spec\.ts/,
      /tests\/web\/register\.spec\.ts/,
    ],
    use: { ...devices['Desktop Safari'] },
  },
],

  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});