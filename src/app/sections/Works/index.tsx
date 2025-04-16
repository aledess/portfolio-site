import Section from "@components/layout/Section";
import WorkCard from "@/app/components/ui/WorkCard";
import Text from "@components/ui/Text";
import styles from "./styles.module.scss";

const works = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js and Sanity CMS.",
    image: "https://picsum.photos/400?random=1",
    tech: ["Next.js", "Sanity", "SCSS"],
  },
  {
    title: "E-commerce UI",
    description: "Modern e-commerce frontend interface with custom animations.",
    image: "https://picsum.photos/400?random=2",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Admin Dashboard",
    description: "Internal dashboard for managing data and analytics.",
    image: "https://picsum.photos/400?random=3",
    tech: ["Vite", "TypeScript", "Chart.js", "Vite", "TypeScript", "Chart.js"],
  },
  {
    title: "Mobile Landing Page",
    description: "Optimized landing for mobile-first startup campaigns.",
    image: "https://picsum.photos/400?random=4",
    tech: ["HTML", "CSS", "GSAP"],
  },
  {
    title: "CMS Blog Theme",
    description: "A minimalist blog layout powered by headless CMS.",
    image: "https://picsum.photos/400?random=5",
    tech: ["Gatsby", "GraphQL", "Contentful"],
  },
  {
    title: "Design System",
    description: "Reusable UI components built with accessibility in mind.",
    image: "https://picsum.photos/400?random=6",
    tech: ["Storybook", "TypeScript", "SCSS Modules"],
  },
];

export default function Works() {
  return (
    <Section
      id="works"
      titleLoop={["Selected Works", "Recent Projects", "UI Concepts"]}
    >
      <div className={styles.works}>
        {works.map((work, i) => (
          <WorkCard
            key={i}
            image={work.image}
            title={work.title}
            description={work.description}
            tech={work.tech}
          />
        ))}
      </div>
      <div className={styles["works__cta"]}>
        <a href="/projects" className={styles["works__link"]}>
          <Text as="span" variant="label" color="inherit">
            View all projects
          </Text>
        </a>
      </div>
    </Section>
  );
}
