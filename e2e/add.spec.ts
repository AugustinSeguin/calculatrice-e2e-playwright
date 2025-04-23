import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");
});
test.setTimeout(120_000);

test.describe("Sum positive numbers", () => {
  test("1 + 1 = 2", async ({ page }) => {
    await page.locator("#num-1").click();
    await page.locator("#sum").click();
    await page.locator("#num-1").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("2");
  });
});

test.describe("Sum with a negative number (first number)", () => {
  test("-1 + 1 = 0", async ({ page }) => {
    await page.locator("#soustraction").click();
    await page.locator("#num-1").click();
    await page.locator("#sum").click();
    await page.locator("#num-1").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("0");
  });
});

test.describe("Sum with a negative number (second number)", () => {
  test("1 + (-1) = 0", async ({ page }) => {
    await page.locator("#num-1").click();
    await page.locator("#sum").click();
    await page.locator("#soustraction").click();
    await page.locator("#num-1").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("0");
  });
});

test.describe("Sum with two negative numbers", () => {
  test("-1 + (-1) = -2", async ({ page }) => {
    await page.locator("#soustraction").click();
    await page.locator("#num-1").click();
    await page.locator("#sum").click();
    await page.locator("#soustraction").click();
    await page.locator("#num-1").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("-2");
  });
});
