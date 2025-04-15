import '@/styles/main.scss';
import Navigation from '@/components/Navigation';
import Hero from '@/sections/Hero';
import Skills from './sections/Skills';
import Experience from './sections/Experience';

export default function Home() {
  return (
    <>
      <Navigation/>
      <Hero />
      <Skills />
      <Experience />

      {/* altre sezioni */}
    </>
  );
}

