import Hero from '@/sections/Hero';
import Skills from '@/sections/Skills';
import Experience from '@/sections/Experience';
import Works from '@/sections/Works';
import Contact from '@/sections/Contact';
import Navigation from './components/Navigation';

export default function Home() {
  return (
    <>
      <Hero />
      <Navigation />
      <Skills />
      <Experience />
      <Works />
      <Contact />
    </>
  );
}
