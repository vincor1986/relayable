const { test, expect } = require("@playwright/test");
require("dotenv").config();

test("Guide functionality test", async ({ page }) => {
  // Navigate to the guide creation page
  await page.goto("/contribute/creator");

  // Fill in the guide details
  await page.getByTestId("vendor-search-input").fill("Algolia");
  await page.getByTestId("Algolia-badge").click();
  await page.getByTestId("new-guide-title-input").fill("Test Guide Title");
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

  // Add an enum variable (single value)
  await page.getByTestId("add-variable-button").click();
  await page.getByTestId("variable-name-input").fill("enum_variable_single");
  await page.getByTestId("variable-type-select").selectOption("enum");
  await page
    .getByTestId("variable-description-textarea")
    .fill("A test enum variable");
  await page
    .getByTestId("variable-variations-textarea")
    .fill("option1, option2, option3");
  await page.getByTestId("save-variable-button").click();

  // Add an enum variable (multi value)
  await page.getByTestId("add-variable-button").click();
  await page.getByTestId("variable-name-input").fill("enum_variable_multi");
  await page.getByTestId("variable-type-select").selectOption("enum");
  await page
    .getByTestId("variable-description-textarea")
    .fill("A test enum variable");
  await page.getByTestId("variable-multi-checkbox").click();
  await page
    .getByTestId("variable-variations-textarea")
    .fill("option1, option2, option3");
  await page.getByTestId("save-variable-button").click();

  // Add an optional boolean variable
  await page.getByTestId("add-variable-button").click();
  await page.getByTestId("variable-name-input").fill("boolean_variable");
  await page.getByTestId("variable-type-select").selectOption("boolean");
  await page
    .getByTestId("variable-description-textarea")
    .fill("A test boolean variable");
  await page.getByTestId("variable-required-checkbox").click();
  await page.getByTestId("save-variable-button").click();

  // Add guide steps
  // text step
  await page.getByTestId("add-step-button").click();
  await page.getByTestId("new-step-input").fill("Example text: ");
  await page.getByTestId("text_variable-variable").click();
  await page.getByTestId("confirm-new-step-button").click();

  // enum single value step
  await page.getByTestId("add-step-button").click();
  await page.getByTestId("new-step-input").fill("Example single enum: ");
  await page.getByTestId("enum_variable_single-variable").click();
  await page.getByTestId("confirm-new-step-button").click();

  // enum multi step
  await page.getByTestId("add-step-button").click();
  await page.getByTestId("new-step-input").fill("Example multi enum: ");
  await page.getByTestId("enum_variable_multi-variable").click();
  await page.getByTestId("confirm-new-step-button").click();

  // optional boolean step
  await page.getByTestId("add-step-button").click();
  await page.getByTestId("new-step-input").fill("Example boolean: ");
  await page.getByTestId("boolean_variable-variable").click();
  await page.getByTestId("confirm-new-step-button").click();

  // confirm guide and navigate to review page
  await page.getByTestId("submit-new-guide-button").click();
  await page.goto("/guides/review-pending");
  await expect(page.getByTestId("results-container")).toBeVisible();
  await page.getByTestId("guide-test-guide-title").click();

  await page.getByTestId("auth-code-input").fill(process.env.AUTH_CODE);
  await page.getByTestId("approve-guide-button").click();

  // Go to guide page and test functionality
  await page.goto("/guides/algolia/test-guide-title");

  // Enter test values for variables
  await page.getByTestId("variable-text_variable-input").fill("Test Text");
  await page
    .getByTestId("variable-enum_variable_single-input")
    .selectOption("option1");
  await page
    .getByTestId("variable-enum_variable_multi-option2-checkbox")
    .click();
  await page
    .getByTestId("variable-enum_variable_multi-option3-checkbox")
    .click();

  // Check optional step is removed correctly
  const stepsArr = await page.getByTestId("guide-step-instructions").all();
  expect(stepsArr.length).toBe(3);

  await page.getByTestId("variable-boolean_variable-input").click();
  const newStepsArr = await page.getByTestId("guide-step-instructions").all();
  expect(newStepsArr.length).toBe(4);

  // Check content of steps
  const textArr = await Promise.all(newStepsArr.map((p) => p.textContent()));

  expect(textArr[0].trim()).toBe("Example text: Test Text");
  expect(textArr[1].trim()).toBe("Example single enum: option1");
  expect(textArr[2].trim()).toBe("Example multi enum: option2 and option3");
  expect(textArr[3].trim()).toBe("Example boolean: true");
});
