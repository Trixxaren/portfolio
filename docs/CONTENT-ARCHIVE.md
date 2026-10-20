# Innehåll före ombyggnad — 2026-10-06

Den gamla portfolions innehåll är sparat innan den visuella ombyggnaden.
Källan är `https://github.com/Trixxaren/portfolio.git`, revision
`01ff875008d74e90784bd386b93765c85722dd7b`. Lokal HEAD och hämtad
`origin/main` pekade på samma revision när arbetet startade.

## Sparade kopior

- `docs/content-snapshot-2026-10-06.json` innehåller exakta strukturerade
  kopior av `copy`, `projects`, `projectStatus` och `statusLabels` från
  revisionen, inklusive alla svenska och engelska texter. Där finns också
  ursprunglig källkod för komponenter med personuppgifter, länkar och
  projektpresentation, kontaktinställningar och skärmbildsreferenser.
- `.qa.local/portfolio-before-rebuild-2026-10-06.zip` är ett fullständigt
  Git-arkiv av alla spårade filer vid samma revision, inklusive bilder och
  den gamla implementationen. Arkivet är lokalt och ignoreras av Git.
  Ospårade filer, lokala inställningar och hemligheter ingår inte.
- `src/data/projects.js` och `src/data/copy.js` förblir den nya portfolions
  aktiva innehållskällor. Snapshot-filen är en historisk kopia.

## Person och presentation

Robin Vikström arbetar som Sales Manager på Solvigo och finns i Stockholm.
Bakgrunden är försäljning, kunddialog och affärsutveckling. Robin studerar
och fördjupar sig inom fullstack, API:er och datamodellering, AI-workflows,
automation och teknisk projektledning. Egna projekt visar arbetet och
lärandet. Erfarenhetsnivåer och effektmått ska inte överdrivas.

Det aktiva porträttet är `/profilbild.png`. Befintliga porträttalternativ
`/kostym.png` och `/utomhus.png` bevaras tillsammans med övriga spårade
bilder i Git-arkivet.

## Projekt som bevaras

| Projekt | Status | Publik demo |
| --- | --- | --- |
| Quizmaster | Färdigt projekt | https://quizmastertrixx.netlify.app/ |
| Hittarecept | Färdigt projekt | https://hittarecept.netlify.app/ |
| Konnect ChatApp | Färdigt projekt | https://konnectchat.netlify.app/ |
| Namngivelse inbjudan | Färdigt projekt | https://oliverhoffmann.netlify.app/ |
| Sales-OS | Pågående | Ingen angiven |

Inget projekt har en angiven egen GitHub-länk. Tomma länkar ska inte
ersättas med påhittade adresser.

Sales-OS är Robins eget bygge av Solvigos interna CRM + Business OS.
Innehållet omfattar Next.js 15, TypeScript, Prisma, Postgres, fem agenter,
mänskliga mejlgodkännanden, regelbaserad autonomi, pipeline, uppgifter och
analys. Fullständiga beskrivningar av roll, arkitektur, beslut, lärdomar och
fortsatt arbete finns i snapshot-filen på båda språken. Inga verifierade
effektmått påstås.

Alla nuvarande projektskärmbilder och bildtexter finns i snapshot-filen.
Sales-OS använder endast sex `public/screenshots/sales-os/demo-*.png` med
fiktiv demodata. Originalbilder med verkliga uppgifter och den borttagna
inloggningsbilden får inte återinföras i `public` eller `dist`.

## Kontakt och befintliga länkar

- E-post: `robin.m.e.vikstrom@gmail.com`
- GitHub: https://github.com/Trixxaren
- LinkedIn: https://www.linkedin.com/in/robin-vikstr%C3%B6m-9959b6169/
- Svenskt CV: https://drive.google.com/file/d/1nwi5-Tz-900ZCL7Hv_FxP7rFAArTD49x/view?usp=drive_link
- Engelskt CV: https://drive.google.com/file/d/1f67O4kb25M93ZSiFmxbhCaltZu0vHZrV/view?usp=drive_link
- Befintlig publicerad adress: https://robinvikstrom.netlify.app/

Länkarna kommer från den ursprungliga koden. Arkiveringen innebär inte
att deras externa tillgänglighet har verifierats på nytt.

Kontaktformuläret använder `@formspree/react` och
`useForm("xqapopdp")`, motsvarande Formspree-adressen
`https://formspree.io/f/xqapopdp`. Namn, e-post och meddelande är
obligatoriska. Namn har högst 120 tecken och meddelande högst 5 000 tecken.
Lyckat svar leder till `/thank-you`; inskickning och fel har egna tillstånd.
Alla testinskickningar ska fångas lokalt och besvaras med mockade svar.

## Beteenden att behålla

Svenska och engelska, sparat språkval (`portfolio-language`), språkväxlare
på mobil och desktop, tillgänglig navigation, projektdetaljer, bildgallerier
med tangentbordsstyrd bildvisare, tydliga projektstatusar, reducerad rörelse,
tacksida och 404-vy. Den äldre länken `/projects/solvigo-sales-os` pekar
vidare till `/projects/sales-os`.

Den nya implementationens build, lint och browserflöden ska verifieras
innan arbetet markeras färdigt. Arkivet dokumenterar endast utgångsläget.
Ingen push eller publicering är godkänd.
