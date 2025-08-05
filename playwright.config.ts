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
  retries: 0,
  workers: 1,

  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  projects: process.env.CI && !process.env.SERVICE ? browserProjects : browserProjects.slice(0, 1),

  outputDir: 'test-results/',

  webServer: {
    command: !!process.env.CI ? 'npm run build && npm start && npx wait-on tcp:3000' : 'npm run dev',
    port: 3000,
    timeout: 180 * 1000,
    reuseExistingServer: false,
  },
});