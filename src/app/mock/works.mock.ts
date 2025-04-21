import type { WorksData } from "../types/works";

export const mockWorks: WorksData = {
  sectionTitle: ["Selected Works", "Recent Projects", "UI Concepts"],
  items: [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with Next.js and Sanity CMS.",
      image: {
        asset: { url: "https://picsum.photos/400?random=1" },
        alt: "Screenshot of the Portfolio Website",
      },
      tech: ["Next.js", "Sanity", "SCSS"],
    },
    {
      title: "E-commerce UI",
      description:
        "Modern e-commerce frontend interface with custom animations.",
      image: {
        asset: { url: "https://picsum.photos/400?random=2" },
        alt: "UI layout of an e-commerce site",
      },
      tech: ["React", "Tailwind", "Framer Motion"],
    },
    {
      title: "Admin Dashboard",
      description: "Internal dashboard for managing data and analytics.",
      image: {
        asset: { url: "https://picsum.photos/400?random=3" },
        alt: "Admin Dashboard preview",
      },
      tech: ["Vite", "TypeScript", "Chart.js"],
    },
  ],
  _id: "mock-works",
  _translations: [],
};
