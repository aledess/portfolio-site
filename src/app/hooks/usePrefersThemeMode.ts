import { useEffect, useState } from "react";

export type ThemeMode = "light" | "dark";

export default function usePrefersThemeMode(): ThemeMode {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateMode = (e: MediaQueryListEvent) => {
      setMode(e.matches ? "dark" : "light");
    };

    setMode(mediaQuery.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", updateMode);

    return () => {
      mediaQuery.removeEventListener("change", updateMode);
    };
  }, []);

  return mode;
}
