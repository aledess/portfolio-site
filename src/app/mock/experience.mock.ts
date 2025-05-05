import type { ExperienceData } from "@schemas/experience";

export const mockExperienceIT: ExperienceData = {
  sectionTitle: ["Esperienze", "Curriculum", "Percorso professionale"],
  items: [
    {
      date: "Gennaio 2020 - presente",
      company: "Stackhouse",
      description:
        "Percorso iniziato con un tirocinio e proseguito fino a un ruolo autonomo nello sviluppo di web e mobile app. Focus sull’ecosistema React (inclusi Next.js, Redux e Styled Components), con basi in JavaScript e TypeScript e utilizzo anche di altri framework come Angular.",
    },
    {
      date: "Luglio 2019 - Settembre 2019",
      company: "Flosslab",
      description:
        "Breve tirocinio formativo come sviluppatore web, con focus sullo sviluppo frontend (Angular, TypeScript) e mobile (Ionic, Cordova).",
    },
    {
      date: "Giugno 2017 - Giugno 2018",
      company: "Cagliari Calcio",
      description:
        "Collaborazione con Cagliari Calcio per lo sviluppo di una web app dedicata alla gestione dei tesserati della scuola calcio. Attività di supporto alla segreteria sportiva anche attraverso contenuti digitali.",
    },
  ],
};

export const mockExperienceEN: ExperienceData = {
  sectionTitle: ["'Experience", "Resume", "Career Path"],
  items: [
    {
      date: "January 2020 - today",
      company: "Stackhouse",
      description:
        "Started as an intern and transitioned into an autonomous role developing web and mobile applications. Focus on the React ecosystem (including Next.js, Redux, and Styled Components), with background in JavaScript and TypeScript and experience with other frameworks such as Angular.",
    },
    {
      date: "July 2019 - September 2019",
      company: "Flosslab",
      description:
        "Short internship as a web developer, focused on frontend development (Angular, TypeScript) and mobile technologies (Ionic, Cordova).",
    },
    {
      date: "June 2017 – June 2018",
      company: "Cagliari Calcio",
      description:
        "Collaboration with Cagliari Calcio to develop a web app for managing youth academy members. Provided digital content and support for the club’s administrative needs.",
    },
  ],
};
