import type { AboutData } from "@schemas/about";

export const mockAboutIT: AboutData = {
  sectionTitle: ["Chi sono", "Hobby", "Curiosità"],
  images: [
    {
      caption: "Serie TV",
      image: { asset: { url: "/images/about/tvserie.png" }, alt: "Serie TV" },
      height: 600,
      heightMobile: 220,
    },
    {
      caption: "Cani",
      image: {
        asset: { url: "/images/about/dogs.png" },
        alt: "Cani",
      },
      height: 300,
      heightMobile: 250,
    },
    {
      caption: "Astronomia",
      image: {
        asset: { url: "/images/about/astronomy.png" },
        alt: "Astronomia",
      },
      height: 240,
      heightMobile: 250,
    },

    {
      caption: "Interior Design",
      image: {
        asset: { url: "/images/about/design.png" },
        alt: "Interior Design",
      },
      height: 500,
      heightMobile: 200,
    },
    {
      caption: "The Big Bang Theory",
      image: {
        asset: { url: "/images/about/tbbt.png" },
        alt: "Tbbt",
      },
      height: 240,
      heightMobile: 250,
    },
  ],
};

export const mockAboutEN: AboutData = {
  sectionTitle: ["About Me", "Hobbies", "Random Facts"],
  images: [
    {
      caption: "Scandinavia",
      image: { asset: { url: "/images/about/about1.png" }, alt: "Scandinavia" },
      height: 240,
      heightMobile: 250,
    },
    {
      caption: "Design",
      image: { asset: { url: "/images/about/about2.png" }, alt: "Design" },
      height: 300,
      heightMobile: 200,
    },
    {
      caption: "SerieTv",
      image: { asset: { url: "/images/about/about3.png" }, alt: "SerieTv" },
      height: 200,
      heightMobile: 300,
    },
    {
      caption: "Caffè",
      image: { asset: { url: "/images/about/about4.png" }, alt: "Caffè" },
      height: 600,
      heightMobile: 220,
    },
    {
      caption: "Pixel Art",
      image: { asset: { url: "/images/about/about1.png" }, alt: "Pixel Art" },
      height: 240,
      heightMobile: 230,
    },
    {
      caption: "Sketching",
      image: { asset: { url: "/images/about/about2.png" }, alt: "Sketching" },
      height: 500,
      heightMobile: 200,
    },
  ],
};
