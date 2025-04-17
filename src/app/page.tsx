import FadeIn from "@components/motion/FadeIn";
import Hero from "@sections/Hero";
import Skills from "@sections/Skills";
import Experience from "@sections/Experience";
import Works from "@sections/Works";
import Contact from "@sections/Contact";
import About from "@sections/About";

import Navigation from "./components/layout/Navigation";
import LoaderWrapper from "@components/layout/LoaderWrapper";
import Header from "@/app/components/layout/Header";

export default function Home() {
  return (
    <LoaderWrapper minDelay={1500}>
      <>
        <Header />

        <FadeIn variant="slideUp" duration={0.9}>
          <Hero />
        </FadeIn>

        <Navigation />

        <FadeIn variant="slideUp" duration={0.9}>
          <Skills />
        </FadeIn>
        <FadeIn variant="slideUp" duration={0.9}>
          <Experience />
        </FadeIn>
        <FadeIn variant="slideUp" duration={0.9}>
          <Works />
        </FadeIn>
        <FadeIn variant="slideUp" duration={0.9}>
          <About />
        </FadeIn>
        <FadeIn variant="slideUp" duration={0.9}>
          <Contact />
        </FadeIn>
      </>
    </LoaderWrapper>
  );
}
