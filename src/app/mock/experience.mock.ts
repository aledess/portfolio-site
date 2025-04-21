import type { ExperienceData } from "../types/experience";

export const mockExperience: ExperienceData = {
  sectionTitle: [
    "Work Experience",
    "Career Journey",
    "Companies I've Worked With",
    "Experience",
  ],
  items: [
    {
      date: "2022 - Present",
      company: "Tech Solutions",
      description:
        "Frontend Developer – React, Next.js, e sviluppo UI component-driven. Collaborazione con team di prodotto per la definizione e l'implementazione di componenti riutilizzabili, con attenzione a performance, accessibilità e responsive design. Responsabile della documentazione interna e code review.",
    },
    {
      date: "2020 - 2022",
      company: "Innovatech",
      description:
        "Junior Developer – Progetti Angular/Ionic, supporto al team UX. Partecipazione attiva a design sprint, implementazione di schermate complesse, interazione con API REST e lavoro in team Agile con metodologia Scrum. Contribuito al miglioramento della design system aziendale.",
    },
    {
      date: "2018 - 2020",
      company: "DevStart",
      description:
        "Stage e primo impiego in HTML/CSS, JS Vanilla, Sass, Git. Creazione di pagine marketing responsive, interfacce dinamiche e supporto all'integrazione con CMS WordPress. Apprendimento continuo su GitFlow e principi base di architettura frontend.",
    },
  ],
};
