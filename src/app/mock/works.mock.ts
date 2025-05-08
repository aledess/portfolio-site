import type { WorksData } from "@schemas/works";

export const mockWorksIT: WorksData = {
  sectionTitle: ["Progetti", "Lavori", "Applicazioni a cui ho lavorato"],

  items: [
    {
      title: "Portale clienti e area backoffice",
      description:
        "Sviluppo e manutenzione di un'applicazione web e mobile multipiattaforma per la gestione dei servizi bancari e finanziari in ambito automotive, con accesso clienti e interfaccia di backoffice. Progetto distribuito in più mercati europei.",
      tech: ["React", "Javascript", "Redux", "HTML", "CSS", "Antd", "Cordova"],
      images: [
        { asset: { url: "/images/works/work1a.png" }, alt: "Screen Work 1" },
        { asset: { url: "/images/works/work1b.png" }, alt: "Screen Work 1" },
      ],
    },
    {
      title: "Interfaccia e CMS per ente pubblico",
      description:
        "Ho partecipato allo sviluppo del sito istituzionale di un ente pubblico, con particolare attenzione al design responsivo, all’esperienza utente e alla gestione dei contenuti tramite CMS headless (Strapi). Il progetto ha richiesto la collaborazione con team di designer e redattori per garantire accessibilità e coerenza comunicativa.",
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
      title: "Restyle app mobile",
      description:
        "Restyling completo di un’app multipiattaforma (iOS e Android) per un ente pubblico, con particolare attenzione alla UX mobile-first, alla coerenza grafica e alla semplicità d’uso. Il lavoro è stato svolto in team, con iterazioni su prototipi e componenti UI.",
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
      title: "Sito vetrina per piattaforma fintech",
      description:
        "Progettazione e sviluppo di un sito vetrina per una piattaforma di crowdfunding, con particolare attenzione alla pulizia dell’interfaccia, alla responsività e all’identità visiva del brand.",
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
      title: "Customer portal for the automotive finance sector",
      description:
        "Part of a team responsible for the development and maintenance of a multi-market customer portal in the automotive finance industry. The project includes both desktop and mobile (iOS and Android) platforms, as well as an internal backoffice area used for managing users and financial products.",
      tech: ["React", "Javascript", "Redux", "HTML", "CSS", "Antd", "Cordova"],
      images: [
        { asset: { url: "/images/works/work1a.png" }, alt: "Screen Work 1" },
        { asset: { url: "/images/works/work1b.png" }, alt: "Screen Work 1" },
      ],
    },
    {
      title: "Institutional website for a public organization",
      description:
        "Contributed to the development of a responsive institutional website for a national public organization. Focus on frontend design, user experience, and content management through a headless CMS (Strapi). The project involved collaboration with designers and editors to ensure accessibility and editorial consistency.",
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
      title: "Mobile app redesign",
      description:
        "Full redesign of a cross-platform mobile app (iOS and Android) for a public organization. The project focused on improving mobile usability, visual consistency, and user experience. Worked collaboratively in a team on UI components and navigation flows.",
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
      title: "Showcase website",
      description:
        "Designed and built a promotional website for a crowdfunding platform, with emphasis on design clarity, responsiveness, and brand identity.",
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
