import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");
});

test.describe("Division positive numbers", () => {
  test("8 / 2 = 4", async ({ page }) => {
    await page.locator("#8").click();
    await page.locator("#division").click();
    await page.locator("#2").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("4");
  });
});

test.describe("Division with a negative number (first number)", () => {
  test("-8 / 2 = -4", async ({ page }) => {
    await page.locator("#soustraction").click();
    await page.locator("#8").click();
    await page.locator("#division").click();
    await page.locator("#2").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("-4");
  });
});

test.describe("Division with a negative number (second number)", () => {
  test("8 / -2 = -4", async ({ page }) => {
    await page.locator("#8").click();
    await page.locator("#division").click();
    await page.locator("#soustraction").click();
    await page.locator("#2").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("-4");
  });
});

test.describe("Division with two negative numbers", () => {
  test("-8 / -2 = 4", async ({ page }) => {
    await page.locator("#soustraction").click();
    await page.locator("#8").click();
    await page.locator("#division").click();
    await page.locator("#soustraction").click();
    await page.locator("#2").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("4");
  });
});
