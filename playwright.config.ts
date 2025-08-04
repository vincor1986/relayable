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
  timeout: 60 * 1000,
  expect: { timeout: 10000 },
  fullyParallel: false,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  projects: process.env.CI ? browserProjects : browserProjects.slice(0, 1),

  outputDir: 'test-results/',

  webServer: {
    command: !!process.env.CI ? 'npm run build && npm start' : 'npm run dev',
    port: 3000,
    timeout: 180 * 1000,
    reuseExistingServer: false,
  },
});