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

## Ny ombyggnad från grunden — 2026-10-06

Robin har nu bett om en helt ny portfolio med samma projekt och information
som i det befintliga repot, en ny visuell identitet och mycket animation.
Den här riktningen ersätter tidigare krav på att behålla den gamla designen.
Innehållet och dess sakliga begränsningar gäller fortfarande.

- GitHub-repot har hämtats. Lokal HEAD och `origin/main` var identiska på
  `01ff875008d74e90784bd386b93765c85722dd7b` före ombyggnaden.
- Projekt, personliga texter, kontaktinställningar, länkar och bildreferenser
  är bevarade i `docs/content-snapshot-2026-10-06.json`.
  `docs/CONTENT-ARCHIVE.md` beskriver innehållet och det fullständiga lokala
  originalarkivet `.qa.local/portfolio-before-rebuild-2026-10-06.zip`.
- Behåll de fem projekten, korrekta statusar och all projektinformation.
  Sales-OS är Robins eget pågående bygge. De andra fyra är färdiga projekt.
- Behåll svenska och engelska, sparat språkval, CV-länkar, kontaktvägar
  och alla sex Sales-OS-bilder med tydligt markerad fiktiv demodata.
- Föreslagen visuell riktning: varmvit, svart och orange, stor typografi,
  en personlig redaktionell layout och uttrycksfull rörelse. Det är ett
  förslag att granska i den lokala implementationen, inte ett tidigare
  godkänt färgbeslut.
- Den tekniska inriktningen är fortsatt React/Vite. Innehållet och
  kontaktformuläret behöver ingen egen server i nuläget; Next.js är en
  möjlighet Robin nämnt, inte ett krav. Formspree kan behållas.
- Animationer ska fungera på mobil och respektera reducerad rörelse.
  Projekten och deras innehåll ska förbli enkla att läsa och använda.
- Lokala ändringar, verifiering och commits är tillåtna. Ingen push eller
  deploy utan Robins uttryckliga godkännande.

### Genomfört och verifierat — 2026-10-06

- Helt ny startsida, navigation, projektöversikt, om mig, kontakt, sidfot
  och projektdetaljer. Den gamla komponentkatalogen och oanvända publika
  bilder har tagits bort efter arkivering.
- Orange, ribbad WebGL-skulptur med pekarrespons, långsam rörelse, statisk
  fallback och sparad pausinställning. Rörelse stannar även utanför bild,
  i bakgrundsflikar och vid systemets inställning för reducerad rörelse.
- Sales-OS först i projektordningen; originaldata och befintliga länkar
  har kontrollerats mot det exakta innehållsarkivet.
- Lokalt levererade typsnitt, responsiva skärmbilder, nya bildgallerier
  och projektsidor med läsindex på större skärmar.
- `npm run lint` och `npm run build` passerar. Vite använder native
  configLoader för att undvika Windows-sandboxens katalogbegränsning.
- 24 Playwright-tester passerar i lokal Chrome. De täcker projekt på båda
  språken, språkets beständighet, mobilmeny, tangentbord, gallerier,
  omdirigering, 404, fem bredder (320–1440 px) och rörelseinställningar.
- Kontaktformulärets obligatoriska fält, serverfel, fältspecifika fel
  och lyckade svar är testade med fångade anrop. Inga mejl har skickats.
- Desktop- och mobilvyer har granskats med lokala skärmbilder i `.qa.local`.

Robin har bett att en localhost-server ska startas och sidan öppnas när
arbetet är färdigt. Nästa steg är visuell återkoppling på den lokala versionen.
Ingen push eller deploy har gjorts.

Den färdigbyggda versionen serveras med Vite preview på
`http://127.0.0.1:5173/`. Preview körs som en dold lokal process; PID sparas i
`.qa.local/preview.pid`. Den vägen undviker esbuilds katalogåtkomst vid
utvecklingsserverns beroendeoptimering i den begränsade Windows-miljön.
Startsidan har dessutom kontrollerats på båda språken i alla fem bredder,
och skulpturens fallback är verifierad utan WebGL.

Separat kvarstående punkt: audit rapporterade 18 brister i repots befintliga
beroenden. Kompatibla uppdateringar finns, men installationen stoppades av
automatisk godkännandekontroll (användningsgräns och timeout). Ingen sådan
uppdatering har genomförts. Fråga om fortsatt uppdatering är ställd till Robin.

## Fyra nya projekt — 2026-10-20

Robin vill lägga till AI Product Studio, Salon, ProjectFlow och QuestForge.
De läggs till i befintlig lokal design, efter det utvalda Sales-OS-caset
och före de äldre projekten. Totalt finns nio projekt.

Beskrivningar på svenska och engelska utgår från respektive lokalt repos
README och package.json. De nya projekten visas som pågående med konkreta
MVP-/prototypbegränsningar. Inga effektmått eller personliga lärdomar hittas på.
Skärmbilder återanvänds från projektens lokala exempel/demo-material;
QuestForges desktopbild är uttryckligen märkt som den första prototypen.

GitHub-remotes är identifierade, men reporna finns inte i kontots publika
GitHub-lista vid kontroll. GitHub- och demo-knappar lämnas därför dolda.
Källor och bildursprung finns i docs/PROJECT-SOURCES.md.
Robin har därefter uttryckligen godkänt att den färdiga versionen pushas
till GitHub. Det omfattar den aktuella lokala portfolion med de fyra nya
projekten. Ingen separat manuell deploy är beställd.

Build och lint passerar. 25 webbläsartester för projektsidor på båda språken,
projektkort, 404 och responsivitet passerar. De fyra nya detaljsidorna är
dessutom kontrollerade vid 320, 390 och 768 px, inklusive bildvisare och Escape.
Projektkorten på desktop och en ny projektsida på mobil är visuellt granskade.
