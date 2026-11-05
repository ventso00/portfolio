import { test, expect } from "@playwright/test";

for (const width of [360, 768, 1440]) {
  test("Portfolio visible et sans débordement horizontal à " + width + "px", async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    await page.goto("http://127.0.0.1:8000/", { waitUntil: "networkidle" });
    await expect(page).toHaveTitle(/Ventso Rajaomanjato/);
    await expect(page.getByRole("heading", { name: /Vos outils numériques/ })).toBeVisible();
    await expect(page.getByRole("heading", { name: "UptimePulse V2" })).toBeVisible();
    const dimensions = await page.evaluate(() => ({
      document: document.documentElement.scrollWidth,
      viewport: document.documentElement.clientWidth
    }));
    expect(dimensions.document).toBeLessThanOrEqual(dimensions.viewport + 1);
    expect(errors).toEqual([]);
    await page.screenshot({ path: "artifacts/portfolio-" + width + ".png", fullPage: true });
  });
}

test("Landing page sans menu encombrant", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 780 });
  await page.goto("http://127.0.0.1:8000/");
  await expect(page.locator("#menu-toggle")).toHaveCount(0);
  await page.getByRole("link", { name: /Explorer mes réalisations/ }).click();
  await expect(page).toHaveURL(/#projets$/);
});

test("Contact et ressources externes", async ({ page }) => {
  await page.goto("http://127.0.0.1:8000/");
  await expect(page.locator('a[href^="mailto:"]').first()).toBeVisible();
  for (const repository of ["uptilmepulseV2", "ffCV", "SmartWater_project", "gpoAPK"]) {
    await expect(page.locator('a[href="https://github.com/ventso00/' + repository + '"]')).toHaveCount(1);
  }
});

test("Page 404 accessible", async ({ page }) => {
  await page.goto("http://127.0.0.1:8000/404.html");
  await expect(page.getByRole("heading", { name: /Cette page n'existe pas/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /Retour à l'accueil/ })).toBeVisible();
});
