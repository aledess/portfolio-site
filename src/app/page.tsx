import '@/styles/main.scss';
import Navigation from '@/components/Navigation';
import Hero from '@/sections/Hero';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Works from './sections/Works';

export default function Home() {
  return (
    <>
      <Navigation/>
      <Hero />
      <Skills />
      <Experience />
      <Works />


      {/* altre sezioni */}
    </>
  );
}

