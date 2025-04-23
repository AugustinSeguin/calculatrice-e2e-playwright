import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");
});

test("perform division", async ({ page }) => {
  await page.locator("#8").click();
  await page.locator("#division").click();
  await page.locator("#2").click();
  await page.locator("#=").click();

  await expect(page.locator(".screen")).toHaveText("4");
});
