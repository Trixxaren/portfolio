# Portfolio — arbetsplan

## Senaste riktningen (2026-10-01)

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
