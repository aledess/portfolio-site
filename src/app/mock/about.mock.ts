import type { AboutData } from "@schemas/about";

export const mockAboutIT: AboutData = {
  sectionTitle: ["Chi sono", "Hobby", "Curiosità"],
  description: "Una breve descrizione su passioni, interessi e personalità.",
  images: [
    {
      caption: "Scandinavia",
      image: { asset: { url: "/images/about1.png" }, alt: "Scandinavia" },
      height: 240,
      heightMobile: 250,
    },
    {
      caption: "Design",
      image: { asset: { url: "/images/about2.png" }, alt: "Design" },
      height: 300,
      heightMobile: 200,
    },
    {
      caption: "SerieTv",
      image: { asset: { url: "/images/about3.png" }, alt: "SerieTv" },
      height: 200,
      heightMobile: 240,
    },
    {
      caption: "Caffè",
      image: { asset: { url: "/images/about4.png" }, alt: "Caffè" },
      height: 600,
      heightMobile: 220,
    },
    {
      caption: "Pixel Art",
      image: { asset: { url: "/images/about1.png" }, alt: "Pixel Art" },
      height: 240,
      heightMobile: 230,
    },
    {
      caption: "Sketching",
      image: { asset: { url: "/images/about2.png" }, alt: "Sketching" },
      height: 500,
      heightMobile: 200,
    },
  ],
};

export const mockAboutEN: AboutData = {
  sectionTitle: ["About Me", "Hobbies", "Random Facts"],
  description: "A short description about passions, interests and personality.",
  images: [
    {
      caption: "Scandinavia",
      image: { asset: { url: "/images/about1.png" }, alt: "Scandinavia" },
      height: 240,
      heightMobile: 250,
    },
    {
      caption: "Design",
      image: { asset: { url: "/images/about2.png" }, alt: "Design" },
      height: 300,
      heightMobile: 200,
    },
    {
      caption: "SerieTv",
      image: { asset: { url: "/images/about3.png" }, alt: "SerieTv" },
      height: 200,
      heightMobile: 300,
    },
    {
      caption: "Caffè",
      image: { asset: { url: "/images/about4.png" }, alt: "Caffè" },
      height: 600,
      heightMobile: 220,
    },
    {
      caption: "Pixel Art",
      image: { asset: { url: "/images/about1.png" }, alt: "Pixel Art" },
      height: 240,
      heightMobile: 230,
    },
    {
      caption: "Sketching",
      image: { asset: { url: "/images/about2.png" }, alt: "Sketching" },
      height: 500,
      heightMobile: 200,
    },
  ],
};
