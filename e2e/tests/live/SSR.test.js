const { test, expect } = require("@playwright/test");

test("page is SSR-rendered", async ({ page }) => {
  // Navigate to the page
  await page.goto(
    "/dev-guides/hostgator/hostgator-create-a-restricted-ftpftps-account-for-your-developer",
    {
      waitUntil: "domcontentloaded",
    }
  );

  // Get the HTML source as delivered (after DOMContentLoaded but before JS modifies DOM)
  const html = await page.content();

  // Check that expected SSR content exists in the HTML
  expect(html).toContain(
    '<p class="text-sm text-gray-500">By <!-- -->Relayable AI</p>'
  );
  expect(html).toContain(
    '<p class="text-dark-grey">Click “Create FTP Account.”</p>'
  );
});
