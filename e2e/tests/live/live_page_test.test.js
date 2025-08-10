const { test, expect } = require("@playwright/test");

const routes = [
  "/",
  "/guides/search",
  "/guides/review-pending",
  "/contribute",
  "/contribute/creator",
  "/contribute/guidance",
  "/contribute/request-platform",
  "/contribute/thank-you",
  "/shortcuts",
  "/benefits",
  "/dev-guides/github/add-collaborator",
  "/guides/github/add-collaborator",
  "/legal",
  "/legal/terms-of-use",
  "/legal/privacy-policy",
  "/legal/cookie-policy",
  "/legal/disclaimer",
  "/legal/dpa",
  "/about",
  "/contact",
  "/faq",
];

test.describe("All routes should load without 404", () => {
  for (const route of routes) {
    test(`Route ${route} should not display 404`, async ({ page }) => {
      await page.goto(route, { waitUntil: "domcontentloaded" });

      const is404Visible = await page
        .getByTestId("not-found-page")
        .isVisible()
        .catch(() => false);

      expect(is404Visible).toBeFalsy();
    });
  }
});
