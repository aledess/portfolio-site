import type { AboutData } from "@schemas/about";

export const mockAboutIT: AboutData = {
  sectionTitle: ["Chi sono", "Hobby", "Curiosità"],
  description: "Una breve descrizione su passioni, interessi e personalità.",
  items: [
    { title: "Scandinavia", image: "/assets/images/about1.png", height: 500 },
    { title: "Design", image: "/assets/images/about2.png", height: 400 },
    { title: "SerieTv", image: "/assets/images/about3.png", height: 240 },
    { title: "Caffè", image: "/assets/images/about4.png", height: 600 },
    { title: "Pixel Art", image: "/assets/images/about1.png", height: 240 },
    { title: "Sketching", image: "/assets/images/about2.png", height: 500 },
  ],
};

export const mockAboutEN: AboutData = {
  sectionTitle: ["About Me", "Hobbies", "Random Facts"],
  description: "A short description about passions, interests and personality.",
  items: [
    { title: "Scandinavia", image: "/assets/images/about1.png", height: 500 },
    { title: "Design", image: "/assets/images/about2.png", height: 400 },
    { title: "TV Shows", image: "/assets/images/about3.png", height: 240 },
    { title: "Coffee", image: "/assets/images/about4.png", height: 600 },
    { title: "Pixel Art", image: "/assets/images/about1.png", height: 240 },
    { title: "Sketching", image: "/assets/images/about2.png", height: 500 },
  ],
};
