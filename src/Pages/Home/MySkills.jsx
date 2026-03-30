import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNpm,
  SiTypescript,
  SiNextdotjs,
  SiVite,
  SiJsonwebtokens,
} from "react-icons/si";

const FigmaIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 256 384"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M128 128a64 64 0 1 0 0-128H64a64 64 0 0 0 0 128z"
    />
    <path
      fill="currentColor"
      d="M128 128a64 64 0 1 1 0 128H64a64 64 0 0 1 0-128z"
    />
    <path fill="currentColor" d="M128 0h64a64 64 0 0 1 0 128h-64V0z" />
    <path
      fill="currentColor"
      d="M128 256a64 64 0 1 1 0 128 64 64 0 0 1 0-128z"
    />
    <path fill="currentColor" d="M128 128h64a64 64 0 0 1 0 128h-64v-128z" />
  </svg>
);

const MiroIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 300 300"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M60 30L30 160l50 25L60 30zm60 0l-30 130 50 25L120 30zm60 0l-30 130 50 25L180 30z"
    />
  </svg>
);

const content = {
  sv: {
    kicker: "Kompetens",
    title: "Mina kunskaper",
    description: "Tekniker och arbetssätt som jag använder i mina projekt.",
    groups: [
      {
        title: "Frontend",
        items: [
          { name: "HTML", icon: <FaHtml5 /> },
          { name: "CSS", icon: <FaCss3Alt /> },
          { name: "JavaScript", icon: <FaJsSquare /> },
          { name: "TypeScript", icon: <SiTypescript /> },
          { name: "React", icon: <FaReact /> },
          { name: "Next.js", icon: <SiNextdotjs /> },
          { name: "Vite", icon: <SiVite /> },
          { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        ],
      },
      {
        title: "Backend & API",
        items: [
          { name: "Node.js", icon: <FaNodeJs /> },
          { name: "npm", icon: <SiNpm /> },
          { name: "REST API", icon: <FaJsSquare /> },
          { name: "JSON", icon: <FaJsSquare /> },
          { name: "JWT", icon: <SiJsonwebtokens /> },
          { name: "API-integration", icon: <FaReact /> },
        ],
      },
      {
        title: "Övrigt",
        items: [
          { name: "Git", icon: <FaGitAlt /> },
          { name: "GitHub", icon: <FaGithub /> },
          { name: "Figma", icon: <FigmaIcon /> },
          { name: "Miro", icon: <MiroIcon /> },
          { name: "Responsiv design", icon: <FaCss3Alt /> },
          { name: "Semantisk HTML", icon: <FaHtml5 /> },
        ],
      },
    ],
  },
  en: {
    kicker: "Expertise",
    title: "My skills",
    description: "Technologies and ways of working that I use in my projects.",
    groups: [
      {
        title: "Frontend",
        items: [
          { name: "HTML", icon: <FaHtml5 /> },
          { name: "CSS", icon: <FaCss3Alt /> },
          { name: "JavaScript", icon: <FaJsSquare /> },
          { name: "TypeScript", icon: <SiTypescript /> },
          { name: "React", icon: <FaReact /> },
          { name: "Next.js", icon: <SiNextdotjs /> },
          { name: "Vite", icon: <SiVite /> },
          { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        ],
      },
      {
        title: "Backend & API",
        items: [
          { name: "Node.js", icon: <FaNodeJs /> },
          { name: "npm", icon: <SiNpm /> },
          { name: "REST API", icon: <FaJsSquare /> },
          { name: "JSON", icon: <FaJsSquare /> },
          { name: "JWT", icon: <SiJsonwebtokens /> },
          { name: "API integration", icon: <FaReact /> },
        ],
      },
      {
        title: "Other",
        items: [
          { name: "Git", icon: <FaGitAlt /> },
          { name: "GitHub", icon: <FaGithub /> },
          { name: "Figma", icon: <FigmaIcon /> },
          { name: "Miro", icon: <MiroIcon /> },
          { name: "Responsive design", icon: <FaCss3Alt /> },
          { name: "Semantic HTML", icon: <FaHtml5 /> },
        ],
      },
    ],
  },
};

const MySkills = ({ language }) => {
  const t = content[language];

  return (
    <section className="skills-section" id="skills">
      <div className="container skills__inner">
        <div className="section-heading">
          <p className="section-kicker">{t.kicker}</p>
          <h2>{t.title}</h2>
          <p className="section-description">{t.description}</p>
        </div>

        <div className="skills-groups">
          {t.groups.map((group) => (
            <div className="skills-group-card" key={group.title}>
              <h3 className="skills-group-title">{group.title}</h3>

              <div className="skills-chip-list">
                {group.items.map((skill) => (
                  <div className="skill-chip" key={skill.name}>
                    <span className="skill-chip__icon">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
