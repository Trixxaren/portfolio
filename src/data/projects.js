// Add projects here; keep unconfirmed details and links empty.
export const projects = [
  {
    slug: "quizmaster",
    title: "Quizmaster",
    status: "completed",
    kind: "project",
    cover: "quizmaster",
    tags: ["JavaScript", "HTML", "CSS"],
    github: null,
    demo: "https://quizmastertrixx.netlify.app/",
    screenshots: [
      {
        src: "/quizmaster-screen.png",
        sv: "Quizmaster — startsida",
        en: "Quizmaster — home screen",
      },
    ],
    sv: {
      summary:
        "Ett interaktivt quiz med flera kategorier, byggt i JavaScript, HTML och CSS.",
      problem:
        "Ett quiz behöver vara enkelt att förstå och fungera på både mobil och desktop.",
      solution:
        "En responsiv single-page-app med fokus på interaktion och användarupplevelse.",
      role: "Utveckling av gränssnitt och quizlogik i ett eget projekt.",
      technology: ["JavaScript", "HTML", "CSS"],
      architecture: [],
      decisions: [],
      learning: [],
      next: "",
    },
    en: {
      summary:
        "An interactive quiz with multiple categories, built in JavaScript, HTML, and CSS.",
      problem:
        "A quiz needs to be easy to understand and work on mobile and desktop.",
      solution:
        "A responsive single-page app focused on interaction and user experience.",
      role: "Interface and quiz logic development in a personal project.",
      technology: ["JavaScript", "HTML", "CSS"],
      architecture: [],
      decisions: [],
      learning: [],
      next: "",
    },
  },
  {
    slug: "hittarecept",
    title: "Hittarecept",
    status: "completed",
    kind: "project",
    cover: "recipes",
    tags: ["React", "MealDB API", "UI / UX"],
    github: null,
    demo: "https://hittarecept.netlify.app/",
    screenshots: [
      {
        src: "/hittarecept.png",
        sv: "Rekommenderade recept i Hittarecept",
        en: "Recommended recipes in Hittarecept",
      },
    ],
    sv: {
      summary:
        "En receptapp där ett externt API blir till ett enkelt gränssnitt för att upptäcka nya maträtter.",
      problem:
        "Att hitta inspiration till maten ska vara enkelt, även när innehållet kommer från en stor extern datakälla.",
      solution:
        "En responsiv receptapp med React, React Router och MealDB API, med fokus på datahantering och användarupplevelse.",
      role: "Frontendutveckling, API-integration och UI/UX i ett eget projekt.",
      technology: ["React", "Tailwind CSS", "React Router", "MealDB API"],
      architecture: [
        ["Datakälla", "Recept hämtas från MealDB API."],
        ["Frontend", "React hanterar data och visning."],
        ["Navigation", "React Router kopplar samman appens vyer."],
      ],
      decisions: [],
      learning: [],
      next: "",
    },
    en: {
      summary:
        "A recipe app that turns an external API into a simple interface for discovering new dishes.",
      problem:
        "Finding meal inspiration should be simple, even when the content comes from a large external data source.",
      solution:
        "A responsive recipe app using React, React Router, and MealDB API, with a focus on data handling and user experience.",
      role: "Frontend development, API integration, and UI/UX in a personal project.",
      technology: ["React", "Tailwind CSS", "React Router", "MealDB API"],
      architecture: [
        ["Data source", "Recipes are fetched from MealDB API."],
        ["Frontend", "React manages data and rendering."],
        ["Navigation", "React Router connects the app’s views."],
      ],
      decisions: [],
      learning: [],
      next: "",
    },
  },
  {
    slug: "konnect",
    title: "Konnect ChatApp",
    status: "completed",
    kind: "project",
    cover: "konnect",
    tags: ["React", "API", "Frontend"],
    github: null,
    demo: "https://konnectchat.netlify.app/",
    screenshots: [
      {
        src: "/konnect-screen.png",
        sv: "Konnect ChatApp — startsida",
        en: "Konnect ChatApp — home screen",
      },
    ],
    sv: {
      summary:
        "En responsiv chattapplikation med inloggning, sessionshantering och API-baserad kommunikation.",
      problem:
        "En chattupplevelse behöver hålla ihop användare, sessioner och meddelanden i ett tydligt gränssnitt.",
      solution:
        "En frontend byggd med React och Vite, med API-anrop, CRUD-funktionalitet och skyddade vyer.",
      role: "Frontendutveckling och gränssnitt i ett eget projekt.",
      technology: [
        "React",
        "Vite",
        "Tailwind CSS",
        "API / CRUD",
        "Autentisering och sessionshantering",
      ],
      architecture: [
        ["Gränssnitt", "Responsiva React-vyer."],
        ["Session", "Inloggning och skyddade routes."],
        ["Kommunikation", "API-anrop och CRUD-operationer."],
      ],
      decisions: [],
      learning: [],
      next: "",
    },
    en: {
      summary:
        "A responsive chat application with authentication, session management, and API-based communication.",
      problem:
        "A chat experience needs to connect users, sessions, and messages in a clear interface.",
      solution:
        "A React and Vite frontend with API requests, CRUD functionality, and protected views.",
      role: "Frontend development and interface design in a personal project.",
      technology: [
        "React",
        "Vite",
        "Tailwind CSS",
        "API / CRUD",
        "Authentication and session management",
      ],
      architecture: [
        ["Interface", "Responsive React views."],
        ["Session", "Authentication and protected routes."],
        ["Communication", "API requests and CRUD operations."],
      ],
      decisions: [],
      learning: [],
      next: "",
    },
  },
  {
    slug: "invitation",
    title: "Namngivelse inbjudan",
    status: "completed",
    kind: "project",
    cover: "invitation",
    tags: ["React", "Vite", "Tailwind CSS"],
    github: null,
    demo: "https://oliverhoffmann.netlify.app/",
    screenshots: [
      {
        src: "/invitation-screen.png",
        sv: "Namngivelse inbjudan — startsida",
        en: "Namngivelse inbjudan — home screen",
      },
    ],
    sv: {
      summary:
        "En personlig, digital inbjudan med ett enkelt flöde för att svara.",
      problem:
        "Samla information om en namngivelse och göra det enkelt för gästerna att svara.",
      solution:
        "En responsiv inbjudningssida byggd med React och ett svarsformulär kopplat till Formspree.",
      role: "Utveckling och utformning av en personlig inbjudningssida.",
      technology: ["React", "Vite", "Tailwind CSS", "Formspree"],
      architecture: [],
      decisions: [],
      learning: [],
      next: "",
    },
    en: {
      summary: "A personal digital invitation with a simple way to RSVP.",
      problem:
        "Bring naming ceremony information together and make it easy for guests to respond.",
      solution:
        "A responsive React invitation page with an RSVP form connected to Formspree.",
      role: "Development and design of a personal invitation page.",
      technology: ["React", "Vite", "Tailwind CSS", "Formspree"],
      architecture: [],
      decisions: [],
      learning: [],
      next: "",
    },
  },
  {
    slug: "sales-os",
    title: "Sales-OS",
    status: "ongoing",
    kind: "case",
    cover: "sales",
    tags: ["Fullstack", "AI-workflows", "CRM"],
    github: null,
    demo: null,
    screenshots: [],
    sv: {
      summary:
        "Från research till uppföljning. Ett gemensamt workflow för B2B-försäljning, med AI-agenter och mänskliga beslut.",
      problem:
        "Research, prospektering, mejl och uppföljningar innebär många manuella moment. Information och nästa steg behöver hänga ihop för att säljaren ska kunna fokusera på kunddialogen.",
      solution:
        "Jag har byggt Sales-OS som en fullstack-app: ett CRM med databas, leadmotor och automatiserade arbetsflöden. Research, outreach, godkännanden, uppföljning och analys samlas i samma system. AI-agenter förbereder arbetet, medan jag fattar besluten.",
      role: "Eget bygge: från behovsanalys, produktidé och arbetsflöden till UX, AI-assisterad implementation, testning och vidareutveckling. Jag använder min erfarenhet från försäljning för att definiera krav och testa verkliga scenarier.",
      technology: [
        "AI-agenter och strukturerade svar",
        "Databas och tillståndshantering",
        "Bakgrundsschemaläggning",
        "Gmail-trådar och server-side attribution",
        "AI-assisterad utveckling",
      ],
      architecture: [
        [
          "Gränssnitt, backend & databas",
          "CRM-vyerna samlar leads, pipeline och uppgifter. Backend hanterar arbetsflöden, och databasen håller ihop information och status.",
        ],
        ["Uffe", "Identifierar och kvalificerar företag."],
        [
          "Bosse",
          "Researchar företag, tolkar svar och hittar relevant kontext.",
        ],
        ["Karin", "Förbereder första mejlet, uppföljningar och återkontakt."],
        [
          "Mänsklig kontroll",
          "Godkänner utskick, hanterar osäkra lägen och driver dialogen vidare.",
        ],
      ],
      decisions: [
        [
          "Människans arbetskö",
          "Agenternas interna uppgifter hålls separata från det användaren behöver agera på.",
        ],
        [
          "Säkra utskick",
          "Ett atomärt claim-flöde förhindrar att två processer skickar samma godkända mejl. Osäkra utskick går till manuell granskning.",
        ],
        [
          "Skydd per mottagare",
          "Normaliserad e-postadress används för att stoppa dubbla första kontakter och nya utskick till personer som tackat nej.",
        ],
        [
          "Mät innan du optimerar",
          "Ett CONTROL/V2-experiment jämför outreach-strategier. Svar, positiva svar, avböjanden och möten följs upp innan fler slutsatser dras.",
        ],
      ],
      learning: [
        "Ett säkert flöde per utskick räcker inte om samma mottagare finns i flera affärer.",
        "UX handlar också om att välja vilken komplexitet användaren ska behöva se.",
        "Strukturerade beslut och tydliga stoppvillkor är viktiga när AI ingår i ett arbetsflöde.",
      ],
      next: "Pågående vidareutveckling: djupare analys av budskap och branscher. CSV/JSON-import, fler filter och AI-baserade frågor till försäljningsdata är idéer för analysdelen i Sales-OS, inte ett separat projekt eller färdiga funktioner.",
      analytics:
        "Översikt, pipeline, säljmål och prognoser hör till samma CRM. Outreach följs upp genom svar, positiva svar, avböjanden och möten. Analysen ska hjälpa till att förstå vad som händer mellan research och uppföljning.",
    },
    en: {
      summary:
        "From research to follow-up. One B2B sales workflow, with AI agents and human decisions.",
      problem:
        "Research, prospecting, emails, and follow-ups involve many manual steps. Information and next actions need to connect so the salesperson can focus on the customer conversation.",
      solution:
        "I built Sales-OS as a fullstack application: a CRM with a database, lead engine, and automated workflows. Research, outreach, approvals, follow-ups, and analysis live in one system. AI agents prepare the work while I make the decisions.",
      role: "My own build: from needs analysis, product concept, and workflows to UX, AI-assisted implementation, testing, and iteration. I use my sales experience to define requirements and test real scenarios.",
      technology: [
        "AI agents and structured outputs",
        "Database and state management",
        "Background scheduling",
        "Gmail threads and server-side attribution",
        "AI-assisted development",
      ],
      architecture: [
        [
          "Interface, backend & database",
          "CRM views bring together leads, pipeline, and tasks. The backend handles workflows, while the database connects information and state.",
        ],
        ["Uffe", "Finds and qualifies companies."],
        [
          "Bosse",
          "Researches companies, interprets replies, and gathers context.",
        ],
        ["Karin", "Drafts first contacts, follow-ups, and re-engagement."],
        [
          "Human control",
          "Approves messages, handles uncertainty, and takes conversations forward.",
        ],
      ],
      decisions: [
        [
          "A work queue for people",
          "Internal agent tasks stay separate from what the user needs to act on.",
        ],
        [
          "Safe sending",
          "An atomic claim flow prevents two processes from sending the same approved email. Uncertain sends go to human review.",
        ],
        [
          "Recipient-level protection",
          "Normalised email addresses help prevent duplicate first contacts and further outreach to people who declined.",
        ],
        [
          "Measure before optimising",
          "A CONTROL/V2 experiment compares outreach strategies. Replies, positive responses, declines, and meetings inform further decisions.",
        ],
      ],
      learning: [
        "A safeguard per email is not enough when the same recipient appears across opportunities.",
        "UX includes deciding how much system complexity the user needs to see.",
        "Structured decisions and clear stopping conditions matter when AI is part of a workflow.",
      ],
      next: "Ongoing development: deeper analysis of messaging and industries. CSV/JSON import, additional filters, and AI-powered questions about sales data are ideas for the Sales-OS analytics module, not a separate project or finished features.",
      analytics:
        "Overview, pipeline, sales targets, and forecasts belong to the same CRM. Outreach is tracked through replies, positive responses, declines, and meetings.",
    },
  },
];
export const statusLabels = {
  sv: { all: "Alla", ongoing: "Pågående", completed: "Färdiga" },
  en: { all: "All", ongoing: "In progress", completed: "Completed" },
};
export const projectStatus = {
  sv: { ongoing: "Pågående", completed: "Färdigt projekt", concept: "Koncept" },
  en: { ongoing: "In progress", completed: "Completed", concept: "Concept" },
};
