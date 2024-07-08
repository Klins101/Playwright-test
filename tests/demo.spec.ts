import { test, expect } from "@playwright/test";

test("Go to URL", async ({ page }) => {
  await page.goto("https://www.gamesradar.com/best-horror-movies/");
  await expect(page.url()).toContain("game");
});

