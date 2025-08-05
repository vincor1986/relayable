const { test, expect } = require("@playwright/test");
require("dotenv").config();

test("Entered guide is uploaded and viewable on pending page", async ({
  page,
}) => {
  await page.goto("/contribute/creator");
  await page.getByTestId("vendor-search-input").fill("Heroku");
  await page.getByTestId("Heroku-badge").click();
  await page.getByTestId("new-guide-title-input").fill("Test Guide Title");
  await page.getByTestId("new-guide-author-input").fill("Test Author");
  await page.getByTestId("new-guide-email-input").fill("test@example.com");
  await page
    .getByTestId("new-guide-category-select")
    .selectOption("Granting access");
  await page
    .getByTestId("new-guide-description-textarea")
    .fill("This is a test guide description.");
  await page.getByTestId("add-variable-button").click();
  await page.getByTestId("variable-name-input").fill("test_variable");
  await page.getByTestId("variable-type-select").selectOption("text");
  await page
    .getByTestId("variable-description-textarea")
    .fill("A test variable");
  await page.getByTestId("save-variable-button").click();
  await page.getByTestId("add-step-button").click();
  await page.getByTestId("new-step-input").fill("This is a test step.");
  await page.getByTestId("confirm-new-step-button").click();
  await page.getByTestId("add-step-button").click();
  await page.getByTestId("new-step-input").fill("This is a second step.");
  await page.getByTestId("test_variable-variable").click();
  await page.getByTestId("confirm-new-step-button").click();
  await page.getByTestId("submit-new-guide-button").click();

  await page.goto("/guides/review-pending");

  await expect(page.getByTestId("results-container")).toBeVisible();
  await expect(page.getByTestId("vendor-header-Heroku")).toBeAttached();
  await expect(page.getByTestId("guide-test-guide-title")).toBeAttached();
});

test("Guide can be approved and viewed on guide page", async ({ page }) => {
  await page.goto("/guides/review-pending");
  await expect(page.getByTestId("results-container")).toBeVisible();
  await page.getByTestId("guide-test-guide-title").click();

  await page.getByTestId("auth-code-input").fill(process.env.AUTH_CODE);
  await page.getByTestId("approve-guide-button").click();

  await page.goto("/guides/heroku/test-guide-title");

  await expect(page.getByTestId("guide-title-test-guide-title")).toBeVisible();
  await expect(page.getByTestId("guide-steps-section")).toBeAttached();
});
