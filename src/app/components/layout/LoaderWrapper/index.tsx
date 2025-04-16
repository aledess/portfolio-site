"use client";

import { useEffect, useState } from "react";
import Loader from "@components/ui/Loader";
import FadeIn from "@components/motion/FadeIn";
import { AnimatePresence } from "framer-motion";

type Props = {
  children: React.ReactNode;
  minDelay?: number;
};

export default function LoaderWrapper({ children, minDelay = 4000 }: Props) {
  const [showContent, setShowContent] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // VERSIONE BASE: mostra loader per almeno minDelay millisecondi
    const delay = setTimeout(() => {
      setShowLoader(false); // parte fade-out
      setTimeout(() => {
        setShowContent(true); // dopo fade mostra contenuto
      }, 1200); // deve combaciare con la durata dell'exit in Loader
    }, minDelay);

    return () => clearTimeout(delay);

    // ⬇️ VERSIONE AVANZATA (commentata) – quando integri Sanity:
    /*
    Promise.all([
      fetchSanityData(), // qui la tua funzione che recupera i dati
      new Promise((resolve) => setTimeout(resolve, minDelay)), // garantisce durata minima
    ]).then(() => {
      setShowLoader(false);
      setTimeout(() => {
        setShowContent(true);
      }, 1200);
    });
    */
  }, [minDelay]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showLoader && (
          <Loader key="loader" isVisible={showLoader} duration={minDelay} />
        )}
      </AnimatePresence>

      {showContent && (
        <FadeIn variant="slideUp" duration={0.6}>
          {children}
        </FadeIn>
      )}
    </>
  );
}
