# Robin Vikström — portfolio

En personlig portfolio med React, Vite och CSS. Ljus och avskalad med en
scrollstyrd projektsekvens, läsbar text och en enhetlig projektöversikt.
De fem ursprungliga projekten och deras sakuppgifter är bevarade. AI Product
Studio, Salon, ProjectFlow och QuestForge är tillagda: totalt nio projekt.

## Kör lokalt

```sh
npm install
npm run dev -- --host 127.0.0.1
```

Öppna http://127.0.0.1:5173/. Använd `npm.cmd` i PowerShell om `npm` blockeras
av datorns skriptpolicy. Produktion byggs till `dist` med `npm run build`.

## Kontroller

```sh
npm run lint
npm run build
npm run test:e2e
```

Webbläsartesterna använder installerad Google Chrome. Playwright startar
utvecklingsservern om den inte redan körs. Testerna blockerar extern trafik
och simulerar kontaktformulärets svar; inga meddelanden skickas.

Testerna täcker de nio projekten på svenska och engelska, sparat språkval,
mobilnavigation, bildvisare och tangentbord, gamla projektlänkar, 404,
kontaktformulär, fem skärmbredder, reducerad/pausad rörelse och projektfilmens
scrollförlopp, direktval och mobilversion.

## Innehåll och struktur

- `src/data/projects.js`: projekt, status, fakta, teknik, länkar och bildtexter.
- `src/data/copy.js`: personlig text och gränssnitt på båda språken.
- `src/components/Home.jsx`: presentation, projektöversikt och om mig.
- `src/components/ProjectDetail.jsx`: gemensam detaljvy för projekt.
- `src/components/ScreenshotGallery.jsx`: bildvisare med native dialog.
- `src/components/ProjectFilm.jsx`: scrollstyrd sekvens med faktiska projektbilder.
- `src/components/Contact.jsx`: det befintliga Formspree-formuläret.
- `src/App.css` och `src/styles/`: responsiv design och animationer.

Sales-OS visas först som **pågående eget bygge**. Quizmaster, Hittarecept,
Konnect ChatApp och Namngivelse inbjudan visas som färdiga projekt. Inga
effektmått, länkar eller meriter har lagts till utan underlag. Projektsidorna
har även stöd för tydligt märkta koncept och döljer tomma valfria fält.

AI Product Studio, Salon, ProjectFlow och QuestForge visas som pågående
MVP:er/prototyper med skärmbilder och förklarade begränsningar på båda språken.
Källor, bildursprung och länkkontroll finns i [projektunderlaget](docs/PROJECT-SOURCES.md).
GitHub-knappar visas först när projektens publika länkar kan verifieras.

Sales-OS-bildernas företags- och personuppgifter är fiktiv demodata.
De sex godkända `public/screenshots/sales-os/demo-*.png` används. Originalbilder
med verkliga uppgifter och den gamla inloggningsbilden ska inte publiceras.

## Rörelse och tillgänglighet

Hero-sekvensen visar Sales-OS, Hittarecept och Quizmaster. Vanlig scroll styr
bildövergångar och en försiktig kameraeffekt på större skärmar. Sekvensen är
byggd med HTML/CSS och riktiga projektbilder; den är inte en inspelad video.
Scrollen kapas inte och knappen ”Se mina projekt” går direkt till projektlistan.

På mobil, i korta fönster och vid reducerad rörelse är projektvisningen statisk,
med knappar för att välja projekt. ”Minska rörelse” finns före sekvensen och
sparar valet. Systemets `prefers-reduced-motion` respekteras även när det ändras.

Sektioner tonas in vid scroll. Innehållet är synligt även utan animationsstöd.
Navigering, formulär, språkväxling och bildvisare går att använda med tangentbord.
Typsnittet Manrope levereras lokalt i bygget. Huvudtext är minst 16 px och
bildtexter minst 14 px. Formulärfält och kontroller har synliga fokusmarkeringar.

## Kontakt och publicering

Formspree-formuläret `xqapopdp` och befintlig mejladress används fortsatt.
Lyckade svar leder till `/thank-you`. Verklig leverans har inte testats;
testerna använder simulerade svar. Någon Next.js-server behövs inte för
portfolions nuvarande funktioner.

`public/_redirects` stöder direkta SPA-länkar på Netlify. Den gamla adressen
`/projects/solvigo-sales-os` omdirigeras till `/projects/sales-os`.

**Ingen push eller publicering utan Robins uttryckliga godkännande.**

## Bevarat original

Se [innehållsarkivet](docs/CONTENT-ARCHIVE.md). Den exakta informationen före
ombygget finns i `docs/content-snapshot-2026-10-06.json`. En fullständig lokal
arkivkopia finns i `.qa.local/portfolio-before-rebuild-2026-10-06.zip`.
Originalets Git-revision är `01ff875`. Arbetsriktning finns i `PORTFOLIO-PLAN.md`.
