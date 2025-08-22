const { test, expect } = require("@playwright/test");

test("XSS prevention test", async ({ page }) => {
  // Navigate to the guide creation page
  await page.goto("/contribute/creator");

  // Fill in the guide details
  await page.getByTestId("vendor-search-input").fill("Algolia");
  await page.getByTestId("Algolia-badge").click();
  await page.getByTestId("new-guide-title-input").fill("XSS Test");
  await page.getByTestId("new-guide-author-input").fill("Test Author");
  await page.getByTestId("new-guide-email-input").fill("test@example.com");
  await page
    .getByTestId("new-guide-category-select")
    .selectOption("Granting access");
  await page
    .getByTestId("new-guide-description-textarea")
    .fill("This is a test guide description.");

  // Add a text variable
  await page.getByTestId("add-variable-button").click();
  await page.getByTestId("variable-name-input").fill("text_variable");
  await page.getByTestId("variable-type-select").selectOption("text");
  await page
    .getByTestId("variable-description-textarea")
    .fill("A test text variable");
  await page.getByTestId("save-variable-button").click();

  // Add guide steps
  // text step
  await page.getByTestId("add-step-button").click();
  await page
    .getByTestId("new-step-input")
    .fill(
      "Example text: <<var:text_variable>> as well as some XSS <script>alert('XSS');</script>"
    );
  await page.getByTestId("confirm-new-step-button").click();

  // text step 2
  await page.getByTestId("add-step-button").click();
  await page
    .getByTestId("new-step-input")
    .fill("This should remain unchanged.");
  await page.getByTestId("confirm-new-step-button").click();

  // text step 2
  await page.getByTestId("add-step-button").click();
  await page
    .getByTestId("new-step-input")
    .fill("<a href='javascript:alert(1)'>Click me</a>");
  await page.getByTestId("confirm-new-step-button").click();

  // confirm guide and navigate to review page
  await page.getByTestId("submit-new-guide-button").click();
  await page.goto("/guides/review-pending");
  await expect(page.getByTestId("results-container").first()).toBeAttached();
  await page.getByTestId("guide-xss-test").click();

  // Check that xss script has been sanitized
  await expect(page.getByTestId("edit-steps-container")).toBeAttached();
  const steps = await page.getByTestId("edit-step-input").all();
  const stepTexts = await Promise.all(steps.map((step) => step.inputValue()));

  expect(stepTexts).toContain(
    "Example text: <<var:text_variable>> as well as some XSS "
  );
  expect(stepTexts).toContain("This should remain unchanged.");

  expect(stepTexts).toContain("Click me");
});
