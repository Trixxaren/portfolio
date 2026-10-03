# Robin Vikström — personal portfolio

A project-based portfolio about business, product, AI and technical learning.
Built with React, Vite, React Router and CSS.

## Local development

```sh
npm install
npm run dev -- --host 127.0.0.1
```

Use `npm.cmd` in PowerShell if the script execution policy blocks `npm`.
The preview normally runs at http://127.0.0.1:5173/.

## Checks

```sh
npm run lint
npm run build
```

## Add or edit a project

Edit `src/data/projects.js`. Each record has:

- `slug`, `title`, `status`, `kind`, `cover`, `tags`
- `github` and `demo`: URL or null
- `screenshots`: objects with `src`, `sv` and `en` captions
- `sv` and `en` content with `summary`, `problem`, `solution`, `role`,
  `technology`, `architecture`, `decisions`, `learning`, optional `analytics` and `next`

Statuses: `completed`, `ongoing`, `concept`.
Tags can be a shared array or an object with separate `sv` and `en` arrays.
Architecture and decisions are arrays of `[title, description]` pairs.
Use empty arrays or strings when information is unavailable. Optional empty
sections and missing links are hidden automatically.

Adding a record creates its card and `/projects/<slug>` detail page.
For a screenshot cover, set `cover: "screenshot"` and provide a screenshot.
Without screenshots, the cover displays the project title. Custom cover
illustrations live in `ProjectCover.jsx`.

UI and personal copy: `src/data/copy.js`.
Styles: `src/App.css`.
Current scope and release checklist: `PORTFOLIO-PLAN.md`.

## Content accuracy

Sales-OS is Robin’s own build, per his latest clarification. It is shown as an
ongoing case, alongside other projects. Concepts are explicitly labelled.
Illustrations use sample data, not internal customer information.

Sales-OS is an ongoing CRM + Business OS. The stack, agent roles and rule-based
controls come from Robin’s updated project description. Analytics is part of the
same system; effectiveness claims and code/test counts are not presented as
independently verified results. The original four projects remain.
Do not infer completed features, architecture decisions or measurable outcomes.

## Contact and deployment

Contact uses the existing Formspree form. Local checks mock API responses and
do not send external messages. Actual delivery needs a separate check.

Build: `npm run build`. Netlify publish directory: `dist`.
`public/_redirects` supports direct SPA route loading.
The old `/projects/solvigo-sales-os` path redirects to `/projects/sales-os`.

Local commits are allowed. **Do not push or deploy without Robin’s explicit
approval.** The existing live address is https://robinvikstrom.netlify.app/.

## Screenshot galleries

`ScreenshotGallery.jsx` renders the `screenshots` array with thumbnails and a
keyboard-accessible full-size dialog. Add local image paths and both captions
to the project record; the first image is also used on the project card.

Captured from the public demos on 2026-10-02:
- Quizmaster: https://quizmastertrixx.netlify.app/ (categories and question)
- Hittarecept: https://hittarecept.netlify.app/ (discovery and recipe details)
- Konnect: https://konnectchat.netlify.app/login (login and registration)

PNG captures are in `public/screenshots/`. No authentication or submissions
were performed. Six Sales-OS demo images are in
`public/screenshots/sales-os/`, with the dashboard first as the project cover.
All business and personal data in these images is fictional. They were edited
with the built-in image tool; layouts and typography may differ slightly from
the source screenshots. Captions in both languages label them as demo data.
The seventh gallery image (development sign-in) and the original screenshots
are excluded from public assets and the production build. Agent names use
Agent 1–5 throughout the case. No Gmail attachment URLs are stored in the app.

`MotionEffects.jsx` animates sections once when entering the viewport. Content
stays visible without animation support, and reduced-motion preferences disable
these effects.
