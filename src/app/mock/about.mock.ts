import type { AboutData } from "../types/about";

export const mockAbout: AboutData = {
  sectionTitle: ["About Me", "Things I Love", "Random Facts"],
  description:
    "A short description about my passions, interests and personality.",
  items: [
    { title: "Scandinavia", image: "/assets/images/about1.png", height: 500 },
    { title: "Design", image: "/assets/images/about2.png", height: 400 },
    { title: "SerieTv", image: "/assets/images/about3.png", height: 240 },
    { title: "Caffè", image: "/assets/images/about4.png", height: 600 },
    { title: "Pixel Art", image: "/assets/images/about1.png", height: 240 },
    { title: "Sketching", image: "/assets/images/about2.png", height: 500 },
  ],
};
