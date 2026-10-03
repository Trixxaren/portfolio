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
        src: "/screenshots/quizmaster-categories.png",
        sv: "Välj bland quizets kategorier",
        en: "Choose a quiz category",
      },
      {
        src: "/screenshots/quizmaster-question.png",
        sv: "En historiefråga med svarsalternativ och timer",
        en: "A history question with answers and a timer",
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
        src: "/screenshots/hittarecept-discover.png",
        sv: "Upptäck recept och sök efter maträtter",
        en: "Discover recipes and search for dishes",
      },
      {
        src: "/screenshots/hittarecept-recipe.png",
        sv: "Receptdetalj: Chicken Handi",
        en: "Recipe detail: Chicken Handi",
      },
      {
        src: "/screenshots/hittarecept-instructions.png",
        sv: "Ingredienser och tillagningssteg",
        en: "Ingredients and cooking instructions",
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
        src: "/screenshots/konnect-login.png",
        sv: "Logga in på Konnect",
        en: "Sign in to Konnect",
      },
      {
        src: "/screenshots/konnect-register.png",
        sv: "Skapa ett konto i Konnect",
        en: "Create a Konnect account",
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
    tags: ["Fullstack", "AI-workflows", "CRM + Business OS"],
    github: null,
    demo: null,
    screenshots: [
      {
            "src": "/screenshots/sales-os/demo-dashboard.png",
            "sv": "Översikt över pipeline och aktiviteter · Fiktiv demodata",
            "en": "Overview of pipeline and activities · Fictional demo data"
      },
      {
            "src": "/screenshots/sales-os/demo-pipeline.png",
            "sv": "Affärsmöjligheter och säljsteg · Fiktiv demodata",
            "en": "Opportunities and sales stages · Fictional demo data"
      },
      {
            "src": "/screenshots/sales-os/demo-companies.png",
            "sv": "Företagsregister med kontakter · Fiktiv demodata",
            "en": "Company directory with contacts · Fictional demo data"
      },
      {
            "src": "/screenshots/sales-os/demo-company-detail.png",
            "sv": "Kontakter och aktivitetshistorik · Fiktiv demodata",
            "en": "Contacts and activity history · Fictional demo data"
      },
      {
            "src": "/screenshots/sales-os/demo-opportunity-detail.png",
            "sv": "Kvalificering, research och nästa steg · Fiktiv demodata",
            "en": "Qualification, research, and next steps · Fictional demo data"
      },
      {
            "src": "/screenshots/sales-os/demo-tasks.png",
            "sv": "Uppgifter och uppföljningar · Fiktiv demodata",
            "en": "Tasks and follow-ups · Fictional demo data"
      }
],
    sv: {
      summary:
        "Från research till uppföljning. Ett gemensamt workflow för B2B-försäljning, med AI-agenter och mänskliga beslut.",
      problem:
        "Research, prospektering, mejl och uppföljningar innebär många manuella moment. Information och nästa steg behöver hänga ihop för att säljaren ska kunna fokusera på kunddialogen.",
      solution:
        "Jag har byggt Sales-OS som Solvigos interna CRM + Business OS. Fullstack-appen samlar leadmotor, AI-agenter, pipeline, uppgifter och analys i ett gemensamt arbetsflöde. Regelverket styr vad agenterna får göra själva. En människa måste alltid godkänna mejlen innan de skickas.",
      role: "Eget bygge: från behovsanalys, produktidé och arbetsflöden till UX, AI-assisterad implementation, testning och vidareutveckling. Jag använder min erfarenhet från försäljning för att definiera krav och testa verkliga scenarier.",
      technology: [
        "Next.js 15",
        "TypeScript",
        "Prisma",
        "Postgres",
        "AI-agenter och automatiserade arbetsflöden",
      ],
      capabilities: [
        [
          "CRM & pipeline",
          "Företag, kontakter och affärer samlas i en pipeline med åtta steg, från Ny till Vunnen eller Förlorad.",
        ],
        [
          "Dagens beslut",
          "Översikten lyfter det som behöver uppmärksamhet. Godkännandekön och uppgifterna gör nästa steg tydligt.",
        ],
        [
          "Business OS",
          "Partnerskap, LinkedIn-utkast och en offertkalkylator finns i samma system, med svenskt och engelskt gränssnitt.",
        ],
        [
          "Mål & analys",
          "Säljmål och prognos ger överblick. Signaler och svar sparas för att följa upp hur prospektering och outreach fungerar.",
        ],
      ],
      agents: [
        [
          "Agent 1 · prospektering",
          "Hittar bolag utifrån signaler som förvärv och systembyten, researchar och verifierar beslutsfattare. Ett regelverk, inte AI, avgör om fallet får godkännas automatiskt.",
        ],
        [
          "Agent 2 · outreach",
          "Skriver första mejlet och uppföljningarna. Utskicken väntar på en människas godkännande.",
        ],
        [
          "Agent 3 · svar & pipeline",
          "Klassificerar svar och flyttar affären till rätt steg, exempelvis Svarat, Möte eller Förlorad.",
        ],
        ["Agent 4 · partnerskap", "Sköter partnerspåret."],
        [
          "Agent 5 · LinkedIn",
          "Tar fram utkast till LinkedIn-inlägg för mänsklig granskning.",
        ],
      ],
      architecture: [
        [
          "Gränssnitt",
          "Next.js och TypeScript kopplar samman CRM-vyer, godkännanden, uppgifter och analys.",
        ],
        [
          "API & tjänster",
          "Backend hanterar affärslogik, behörigheter och arbetsflöden mellan agenter och människor.",
        ],
        [
          "Databas",
          "Prisma och Postgres håller ihop företag, affärer, aktiviteter och tillstånd genom hela flödet.",
        ],
        [
          "Agenter & styrning",
          "Varje agent har en egen roll och API-nyckel. Regelbaserade kontroller avgör när autonomi är tillåten och när en människa behöver ta över.",
        ],
      ],
      decisions: [
        [
          "Mänskligt godkännande",
          "Bara människor kan godkänna mejl. Agenternas förberedelser och användarens beslut är separata steg.",
        ],
        [
          "Säkra utskick",
          "Låsningar skyddar mot dubbelutskick och nya kontakter med personer som redan tackat nej. Dubbletter kontrolleras på organisationsnummer och domän.",
        ],
        [
          "Granskningsbar autonomi",
          "Agent 1 Autonomy V1 använder tydliga regler för automatiska godkännanden i prospekteringen. Besluten går att granska i efterhand.",
        ],
        [
          "Mät innan du optimerar",
          "Mejlvarianterna CONTROL, V2 och V3 används i experiment, med V3 som aktuell variant. Triggertyp, sökmetod och svarstyp sparas för analys.",
        ],
      ],
      learning: [
        "Ett säkert flöde per utskick räcker inte om samma mottagare finns i flera affärer.",
        "UX handlar också om att välja vilken komplexitet användaren ska behöva se.",
        "Strukturerade beslut och tydliga stoppvillkor är viktiga när AI ingår i ett arbetsflöde.",
      ],
      next: "Fortsatt utveckling av arbetsflöden och analys inom samma system. Den insamlade datan ska användas för att undersöka vilka signaler och budskap som ger svar.",
      analytics:
        "Översikt, säljmål, pipeline och prognoser hör till samma CRM. Experimentdata kopplar samman prospekteringens signaler med mejlvariant och svarstyp, så att det går att undersöka vad som händer från research till uppföljning.",
    },
    en: {
      summary:
        "From research to follow-up. One B2B sales workflow, with AI agents and human decisions.",
      problem:
        "Research, prospecting, emails, and follow-ups involve many manual steps. Information and next actions need to connect so the salesperson can focus on the customer conversation.",
      solution:
        "I built Sales-OS as Solvigo’s internal CRM + Business OS. The fullstack app brings a lead engine, AI agents, pipeline, tasks, and analytics into one workflow. Rules govern what agents may do independently. A person must always approve emails before they are sent.",
      role: "My own build: from needs analysis, product concept, and workflows to UX, AI-assisted implementation, testing, and iteration. I use my sales experience to define requirements and test real scenarios.",
      technology: [
        "Next.js 15",
        "TypeScript",
        "Prisma",
        "Postgres",
        "AI agents and automated workflows",
      ],
      capabilities: [
        [
          "CRM & pipeline",
          "Companies, contacts, and opportunities connect through an eight-stage pipeline, from New to Won or Lost.",
        ],
        [
          "Daily decisions",
          "The overview highlights what needs attention. The approval queue and tasks make the next action clear.",
        ],
        [
          "Business OS",
          "Partnerships, LinkedIn drafts, and a quote calculator share one system, with a Swedish and English interface.",
        ],
        [
          "Targets & analytics",
          "Sales targets and forecasts provide an overview. Signals and replies are recorded to track how prospecting and outreach work.",
        ],
      ],
      agents: [
        [
          "Agent 1 · prospecting",
          "Finds companies through signals such as acquisitions and system changes, researches them, and verifies decision-makers. Rules, not AI, determine whether a case can be approved automatically.",
        ],
        [
          "Agent 2 · outreach",
          "Drafts the first email and follow-ups. Messages wait for a person’s approval before sending.",
        ],
        [
          "Agent 3 · replies & pipeline",
          "Classifies replies and moves opportunities to the appropriate stage, such as Replied, Meeting, or Lost.",
        ],
        ["Agent 4 · partnerships", "Handles the partnership workflow."],
        ["Agent 5 · LinkedIn", "Prepares LinkedIn post drafts for human review."],
      ],
      architecture: [
        [
          "Interface",
          "Next.js and TypeScript connect CRM views, approvals, tasks, and analytics.",
        ],
        [
          "API & services",
          "The backend handles business logic, permissions, and workflows between agents and people.",
        ],
        [
          "Database",
          "Prisma and Postgres connect companies, opportunities, activities, and state throughout the workflow.",
        ],
        [
          "Agents & governance",
          "Each agent has its own role and API key. Rule-based checks determine when autonomy is allowed and when a person needs to take over.",
        ],
      ],
      decisions: [
        [
          "Human approval",
          "Only people can approve emails. Agent preparation and user decisions are separate steps.",
        ],
        [
          "Safe sending",
          "Locks guard against duplicate sends and further contact with people who have declined. Company registration numbers and domains are checked for duplicates.",
        ],
        [
          "Auditable autonomy",
          "Agent 1 Autonomy V1 uses explicit rules for automatic prospecting approvals. Decisions can be reviewed afterwards.",
        ],
        [
          "Measure before optimising",
          "Email variants CONTROL, V2, and V3 support experiments, with V3 the current variant. Trigger type, search method, and reply type are recorded for analysis.",
        ],
      ],
      learning: [
        "A safeguard per email is not enough when the same recipient appears across opportunities.",
        "UX includes deciding how much system complexity the user needs to see.",
        "Structured decisions and clear stopping conditions matter when AI is part of a workflow.",
      ],
      next: "Continued development of workflows and analytics within the same system. The collected data will be used to investigate which signals and messages lead to replies.",
      analytics:
        "Overview, sales targets, pipeline, and forecasts belong to the same CRM. Experiment data connects prospecting signals with email variants and reply types, making it possible to examine the journey from research to follow-up.",
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
