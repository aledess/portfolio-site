import '@/styles/main.scss';
import Navigation from '@/components/Navigation';
import Hero from '@/sections/Hero';
import Skills from './sections/Skills';

export default function Home() {
  return (
    <>
      <Navigation/>
      <Hero />
      <Skills />
      {/* altre sezioni */}
    </>
  );
}

