"use client";

import { useEffect, useState } from "react";
import Loader from "@components/ui/Loader";
import PageTransition from "@components/motion/PageTransition";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  minDelay?: number;
};

export default function LoaderWrapper({ children, minDelay = 4000 }: Props) {
  const [phase, setPhase] = useState<"loader" | "transition" | "content">(
    "loader",
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPhase("transition");
    }, minDelay);

    return () => clearTimeout(timeout);
  }, [minDelay]);

  const handleTransitionComplete = () => {
    setPhase("content");
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {phase === "loader" && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Loader isVisible />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {phase === "transition" && (
          <PageTransition
            key="transition"
            onComplete={handleTransitionComplete}
          />
        )}
      </AnimatePresence>

      {phase === "content" && children}
    </>
  );
}
