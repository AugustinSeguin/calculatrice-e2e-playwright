import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");
});

test.describe("Multiplication positive numbers", () => {
  test("4 * 3 = 12", async ({ page }) => {
    await page.locator("#4").click();
    await page.locator("#multiplication").click();
    await page.locator("#3").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("12");
  });
});

test.describe("Multiplication with a negative number (first number)", () => {
  test("-4 * 3 = -12", async ({ page }) => {
    await page.locator("#soustraction").click();
    await page.locator("#4").click();
    await page.locator("#multiplication").click();
    await page.locator("#3").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("-12");
  });
});

test.describe("Multiplication with a negative number (second number)", () => {
  test("4 * -3 = -12", async ({ page }) => {
    await page.locator("#4").click();
    await page.locator("#multiplication").click();
    await page.locator("#soustraction").click();
    await page.locator("#3").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("-12");
  });
});

test.describe("Multiplication with two negative numbers", () => {
  test("-2 * -2 = 4", async ({ page }) => {
    await page.locator("#soustraction").click();
    await page.locator("#2").click();
    await page.locator("#multiplication").click();
    await page.locator("#soustraction").click();
    await page.locator("#2").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("4");
  });
});
