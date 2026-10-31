# The Modern Builder — visual redesign

Implemented locally on 2026-10-31. The approved GitHub checkpoint is `687037b`.
This redesign has not been pushed or deployed.

## Design

Warm ivory, graphite, muted sage and copper. Manrope headings and DM Sans body
copy continue to use the existing font integration. Larger editorial typography,
a simple Robin Vikström wordmark, square authentic portrait, restrained corners
and straight screenshots replace the earlier layered styles.

Sales-OS is a full-width featured case. The next four projects form a gallery;
remaining projects use horizontal rows on desktop. Six projects are visible
initially, with the seventh revealed by the existing animated toggle. Scroll
measurements now account for cards spanning multiple columns.

About, equal expertise areas and the three-step working approach share a clear
layout. Contact and the footer use graphite. Project details and screenshot
dialogs follow the same theme. Existing reduced-motion behavior is respected.

All seven project records, factual copy, CV files and contact submission logic
are preserved. No dependencies or framework changes were introduced.

## Verification

- Production build and ESLint pass.
- Swedish and English copy, all seven project links and galleries checked.
- Home layout checked at 320, 390, 768, 1024 and 1440 px.
- All seven project pages checked for overflow at the same five widths.
- Show more/fewer: 16 combinations of four widths, two languages and normal /
  reduced motion. Expansion reveals the extra project below the header;
  collapse maintains button position and keyboard focus.
- Logo returns to the top from home, anchored home and case pages.
- Mobile menu links, initial focus, Escape and focus return checked.
- Language selection persists after reloading.
- Screenshot arrows, keyboard navigation, modal closing and focus return pass.
- Both CV PDFs return HTTP 200 and open in separate tabs; production copies
  match the original files.
- Contact validation, server error and success redirect tested in both languages.
  Four form requests were intercepted locally; no external messages were sent.
- No application exceptions observed in the browser tests.
- Desktop/mobile screenshots captured and inspected in both languages.

QA scripts and screenshots are local, ignored artifacts under `.qa.local/`.
Useful previews: `career-sv-1440-hero.png`, `career-sv-390-hero.png`,
`modern-final-390-projects.png`, `modern-final-1440-about.png`, and
`modern-en-1440-case.png`. Full-page captures: `modern-{sv,en}-{390,1440}-full.png`.

Actual email delivery and external GitHub/demo availability were not tested;
those integrations and destination links were unchanged. There are no known
blocking local issues. Preview server: http://localhost:5174/.
