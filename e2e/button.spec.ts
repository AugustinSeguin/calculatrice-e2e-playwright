import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");
});

test.describe("Test to click only on buttons without doing any operation", () => {
  test("click on all numbers", async ({ page }) => {
    test.setTimeout(120_000);

    await page.locator("#1").click();

    await page.locator("#2").click();

    await page.locator("#3").click();

    await page.locator("#4").click();

    await page.locator("#5").click();

    await page.locator("#6").click();

    await page.locator("#7").click();

    await page.locator("#8").click();

    await page.locator("#9").click();

    await page.locator("#0").click();

    await expect(page.locator(".screen")).toHaveText("123456780");
  });
});

test("click on all operators", async ({ page }) => {
  await page.locator("#sum").click();

  await page.locator("#soustraction").click();

  await page.locator("#multiplication").click();

  await page.locator(".btnEqual").click();

  await expect(page.locator(".screen")).toHaveText("0");
});

test("click on + 3 = ", async ({ page }) => {
  await page.locator("#plus").click();
  await page.locator("#3").click();
  await page.locator(".btnEqual").click();

  await expect(page.locator(".screen")).toHaveText("3");
});

test("click on equals", async ({ page }) => {
  await page.locator(".btnEqual").click();

  await expect(page.locator(".screen")).toHaveText("0");
});
