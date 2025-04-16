import FadeIn from '@components/motion/FadeIn';
import Hero from '@sections/Hero';
import Skills from '@sections/Skills';
import Experience from '@sections/Experience';
import Works from '@sections/Works';
import Contact from '@sections/Contact';
import Navigation from './components/layout/Navigation';

export default function Home() {
  return (
    <>
      <FadeIn variant="slideUp" duration={0.6}>
        <Hero />
      </FadeIn>
        <Navigation />

      <FadeIn variant="slideUp" duration={0.6}>
        <Skills />
      </FadeIn>

      <FadeIn variant="slideUp" duration={0.6}>
        <Experience />
      </FadeIn>

      <FadeIn variant="slideUp" duration={0.6}>
        <Works />
      </FadeIn>

      <FadeIn variant="slideUp" duration={0.6}>
        <Contact />
      </FadeIn>
    </>
  );
}
