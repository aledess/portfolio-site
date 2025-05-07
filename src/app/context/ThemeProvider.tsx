"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light"); // forziamo "light"

  useEffect(() => {
    // imposta direttamente il tema "light"
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;

    const fade = document.createElement("div");
    fade.className = "theme-fade";
    document.body.appendChild(fade);
    setTimeout(() => fade.remove(), 600);

    html.classList.add("theme-transition");
    setTimeout(() => html.classList.remove("theme-transition"), 600);

    // switcha tra light e dark (solo se vuoi mantenere il toggle attivo)
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    html.setAttribute("data-theme", newTheme);
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
