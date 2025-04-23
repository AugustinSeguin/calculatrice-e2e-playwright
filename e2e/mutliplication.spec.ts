import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");
});
test.setTimeout(120_000);

test.describe("Multiplication positive numbers", () => {
  test("4 * 3 = 12", async ({ page }) => {
    await page.locator("#num-4").click();
    await page.locator("#multiplication").click();
    await page.locator("#num-3").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("12");
  });
});

test.describe("Multiplication with a negative number (first number)", () => {
  test("-4 * 3 = -12", async ({ page }) => {
    await page.locator("#soustraction").click();
    await page.locator("#num-4").click();
    await page.locator("#multiplication").click();
    await page.locator("#num-3").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("-12");
  });
});

test.describe("Multiplication with a negative number (second number)", () => {
  test("4 * -3 = -12", async ({ page }) => {
    await page.locator("#num-4").click();
    await page.locator("#multiplication").click();
    await page.locator("#soustraction").click();
    await page.locator("#num-3").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("-12");
  });
});

test.describe("Multiplication with two negative numbers", () => {
  test("-2 * -2 = 4", async ({ page }) => {
    await page.locator("#soustraction").click();
    await page.locator("#num-2").click();
    await page.locator("#multiplication").click();
    await page.locator("#soustraction").click();
    await page.locator("#num-2").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("4");
  });
});

test.describe("Multiplication by 0", () => {
  test("5 * 0 = 0", async ({ page }) => {
    await page.locator("#num-5").click();
    await page.locator("#multiplication").click();
    await page.locator("#num-0").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("0");
  });
});

test.describe("Multiplication by 1", () => {
  test("7 * 1 = 7", async ({ page }) => {
    await page.locator("#num-7").click();
    await page.locator("#multiplication").click();
    await page.locator("#num-1").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("7");
  });
});

test.describe("Multiplication by -1", () => {
  test("7 * -1 = -7", async ({ page }) => {
    await page.locator("#num-7").click();
    await page.locator("#multiplication").click();
    await page.locator("#soustraction").click();
    await page.locator("#num-1").click();
    await page.locator(".btnEqual").click();
    await expect(page.locator(".screen")).toHaveText("-7");
  });
});
