import type { AboutData } from "@schemas/about";
import about1 from "@/assets/images/about1.png";
import about2 from "@/assets/images/about2.png";
import about3 from "@/assets/images/about3.png";
import about4 from "@/assets/images/about4.png";

export const mockAboutIT: AboutData = {
  sectionTitle: ["Chi sono", "Hobby", "Curiosità"],
  description: "Una breve descrizione su passioni, interessi e personalità.",
  items: [
    {
      title: "Scandinavia",
      image: { asset: { url: about1.src }, alt: "Scandinavia" },
      height: 240,
      heightMobile: 250, // 👈 nuovo opzionale
    },
    {
      title: "Design",
      image: { asset: { url: about2.src }, alt: "Design" },
      height: 300,
      heightMobile: 200, // 👈 nuovo opzionale
    },
    {
      title: "SerieTv",
      image: { asset: { url: about3.src }, alt: "SerieTv" },
      height: 200,
      heightMobile: 240, // 👈 nuovo opzionale
    },
    {
      title: "Caffè",
      image: { asset: { url: about4.src }, alt: "Caffè" },
      height: 600,
      heightMobile: 220, // 👈 nuovo opzionale
    },
    {
      title: "Pixel Art",
      image: { asset: { url: about1.src }, alt: "Pixel Art" },
      height: 240,
      heightMobile: 230, // 👈 nuovo opzionale
    },
    {
      title: "Sketching",
      image: { asset: { url: about2.src }, alt: "Sketching" },
      height: 500,
      heightMobile: 200, // 👈 nuovo opzionale
    },
  ],
};

export const mockAboutEN: AboutData = {
  sectionTitle: ["About Me", "Hobbies", "Random Facts"],
  description: "A short description about passions, interests and personality.",
  items: [
    {
      title: "Scandinavia",
      image: { asset: { url: about1.src }, alt: "Scandinavia" },
      height: 240,
      heightMobile: 250, // 👈 nuovo opzionale
    },
    {
      title: "Design",
      image: { asset: { url: about2.src }, alt: "Design" },
      height: 300,
      heightMobile: 200, // 👈 nuovo opzionale
    },
    {
      title: "SerieTv",
      image: { asset: { url: about3.src }, alt: "SerieTv" },
      height: 200,
      heightMobile: 300, // 👈 nuovo opzionale
    },
    {
      title: "Caffè",
      image: { asset: { url: about4.src }, alt: "Caffè" },
      height: 600,
      heightMobile: 220, // 👈 nuovo opzionale
    },
    {
      title: "Pixel Art",
      image: { asset: { url: about1.src }, alt: "Pixel Art" },
      height: 240,
      heightMobile: 230, // 👈 nuovo opzionale
    },
    {
      title: "Sketching",
      image: { asset: { url: about2.src }, alt: "Sketching" },
      height: 500,
      heightMobile: 200, // 👈 nuovo opzionale
    },
  ],
};
