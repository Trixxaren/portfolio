import { test, expect } from "@playwright/test";

const browserErrors = new WeakMap();
const cases = [
  { slug: "quizmaster", title: "Quizmaster", technology: "JavaScript" },
  { slug: "hittarecept", title: "Hittarecept", technology: "MealDB API" },
  { slug: "konnect", title: "Konnect ChatApp", technology: "React" },
  { slug: "invitation", title: "Namngivelse inbjudan", technology: "Formspree" },
  { slug: "sales-os", title: "Sales-OS", technology: "Next.js 15" },
  { slug: "ai-product-studio-app", title: "AI Product Studio", technology: "TypeScript", ongoing: true },
  { slug: "salon", title: "Salon", technology: "SQLite", ongoing: true },
  { slug: "projectflow", title: "ProjectFlow", technology: "React", ongoing: true },
  { slug: "questforge", title: "QuestForge", technology: "Phaser 3", ongoing: true },
];

test.beforeEach(async ({ page }) => {
  const errors = [];
  browserErrors.set(page, errors);
  page.on("pageerror", (error) => errors.push(error.message));
  // No test may send a message or depend on a third-party service.
  // Explicit Formspree mocks in the contact test take precedence over this guard.
  await page.route(/^https?:\/\//, (route) => {
    const hostname = new URL(route.request().url()).hostname;
    return hostname === "127.0.0.1" ? route.continue() : route.abort();
  });
});

test.afterEach(async ({ page }) => {
  expect(browserErrors.get(page), "No unhandled browser exceptions").toEqual([]);
});

async function switchToEnglish(page) {
  await page.getByRole("button", { name: "Switch to English", exact: true }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
}

async function expectLoadedImages(page, selector) {
  for (const image of await page.locator(selector).all()) {
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate((element) => element.complete && element.naturalWidth > 0)).toBe(true);
  }
}

for (const language of ["sv", "en"]) {
  for (const project of cases) {
    test(`${project.title}: factual content and status in ${language}`, async ({ page }) => {
      await page.goto(`/projects/${project.slug}`);
      if (language === "en") await switchToEnglish(page);

      await expect(page.getByRole("heading", { level: 1, name: project.title, exact: true })).toBeVisible();
      await expect(page).toHaveTitle(`${project.title} — Robin Vikström`);
      const ongoing = project.slug === "sales-os" || project.ongoing;
      const status = language === "sv"
        ? ongoing ? "Pågående" : "Färdigt projekt"
        : ongoing ? "In progress" : "Completed";
      await expect(page.locator(".case-header .status")).toHaveText(status);
      await expect(page.locator("#case-technology")).toContainText(project.technology);
      await expect(page.locator("#case-role")).toBeAttached();
      await expect(page.locator(".case-summary")).not.toBeEmpty();
      await expectLoadedImages(page, ".shot-open img");
      await expect(page.locator(".case-next-link")).toHaveAttribute("href", /^\/projects\//);

      if (project.slug === "sales-os") {
        await expect(page.locator("#case-role")).toContainText(language === "sv" ? "Eget bygge" : "My own build");
        await expect(page.locator("#case-overview")).toContainText(language === "sv"
          ? "En människa måste alltid godkänna mejlen innan de skickas."
          : "A person must always approve emails before they are sent.");
        await expect(page.locator(".case-agent-list details")).toHaveCount(5);
        await expect(page.locator(".shot-thumb")).toHaveCount(6);
        await expect(page.locator(".shot-caption").first()).toContainText(language === "sv" ? "Fiktiv demodata" : "Fictional demo data");
        await expect(page.locator("#case-next")).toContainText(language === "sv" ? "Fortsatt utveckling" : "Continued development");
        await expect(page.locator(".case-actions a[target='_blank']")).toHaveCount(0);
      } else if (project.ongoing) {
        await expect(page.locator("#case-next")).not.toBeEmpty();
        await expect(page.locator(".case-actions a[target='_blank']")).toHaveCount(0);
        await expect(page.locator(".shot-open img")).toBeVisible();
      } else {
        await expect(page.getByRole("link", { name: language === "sv" ? "Öppna demo" : "Open demo" })).toHaveAttribute("target", "_blank");
      }
    });
  }
}

test("all project cards navigate and the old Sales-OS URL redirects", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".project-card-link")).toHaveCount(cases.length);
  for (const project of cases) {
    await expect(page.locator(`.project-card-link[href='/projects/${project.slug}']`)).toHaveCount(1);
  }
  await page.locator(".project-card-link[href='/projects/sales-os']").click();
  await expect(page).toHaveURL(/\/projects\/sales-os$/);
  await page.locator(".case-back").first().click();
  await expect(page).toHaveURL(/\/#MyPortfolio$/);
  await expect(page.locator("#MyPortfolio")).toBeFocused();
  await page.goto("/projects/solvigo-sales-os");
  await expect(page).toHaveURL(/\/projects\/sales-os$/);
});

test("missing projects and pages have a usable route home", async ({ page }) => {
  for (const path of ["/projects/missing-project", "/missing-page"]) {
    await page.goto(path);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Här var det tomt.");
    await page.locator("main").getByRole("link").click();
    await expect(page).toHaveURL(/\/(#MyPortfolio)?$/);
    await expect(page.locator(".project-card-link")).toHaveCount(cases.length);
  }
});

test("language selection persists on reload and while navigating", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("lang", "sv");
  await switchToEnglish(page);
  await expect(page.locator(".hero-introduction")).toContainText("I work as a Sales Manager");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.getByRole("button", { name: "Byt till svenska", exact: true })).toBeVisible();
  await page.locator(".project-card-link[href='/projects/quizmaster']").click();
  await expect(page.locator(".case-summary")).toContainText("An interactive quiz");
  await page.getByRole("button", { name: "Byt till svenska", exact: true }).click();
  await expect(page.locator(".case-summary")).toContainText("Ett interaktivt quiz");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("lang", "sv");
});

test("mobile menu supports Escape, restores focus and closes on navigation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Meny", exact: true });
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await menu.click();
  const close = page.getByRole("button", { name: "Stäng", exact: true });
  await expect(close).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator("#main-navigation a").first()).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(menu).toBeFocused();
  await menu.click();
  await page.getByRole("navigation", { name: "Huvudnavigation" }).getByRole("link", { name: /Kontakt/ }).click();
  await expect(page).toHaveURL(/\/#Contact$/);
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator("#Contact")).toBeFocused();
});

for (const language of ["sv", "en"]) {
  test(`gallery selection, keyboard, Escape and focus restoration in ${language}`, async ({ page }) => {
    await page.goto("/projects/sales-os");
    if (language === "en") await switchToEnglish(page);
    const thumbnails = page.locator(".shot-thumb");
    await thumbnails.nth(2).click();
    await expect(thumbnails.nth(2)).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator(".shot-open img")).toHaveAttribute("src", /demo-companies\.png$/);
    const opener = page.locator(".shot-open");
    await opener.click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(page.getByRole("button", { name: language === "sv" ? "Stäng bildvisaren" : "Close image viewer" })).toBeFocused();
    await expect.poll(() => page.evaluate(() => document.body.style.overflow)).toBe("hidden");
    await page.keyboard.press("ArrowRight");
    await expect(dialog.locator(".shot-dialog-image img")).toHaveAttribute("src", /demo-company-detail\.png$/);
    await page.keyboard.press("ArrowLeft");
    await expect(dialog.locator(".shot-dialog-image img")).toHaveAttribute("src", /demo-companies\.png$/);
    await page.keyboard.press("Escape");
    await expect(dialog).not.toBeVisible();
    await expect(opener).toBeFocused();
    await expect.poll(() => page.evaluate(() => document.body.style.overflow)).not.toBe("hidden");
    await thumbnails.first().click();
    await page.locator(".shot-figure").getByRole("button", { name: language === "sv" ? "Föregående bild" : "Previous image" }).click();
    await expect(thumbnails.last()).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator(".shot-open img")).toHaveAttribute("src", /demo-tasks\.png$/);
  });
}

test("contact validates required fields and handles mocked failure and success", async ({ page }) => {
  let submissions = 0;
  let responseStatus = 422;
  await page.route("https://formspree.io/**", async (route) => {
    expect(route.request().method()).toBe("POST");
    submissions += 1;
    await route.fulfill({
      status: responseStatus,
      contentType: "application/json",
      body: JSON.stringify(responseStatus === 422
        ? { errors: [{ field: "email", message: "Local mocked error", code: "TYPE_EMAIL" }] }
        : { next: "/thank-you" }),
    });
  });
  await page.goto("/#Contact");
  const form = page.locator(".contact-form");
  const submit = page.getByRole("button", { name: "Skicka meddelande", exact: true });
  await submit.click();
  expect(await form.evaluate((element) => element.checkValidity())).toBe(false);
  expect(submissions).toBe(0);
  await form.locator("input[name='name']").fill("Local QA");
  await form.locator("input[name='email']").fill("qa@example.com");
  await form.locator("textarea[name='message']").fill("Local intercepted acceptance test. Never sent.");
  await submit.click();
  await expect(page.getByRole("alert")).toContainText("Meddelandet kunde inte skickas");
  await expect(form.locator("input[name='email']")).toHaveAttribute("aria-invalid", "true");
  await expect(page.locator("#contact-email-error")).toContainText("Local mocked error");
  await expect(submit).toBeEnabled();
  expect(submissions).toBe(1);
  responseStatus = 200;
  await submit.click();
  await expect(page).toHaveURL(/\/thank-you$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Tack för ditt meddelande.");
  expect(submissions).toBe(2);
  await page.getByRole("link", { name: "Till startsidan", exact: true }).click();
  await expect(page).toHaveURL(/\/$/);
});

for (const width of [320, 390, 768, 1024, 1440]) {
  test(`images render and pages stay within a ${width}px viewport`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    for (const path of ["/", "/projects/sales-os", "/projects/invitation"]) {
      await page.goto(path);
      await expectLoadedImages(page, path === "/" ? ".project-window img, .portrait-image img" : ".shot-open img");
      const dimensions = await page.evaluate(() => ({
        content: document.documentElement.scrollWidth,
        viewport: document.documentElement.clientWidth,
      }));
      expect(dimensions.content, `${path} has no horizontal page overflow`).toBeLessThanOrEqual(dimensions.viewport + 1);
    }
  });
}

test("reduced motion leaves the content visible without running animations", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  expect(await page.evaluate(() => matchMedia("(prefers-reduced-motion: reduce)").matches)).toBe(true);
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe("auto");
  await page.locator(".project-card").first().scrollIntoViewIfNeeded();
  await expect(page.locator(".project-card").first()).toHaveCSS("opacity", "1");
  expect(await page.evaluate(() => document.getAnimations().filter((animation) => animation.playState === "running").length)).toBe(0);
});

test("the motion pause control persists across reload and navigation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  await page.getByRole("button", { name: "Minska rörelse", exact: true }).click();
  const resume = page.getByRole("button", { name: "Aktivera rörelse", exact: true });
  await expect(resume).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator("html")).toHaveAttribute("data-motion", "paused");
  expect(await page.evaluate(() => localStorage.getItem("portfolio-motion"))).toBe("paused");
  await page.reload();
  await expect(resume).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator("html")).toHaveAttribute("data-motion", "paused");
  await page.locator(".project-card-link[href='/projects/quizmaster']").click();
  await expect(page.locator("html")).toHaveAttribute("data-motion", "paused");
  expect(await page.evaluate(() => document.getAnimations().filter((animation) => animation.playState === "running").length)).toBe(0);
  await page.locator(".case-back").first().click();
  await resume.click();
  await expect(page.getByRole("button", { name: "Minska rörelse", exact: true })).toHaveAttribute("aria-pressed", "false");
  await expect(page.locator("html")).toHaveAttribute("data-motion", "active");
});

test("desktop project film follows native scrolling and can be bypassed", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  const film = page.locator(".film-runway");
  await expect(film).toHaveAttribute("data-scroll", "true");
  for (const [progress, slug] of [[0.12, "sales-os"], [0.5, "hittarecept"], [0.88, "quizmaster"]]) {
    await film.evaluate((element, ratio) => {
      const stage = element.querySelector(".film-sticky");
      const travel = element.offsetHeight - stage.offsetHeight;
      window.scrollTo({ top: window.scrollY + element.getBoundingClientRect().top - 92 + travel * ratio, behavior: "instant" });
    }, progress);
    await expect(film).toHaveAttribute("data-scene", slug);
    await expect(page.locator(".film-project-link")).toHaveAttribute("href", `/projects/${slug}`);
    await expect(page.locator(".film-frame[aria-hidden='false']")).toHaveCount(1);
  }
  await page.getByRole("button", { name: "Sales-OS", exact: true }).click();
  await expect(film).toHaveAttribute("data-scene", "sales-os");
  await expect(page.locator(".film-demo")).toContainText("fiktiv demodata");
  await page.locator(".hero-actions .button-primary").click();
  await expect(page.locator("#MyPortfolio")).toBeFocused();
  await expect(page.locator("#MyPortfolio h2")).toBeInViewport();
});

test("the film is directly selectable on mobile and with reduced motion", async ({ page }) => {
  for (const size of [{ width: 390, height: 844 }, { width: 1440, height: 1000 }]) {
    await page.setViewportSize(size);
    await page.goto("/");
    const film = page.locator(".film-runway");
    await expect(film).toHaveAttribute("data-scroll", "false");
    expect(await film.evaluate(element => element.offsetHeight)).toBeLessThan(size.height);
    await page.getByRole("button", { name: "Hittarecept", exact: true }).click();
    await expect(film).toHaveAttribute("data-scene", "hittarecept");
    await expect(page.locator(".film-project-link")).toHaveAttribute("href", "/projects/hittarecept");
    await page.locator(".film-project-link").click();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Hittarecept");
  }
});
