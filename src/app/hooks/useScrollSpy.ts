import { useEffect, useState } from 'react';

export default function useScrollSpy(ids: string[], offset = 100): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + offset;

      // se siamo in cima → attiva prima sezione
      if (window.scrollY === 0) {
        setActiveId(ids[0]);
        return;
      }

      let currentId: string | null = null;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          currentId = id;
        }
      }

      setActiveId(currentId);

      // se siamo in fondo → attiva ultima sezione
      const pageHeight = document.documentElement.scrollHeight;
      const scrollBottom = window.scrollY + window.innerHeight;

      if (pageHeight - scrollBottom < 10) {
        setActiveId(ids[ids.length - 1]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ids, offset]);

  return activeId;
}
