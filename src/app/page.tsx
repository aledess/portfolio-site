/* eslint-disable @typescript-eslint/no-explicit-any */
import { draftMode } from "next/headers";

import SlideIn from "@components/motion/SlideIn";
import Hero from "@sections/Hero";
import Skills from "@sections/Skills";
import Experience from "@sections/Experience";
import Works from "@sections/Works";
import Contact from "@sections/Contact";
import About from "@sections/About";
import Maintenance from "@components/layout/Maintenance";

import LoaderWrapper from "@components/layout/LoaderWrapper";
import Header from "@components/layout/Header";
import Navigation from "@components/layout/Navigation";
import BackToTop from "@components/ui/BackToTop";

import { getSections } from "@sanity/sections";
import type { SectionsData } from "@schemas/sections";

export default async function Home({ searchParams }: any) {
  const lang = searchParams?.lang === "en" ? "en" : "it";

  const { isEnabled: isPreview } = await draftMode();
  const sections: SectionsData = await getSections(lang, isPreview);

  const { hero, skills, experience, works, about, contact, social, settings } =
    sections;

  const { hideContactSection = false } = settings;

  if (settings?.maintenance && !isPreview) {
    return <Maintenance />;
  }

  return (
    <LoaderWrapper minDelay={1500}>
      <Header isPreview={isPreview} hideContact={hideContactSection} />

      <SlideIn direction="up" duration={0.5} delay={0.05}>
        <Hero data={hero} social={social} />
      </SlideIn>

      <Navigation lang={lang} hideContact={hideContactSection} />

      <SlideIn direction="up" duration={0.5} delay={0.25}>
        <About data={about} lang={lang} />
      </SlideIn>

      <SlideIn direction="up" duration={0.5} delay={0.1}>
        <Skills data={skills} />
      </SlideIn>

      <SlideIn direction="up" duration={0.5} delay={0.15}>
        <Experience data={experience} />
      </SlideIn>

      <SlideIn direction="up" duration={0.5} delay={0.2}>
        <Works data={works} />
      </SlideIn>

      {!hideContactSection && (
        <SlideIn direction="up" duration={0.5} delay={0.3}>
          <Contact data={contact} lang={lang} />
        </SlideIn>
      )}

      <BackToTop />
    </LoaderWrapper>
  );
}
