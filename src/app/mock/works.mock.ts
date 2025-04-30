import type { WorksData } from "@schemas/works";

export const mockWorksIT: WorksData = {
  sectionTitle: ["Progetti selezionati", "Lavori recenti", "Concept UI"],
  items: [
    {
      title: "Sito Portfolio",
      description: "Portfolio personale con Next.js e Sanity CMS.",
      images: [
        {
          asset: { url: "https://picsum.photos/400?random=1" },
          alt: "Screenshot del sito portfolio 1",
        },
        {
          asset: { url: "https://picsum.photos/400?random=2" },
          alt: "Screenshot del sito portfolio 2",
        },
      ],
      tech: ["Next.js", "Sanity", "SCSS"],
    },
    {
      title: "Sito Portfolio",
      description: "Portfolio personale con Next.js e Sanity CMS.",
      images: [
        {
          asset: { url: "https://picsum.photos/400?random=3" },
          alt: "Screenshot del sito portfolio 1",
        },
        {
          asset: { url: "https://picsum.photos/400?random=4" },
          alt: "Screenshot del sito portfolio 2",
        },
      ],
      tech: ["Next.js", "Sanity", "SCSS"],
      link: "https://www.google.com/?hl=it",
    },
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
      images: [
        {
          asset: { url: "https://picsum.photos/400?random=1" },
          alt: "Screenshot del sito portfolio 1",
        },
        {
          asset: { url: "https://picsum.photos/400?random=2" },
          alt: "Screenshot del sito portfolio 2",
        },
      ],
      tech: ["Next.js", "Sanity", "SCSS"],
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with Next.js and Sanity CMS.",
      images: [
        {
          asset: { url: "https://picsum.photos/400?random=3" },
          alt: "Screenshot del sito portfolio 1",
        },
        {
          asset: { url: "https://picsum.photos/400?random=4" },
          alt: "Screenshot del sito portfolio 2",
        },
      ],
      tech: ["Next.js", "Sanity", "SCSS"],
      link: "https://www.google.com/?hl=it",
    },
  ],
  _id: "mock-works-en",
  _translations: [],
};
