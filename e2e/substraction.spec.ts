import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");
});
test.setTimeout(120_000);

test.describe("Subtraction positive numbers", () => {
  test("5 - 3 = 2", async ({ page }) => {
    await page.locator("#num-5").click();
    await page.locator("#soustraction").click();
    await page.locator("#num-3").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("2");
  });
});

test.describe("Subtraction with a negative number (first number)", () => {
  test("-5 - 3 = -8", async ({ page }) => {
    await page.locator("#soustraction").click();
    await page.locator("#num-5").click();
    await page.locator("#soustraction").click();
    await page.locator("#num-3").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("-8");
  });
});

test.describe("Subtraction with a negative number (second number)", () => {
  test("5 - (-3) = 8", async ({ page }) => {
    await page.locator("#num-5").click();
    await page.locator("#soustraction").click();
    await page.locator("#soustraction").click();
    await page.locator("#num-3").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("8");
  });
});

test.describe("Subtraction with two negative numbers", () => {
  test("-5 - (-3) = -2", async ({ page }) => {
    await page.locator("#soustraction").click();
    await page.locator("#num-5").click();
    await page.locator("#soustraction").click();
    await page.locator("#soustraction").click();
    await page.locator("#num-3").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("-2");
  });
});
