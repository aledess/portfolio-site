import type { ExperienceData } from "@schemas/experience";

export const mockExperienceIT: ExperienceData = {
  sectionTitle: ["Esperienza lavorativa", "Percorso", "Aziende"],
  items: [
    {
      date: "2022 - Presente",
      company: "Tech Solutions",
      description:
        "Sviluppatore Frontend – React, Next.js, UI component-driven...",
    },
    {
      date: "2020 - 2022",
      company: "Innovatech",
      description: "Junior Developer – Angular/Ionic, supporto al team UX...",
    },
    {
      date: "2018 - 2020",
      company: "DevStart",
      description: "Stage e primo impiego – HTML/CSS, JS Vanilla, WordPress...",
    },
  ],
};

export const mockExperienceEN: ExperienceData = {
  sectionTitle: ["Work Experience", "Career Path", "Companies"],
  items: [
    {
      date: "2022 - Present",
      company: "Tech Solutions",
      description:
        "Frontend Developer – React, Next.js, UI component-driven...",
    },
    {
      date: "2020 - 2022",
      company: "Innovatech",
      description: "Junior Developer – Angular/Ionic, UX team support...",
    },
    {
      date: "2018 - 2020",
      company: "DevStart",
      description:
        "Internship and first job – HTML/CSS, Vanilla JS, WordPress...",
    },
  ],
};
