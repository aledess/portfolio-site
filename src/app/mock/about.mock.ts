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
      height: 500,
    },
    {
      title: "Design",
      image: { asset: { url: about2.src }, alt: "Design" },
      height: 400,
    },
    {
      title: "SerieTv",
      image: { asset: { url: about3.src }, alt: "SerieTv" },
      height: 240,
    },
    {
      title: "Caffè",
      image: { asset: { url: about4.src }, alt: "Caffè" },
      height: 600,
    },
    {
      title: "Pixel Art",
      image: { asset: { url: about1.src }, alt: "Pixel Art" },
      height: 240,
    },
    {
      title: "Sketching",
      image: { asset: { url: about2.src }, alt: "Sketching" },
      height: 500,
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
      height: 500,
    },
    {
      title: "Design",
      image: { asset: { url: about2.src }, alt: "Design" },
      height: 400,
    },
    {
      title: "TV Shows",
      image: { asset: { url: about3.src }, alt: "TV Shows" },
      height: 240,
    },
    {
      title: "Coffee",
      image: { asset: { url: about4.src }, alt: "Coffee" },
      height: 600,
    },
    {
      title: "Pixel Art",
      image: { asset: { url: about1.src }, alt: "Pixel Art" },
      height: 240,
    },
    {
      title: "Sketching",
      image: { asset: { url: about2.src }, alt: "Sketching" },
      height: 500,
    },
  ],
};
