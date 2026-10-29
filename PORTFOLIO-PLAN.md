# Portfolio — arbetsplan

## Gällande riktning — 2026-10-29

Den nya karriärprofilen ersätter tidigare personliga presentationer nedan.
Robin är en affärsperson med teknisk förståelse: försäljning,
affärsutveckling, kundrelationer, Key Account Management samt projekt- och
verksamhetsutveckling. Frontendutbildningen är avslutad. Teknikintresset
och egna projekt finns kvar, utan att profilen främst riktas mot utvecklarjobb.

Enbart innehåll uppdateras på svenska och engelska. Behåll design, struktur,
funktioner, bilder, projekt och ordning. Sales-OS ligger först. Robins roll
beskrivs som behovsanalys, funktionsdefinition och styrning av utvecklingen;
AI-kodverktyg har genererat stora delar av koden. Övriga projektdata bevaras.

Uppdatera hero, porträttets yrkesrad, Om mig, kompetensområden, kontakttext,
sidfot och metadata enligt den bifogade karriärprofilen. CV-länkarna får inte
ersättas med gissade nya versioner. Befintliga länkar är publikt åtkomliga,
men aktuell versionsstatus behöver bekräftas av Robin. Se
docs/CAREER-PROFILE-UPDATE.md för kontrollresultat och exakta länkar.

Localhost för denna granskning: http://localhost:5174 (5173 är upptagen).
Ingen separat driftsättning görs; tidigare godkännande för GitHub-push gäller.

## Tidigare riktning (2026-10-01)

- Ljus, modern hemsideslayout med personlig presentation och toppnavigation.
- Varmvit bas, mjuka gröna toner, raka projektbilder och diskreta animationer.
- Originalprojekten Quizmaster, Hittarecept, Konnect ChatApp och Namngivelse
  inbjudan behålls. Sales-OS tillkommer som ett enda eget fullstack-case.
- Sales-OS samlar CRM, databas, leadmotor, AI-workflows, mänskliga beslut,
  uppföljning och analys. Ingen separat Sales Insights eller Business OS.
- Sales-OS visas som pågående. Planerad analysfunktionalitet beskrivs som idéer,
  inte som redan implementerade funktioner. Inga resultat eller stackdetaljer hittas på.
- Presentationen börjar med ”Jag jobbar som Sales Manager”. Fokus på fullstack,
  AI, teknisk projektledning, workflows och automation. Ingen ”Min riktning”.
- Problemlösning: Robin trivs med utmaningar som kräver nya perspektiv och lärande.
- Svenska/engelska via språkväxlare på mobil och desktop. Språkval sparas.
- Lokala ändringar, verifiering och commits är tillåtna. Ingen push eller
  publicering utan Robins uttryckliga godkännande.

## Genomfört lokalt

- [x] Ljus hemsideslayout, toppnavigation och responsiv presentation.
- [x] Fyra ursprungliga projekt plus Sales-OS, med gemensam detaljmall.
- [x] Nya raka skärmbilder av Quizmaster, Konnect och inbjudningssidan.
- [x] Befintlig rak skärmbild för Hittarecept. Sales-OS har märkt illustration.
- [x] Uppdaterad presentation och problemlösning på svenska och engelska.
- [x] Språkväxlare, sparat språkval, mobilmeny och reducerad rörelse.
- [x] Build och lint passerar.
- [x] Alla projekt på båda språken, fem skärmbredder, bilder och navigering testade.
- [x] Kontaktformulärets fel och lyckade svar testade med lokalt fångade anrop.

## Nästa steg

1. Robin granskar den lokala versionen och ger visuell återkoppling.
2. Eventuella sista justeringar inför publicering.
3. Push/deploy först efter uttryckligt godkännande.

## Innehåll

Projekt: src/data/projects.js. Personlig text: src/data/copy.js.
Tomma valfria fält och saknade länkar döljs. Sales-OS är Robins eget bygge;
den uppgiften ersätter tidigare teamattribution.

## Visuell förenkling

Porträttet är kvadratiskt med rundade hörn. Stjärna och flytande dekorativ
etikett är borttagna. Favicon är ett eget RV-monogram i sidans gröna färg.
Saklig information om AI-arbete och projekt behålls.

## Tillfälligt färgtest

Sand, terrakotta och vinrött testas med oförändrad layout och innehåll.
Den godkända gröna versionens App.css, favicon.svg och index.html finns exakt
sparade i .qa.local/green-palette-original/ för enkel återställning.
Originalbilderna i projekten och porträttet behåller sina naturliga färger.

## Senaste färgbeslut

Robin föredrar den varma, ljusa versionen men vill ta bort lila/vinrött.
Hela gränssnittet använder nu varmvit, beige, dämpad orange och varm brun text.
Det gäller även projektdetaljer, formulär, statusmarkörer och favicon.
Formulärfält har tydligare kantkontrast. Layout och innehåll behålls.

## UX-iteration efter checkpoint 09888d2

Antagen målgrupp: möjliga arbetsgivare och samarbetspartners. Huvudmål: förstå
Robins bidrag genom projekten. Primär handling: läsa ett projekt. Flöde:
presentation → projekt → problem/lösning/roll → kontakt.

Behåll den godkända orange/beige paletten. Ta bort onödiga projektfilter
(fem projekt), räknare, dubbla pilikoner och dekorativ kompetensrad.
Tydliga textlänkar till projekt, läsbarare text och större klickytor.
Projektsidans arkitektur blir en lugn läsordning istället för fler kort.

Hypotes: mindre visuellt brus gör det enklare att välja ett projekt.
Testförslag: be tre relevanta personer hitta ett projekt och förklara Robins
roll utan hjälp; notera tvekan, uppgiftsframgång och förståelse. Inte uppmätt än.

## Bilder, Sales-OS och rörelse — 2026-10-02

Behåll designen från 6b11802. Lägg till färska raka skärmbilder från de tre
publika demosidorna, klickbara gallerier med bildvisare och diskret rörelse.
Sales-OS är ett eget CRM + Business OS: Next.js 15, TypeScript, Prisma, Postgres,
fem agenter, mänskliga mejlgodkännanden, regelbaserad autonomi och analys.
Uppgifterna kommer från Robin. Inga verifierade effektmått hävdas.

## Demodata i Sales-OS — 2026-10-03

Robin vill ersätta verkliga uppgifter i samtliga Sales-OS-bilder med fiktiv
demodata och numrera agenterna Agent 1–5. Bild 7/7 tolkas som inloggningen
sist i portfolions galleri och tas bort. Sex bildredigeringar ersätter
originalen; företag, personer, kontaktuppgifter, datum, belopp och loggar
är påhittade. Gränssnittets generella etiketter behålls. Bildtexter på båda
språken markerar demodata. Originalen ska inte finnas i public eller dist.
Originalfilerna i Downloads ändras inte.

Behåll designen från 6b11802. Ingen push eller deploy utan Robins godkännande.

## Korrigering efter push a2173c6 — 2026-10-20

Robin avvisar ombyggnaden i a2173c6. Återställ exakt den tidigare pushens
design och implementation från 01ff875. Behåll endast de fyra tillagda
projekten och deras bilder i den befintliga projektmallen.

Ny ordning börjar med QuestForge, Salon, AI Product Studio och ProjectFlow,
följt av de fem ursprungliga projekten i deras tidigare ordning.
Visa sex kort initialt. ”Se fler projekt” visar resterande tre;
”Visa färre projekt” återgår till sex. Samma funktion finns på engelska.
Ingen annan design-, text- eller teknikändring ingår.

De nya projektens fakta och bildursprung dokumenteras i docs/PROJECT-SOURCES.md.
Robin har godkänt push av det färdiga arbetet; korrigeringen görs som en ny
commit utan att skriva om tidigare Git-historik.

## Projekturval, scrollning och logotyp — 2026-10-20

Robin vill ta bort Salon och ProjectFlow samt placera Sales-OS först.
De sju återstående projekten använder fortsatt befintliga projektmallar.
Sex visas initialt. Visa fler/färre ska kombinera mjuk höjdändring och
scrollning, med stabil knapposition vid stängning och utan animation för
besökare som föredrar reducerad rörelse.
Namnlogotypen får ett RV-monogram och Robin Vikström som tydlig avsändare.
Övrig layout och innehåll behålls.

## Fördjupningsområden — 2026-10-20

Byt det andra området till Affärsutveckling / Business development.
Behåll de övriga tre områdena och visa alla som en vanlig punktlista
utan numrering eller inbördes prioritering.
Avsluta med ”Lär genom att bygga och arbeta med i vardagen” samt
motsvarande engelska text.
