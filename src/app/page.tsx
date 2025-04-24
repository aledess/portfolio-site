import { draftMode } from "next/headers"; // 👈 importa draftMode

import SlideIn from "@components/motion/SlideIn";
import Hero from "@sections/Hero";
import Skills from "@sections/Skills";
import Experience from "@sections/Experience";
import Works from "@sections/Works";
import Contact from "@sections/Contact";
import About from "@sections/About";

import Navigation from "@components/layout/Navigation";
import LoaderWrapper from "@components/layout/LoaderWrapper";
import Header from "@components/layout/Header";
import BackToTop from "@components/ui/BackToTop";

import { getSections } from "@sanity/sections";
import type { SectionsData } from "@schemas/sections";

export default async function Home({
  searchParams,
}: {
  searchParams: { lang?: string };
}) {
  const lang = searchParams.lang === "en" ? "en" : "it"; // fallback su IT

  const { isEnabled: isPreview } = await draftMode(); // 👈 rileva preview mode
  const sections: SectionsData = await getSections(lang, isPreview); // 👈 abilita preview

  const { hero, skills, experience, works, about, contact } = sections;

  return (
    <LoaderWrapper minDelay={1500}>
      <>
        <Header isPreview={isPreview} lang={lang} />

        <SlideIn direction="up" duration={0.5} delay={0.05}>
          <Hero data={hero} />
        </SlideIn>

        <Navigation lang={lang} />

        <SlideIn direction="up" duration={0.5} delay={0.1}>
          <Skills data={skills} />
        </SlideIn>

        <SlideIn direction="up" duration={0.5} delay={0.15}>
          <Experience data={experience} />
        </SlideIn>

        <SlideIn direction="up" duration={0.5} delay={0.2}>
          <Works data={works} />
        </SlideIn>

        <SlideIn direction="up" duration={0.5} delay={0.25}>
          <About data={about} />
        </SlideIn>

        <SlideIn direction="up" duration={0.5} delay={0.3}>
          <Contact data={contact} lang={lang} />
        </SlideIn>

        <BackToTop />
      </>
    </LoaderWrapper>
  );
}
