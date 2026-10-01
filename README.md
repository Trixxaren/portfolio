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

Analytics belongs to the ongoing Sales-OS case. CSV/JSON import and AI questions
are described as ideas for that module, not completed features. The project list
contains the original four projects plus Sales-OS.
Do not infer completed features, architecture decisions or measurable outcomes.

## Contact and deployment

Contact uses the existing Formspree form. Local checks mock API responses and
do not send external messages. Actual delivery needs a separate check.

Build: `npm run build`. Netlify publish directory: `dist`.
`public/_redirects` supports direct SPA route loading.
The old `/projects/solvigo-sales-os` path redirects to `/projects/sales-os`.

Local commits are allowed. **Do not push or deploy without Robin’s explicit
approval.** The existing live address is https://robinvikstrom.netlify.app/.
