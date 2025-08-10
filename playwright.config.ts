import { defineConfig, devices } from '@playwright/test';

const browserProjects = [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ]

export default defineConfig({
  testDir: './e2e/tests',
  timeout: 90000,
  expect: { timeout: 10000 },
  fullyParallel: false,
  retries: 0,
  workers: !!process.env.SINGLE_PROJECT ? 1 : 3,

  use: {
    baseURL: `http://localhost:${process.env.PORT || 3000}`,
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  projects: process.env.CI && !process.env.SINGLE_PROJECT ? browserProjects : browserProjects.slice(0, 1),

  outputDir: 'test-results/',

  webServer: {
    command: !!process.env.CI ? `PORT=${process.env.PORT || 3000} npm run build && npm start` : `PORT=${process.env.PORT || 3000} npm run dev`,
    port: Number(process.env.PORT) || 3000,
    timeout: 180 * 1000,
    reuseExistingServer: false,
  },
});