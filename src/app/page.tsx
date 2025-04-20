import SlideIn from "@components/motion/SlideIn";
import Hero from "@sections/Hero";
import Skills from "@sections/Skills";
import Experience from "@sections/Experience";
import Works from "@sections/Works";
import Contact from "@sections/Contact";
import About from "@sections/About";

import Navigation from "./components/layout/Navigation";
import LoaderWrapper from "@components/layout/LoaderWrapper";
import Header from "@/app/components/layout/Header";
import BackToTop from "./components/ui/BackToTop";
import { getSections } from "@sanity/sections";

export default async function Home() {
  const lang = "it"; // oppure "en"
  const { hero, skills } = await getSections(lang);

  // 🧪 Log lato server
  console.log("🧪 Fetching sections for lang:", lang);
  console.log("🪄 Hero result:", hero);
  console.log("🛠 Skills result:", skills);

  return (
    <LoaderWrapper minDelay={1500}>
      <>
        <Header />

        <SlideIn direction="up" duration={0.5} delay={0.05}>
          <Hero data={hero} />
        </SlideIn>

        <Navigation />

        <SlideIn direction="up" duration={0.5} delay={0.1}>
          <Skills />
        </SlideIn>

        <SlideIn direction="up" duration={0.5} delay={0.15}>
          <Experience />
        </SlideIn>

        <SlideIn direction="up" duration={0.5} delay={0.2}>
          <Works />
        </SlideIn>

        <SlideIn direction="up" duration={0.5} delay={0.25}>
          <About />
        </SlideIn>

        <SlideIn direction="up" duration={0.5} delay={0.3}>
          <Contact />
        </SlideIn>

        <BackToTop />
      </>
    </LoaderWrapper>
  );
}
