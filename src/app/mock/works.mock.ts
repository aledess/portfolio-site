import type { WorksData } from "@schemas/works";

export const mockWorksIT: WorksData = {
  sectionTitle: ["Progetti selezionati", "Lavori recenti", "Concept UI"],
  items: [
    {
      title: "Sito Portfolio",
      description: "Portfolio personale con Next.js e Sanity CMS.",
      image: {
        asset: { url: "https://picsum.photos/400?random=1" },
        alt: "Screenshot del sito portfolio",
      },
      tech: ["Next.js", "Sanity", "SCSS"],
    },
    // altri progetti...
  ],
  _id: "mock-works-it",
  _translations: [],
};

export const mockWorksEN: WorksData = {
  sectionTitle: ["Selected Works", "Recent Projects", "UI Concepts"],
  items: [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with Next.js and Sanity CMS.",
      image: {
        asset: { url: "https://picsum.photos/400?random=1" },
        alt: "Portfolio website screenshot",
      },
      tech: ["Next.js", "Sanity", "SCSS"],
    },
    // altri progetti...
  ],
  _id: "mock-works-en",
  _translations: [],
};
