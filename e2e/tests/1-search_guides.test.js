const { test, expect } = require("@playwright/test");

test("Default search page returns results", async ({ page }) => {
  await page.goto("/guides/search");
  const summary = await page.getByTestId("search-summary").textContent();
  const match = summary.match(/\d+/);
  const resultCount = match ? parseInt(match[0]) : 0;
  expect(resultCount).toBeGreaterThan(0);
});

test("Search page returns valid results", async ({ page }) => {
  await page.goto("/guides/search/?query=add");
  const titles = await page.getByTestId("guide-title").all();

  for (const title of titles) {
    expect(title).toContainText(/add/i);
  }
});
