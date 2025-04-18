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

export default function Home() {
  return (
    <LoaderWrapper minDelay={1500}>
      <>
        <Header />

        <SlideIn direction="up" duration={0.5} delay={0.05}>
          <Hero />
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
