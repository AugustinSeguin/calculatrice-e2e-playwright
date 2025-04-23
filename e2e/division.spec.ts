import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");
});

test.describe("Division positive numbers", () => {
  test("8 / 2 = 4", async ({ page }) => {
    await page.locator("#num-8").click();
    await page.locator("#num-division").click();
    await page.locator("#num-2").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("4");
  });
});

test.describe("Division with a negative number (first number)", () => {
  test("-8 / 2 = -4", async ({ page }) => {
    await page.locator("#soustraction").click();
    await page.locator("#num-8").click();
    await page.locator("#num-division").click();
    await page.locator("#num-2").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("-4");
  });
});

test.describe("Division with a negative number (second number)", () => {
  test("8 / -2 = -4", async ({ page }) => {
    await page.locator("#num-8").click();
    await page.locator("#num-division").click();
    await page.locator("#soustraction").click();
    await page.locator("#num-2").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("-4");
  });
});

test.describe("Division with two negative numbers", () => {
  test("-8 / -2 = 4", async ({ page }) => {
    await page.locator("#soustraction").click();
    await page.locator("#num-8").click();
    await page.locator("#num-division").click();
    await page.locator("#soustraction").click();
    await page.locator("#num-2").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("4");
  });
});

test.describe("Result decimal", () => {
  test("7 / 2 = 3.5", async ({ page }) => {
    await page.locator("#num-7").click();
    await page.locator("#num-division").click();
    await page.locator("#num-2").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("3.5");
  });
});

test.describe("Division by 1", () => {
  test("9 / 1 = 9", async ({ page }) => {
    await page.locator("#num-9").click();
    await page.locator("#num-division").click();
    await page.locator("#num-1").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("9");
  });
});

test.describe("Division by 0", () => {
  test("9 / 0 = Error", async ({ page }) => {
    await page.locator("#num-9").click();
    await page.locator("#num-division").click();
    await page.locator("#num-0").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("Error");
  });
});

test.describe("Division with 0 as the first number", () => {
  test("0 / 5 = 0", async ({ page }) => {
    await page.locator("#num-0").click();
    await page.locator("#num-division").click();
    await page.locator("#num-5").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("0");
  });
});
