"use client";

import { createContext, useContext, useEffect, useState } from "react";
import usePrefersThemeMode from "@hooks/usePrefersThemeMode";
import type { ThemeMode } from "@hooks/usePrefersThemeMode";

type Theme = ThemeMode;

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const prefers = usePrefersThemeMode(); // ✅ hook che ascolta il sistema
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;

    const initial = saved || prefers;
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, [prefers]);

  const toggleTheme = () => {
    const html = document.documentElement;

    // Crea div overlay
    const fade = document.createElement("div");
    fade.className = "theme-fade";
    document.body.appendChild(fade);

    // Rimuove dopo l'animazione
    setTimeout(() => {
      fade.remove();
    }, 600);

    // Transizione standard
    html.classList.add("theme-transition");
    setTimeout(() => {
      html.classList.remove("theme-transition");
    }, 600);

    // Cambia tema
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
