import type { WorksData } from "@schemas/works";

export const mockWorksIT: WorksData = {
  sectionTitle: ["Progetti", "Lavori", "Applicazioni a cui ho lavorato"],

  items: [
    {
      title: "CA Auto Bank",
      description:
        "Lavoro in un team che si occupa dello sviluppo e della manutenzione del portale clienti di CA Auto Bank, in produzione su più mercati, sia in versione desktop che mobile (iOS e Android), inclusa l’area backoffice.",
      tech: ["React", "Javascript", "Redux", "HTML", "CSS", "Antd", "Cordova"],
      images: [
        { asset: { url: "/images/works/work1a.png" }, alt: "Screen Work 1" },
        { asset: { url: "/images/works/work1b.png" }, alt: "Screen Work 1" },
      ],
    },
    {
      title: "SIAE",
      description:
        "Ho partecipato allo sviluppo del nuovo sito istituzionale di SIAE, con attenzione al design, all’esperienza utente e alla gestione dei contenuti tramite CMS (Strapi).",
      tech: [
        "React",
        "Javascript",
        "NextJS",
        "Redux",
        "MaterialUI",
        "CSS",
        "HTML",
        "Strapi",
      ],
      images: [
        { asset: { url: "/images/works/work2a.png" }, alt: "Screen Work 2" },
        { asset: { url: "/images/works/work2b.png" }, alt: "Screen Work 2" },
      ],
    },
    {
      title: "App SIAE+",
      description:
        "Restyle completo dell’app SIAE+ per iOS e Android, realizzato in team con focus sull’interfaccia e la fruibilità da mobile.",
      tech: [
        "Angular",
        "Ionic",
        "Typescript",
        "HTML",
        "CSS",
        "Capacitor",
        "Chart.js",
      ],
      images: [
        { asset: { url: "/images/works/work3a.png" }, alt: "Screen Work 3" },
        { asset: { url: "/images/works/work3b.png" }, alt: "Screen Work 3" },
      ],
    },
    {
      title: "Sito Portfolio",
      description:
        "Sito portfolio personale progettato e sviluppato per presentare competenze, esperienze e progetti in ambito frontend. Supporto a tema chiaro/scuro, localizzazione e contenuti dinamici.",
      tech: [
        "React",
        "NextJS",
        "Sanity",
        "Framer Motion",
        "Typescript",
        "SASS",
        "BEM",
      ],
      images: [
        { asset: { url: "/images/works/work4a.png" }, alt: "Screen Work 4" },
        { asset: { url: "/images/works/work4b.png" }, alt: "Screen Work 4" },
      ],
    },
    {
      title: "Hoolux",
      description:
        "Sito vetrina progettato e sviluppato per Hoolux, piattaforma dedicata al crowdfunding.",
      tech: ["HTML", "CSS", "Bootstrap", "PHP"],
      images: [
        { asset: { url: "/images/works/work5a.png" }, alt: "Screen Work 5" },
        { asset: { url: "/images/works/work5b.png" }, alt: "Screen Work 5" },
      ],
    },
    {
      title: "Gestionale scuola calcio",
      description:
        "Sviluppo di un gestionale ad uso personale per supportare le attività di segreteria di una scuola calcio, con funzionalità dedicate all’organizzazione e al monitoraggio di attività e tesserati.",
      tech: ["HTML", "CSS", "PHP", "Mysql"],
      images: [
        { asset: { url: "/images/works/work6a.png" }, alt: "Screen Work 6" },
        { asset: { url: "/images/works/work6b.png" }, alt: "Screen Work 6" },
      ],
    },
  ],
  _id: "mock-works-it",
  _translations: [],
};

export const mockWorksEN: WorksData = {
  sectionTitle: ["Projects", "My Work", "Built Applications"],

  items: [
    {
      title: "CA Auto Bank",
      description:
        "Part of a team responsible for the development and maintenance of CA Auto Bank’s customer portal, live across multiple markets, covering desktop and mobile platforms (iOS and Android), including backoffice features.",
      tech: ["React", "Javascript", "Redux", "HTML", "CSS", "Antd", "Cordova"],
      images: [
        { asset: { url: "/images/works/work1a.png" }, alt: "Screen Work 1" },
        { asset: { url: "/images/works/work1b.png" }, alt: "Screen Work 1" },
      ],
    },
    {
      title: "SIAE",
      description:
        "Took part in the development of SIAE’s new institutional website, focusing on design, user experience, and content management via CMS (Strapi).",
      tech: [
        "React",
        "Javascript",
        "NextJS",
        "Redux",
        "MaterialUI",
        "CSS",
        "HTML",
        "Strapi",
      ],
      images: [
        { asset: { url: "/images/works/work2a.png" }, alt: "Screen Work 2" },
        { asset: { url: "/images/works/work2b.png" }, alt: "Screen Work 2" },
      ],
    },
    {
      title: "App SIAE+",
      description:
        "Complete redesign of the SIAE+ app for iOS and Android, developed in team with a focus on UI and mobile usability.",
      tech: [
        "Angular",
        "Ionic",
        "Typescript",
        "HTML",
        "CSS",
        "Capacitor",
        "Chart.js",
      ],
      images: [
        { asset: { url: "/images/works/work3a.png" }, alt: "Screen Work 3" },
        { asset: { url: "/images/works/work3b.png" }, alt: "Screen Work 3" },
      ],
    },
    {
      title: "Portfolio Site",
      description:
        "Personal portfolio website designed and developed to showcase frontend skills, experience, and projects — featuring dark/light themes, localization, and dynamic content.",
      tech: [
        "React",
        "NextJS",
        "Sanity",
        "Framer Motion",
        "Typescript",
        "SASS",
        "BEM",
      ],
      images: [
        { asset: { url: "/images/works/work4a.png" }, alt: "Screen Work 4" },
        { asset: { url: "/images/works/work4b.png" }, alt: "Screen Work 4" },
      ],
    },
    {
      title: "Hoolux",
      description:
        "Showcase website designed and built for Hoolux, a crowdfunding platform.",
      tech: ["HTML", "CSS", "Bootstrap", "PHP"],
      images: [
        { asset: { url: "/images/works/work5a.png" }, alt: "Screen Work 5" },
        { asset: { url: "/images/works/work5b.png" }, alt: "Screen Work 5" },
      ],
    },
    {
      title: "Football academy management tool",
      description:
        "Personal management tool to support the administration activities of a football academy, with features for organizing and tracking activities and members.",
      tech: ["HTML", "CSS", "PHP", "Mysql"],
      images: [
        { asset: { url: "/images/works/work6a.png" }, alt: "Screen Work 6" },
        { asset: { url: "/images/works/work6b.png" }, alt: "Screen Work 6" },
        { asset: { url: "/images/works/work6c.png" }, alt: "Screen Work 6" },
      ],
    },
  ],
  _id: "mock-works-en",
  _translations: [],
};
