"use client";

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = () => {
    const isDark = localStorage.theme === "dark";
    const ifNotExist = !("theme" in localStorage);
    const windowTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (isDark || (ifNotExist && windowTheme)) {
      setTheme("dark");
    }
    document.documentElement.classList.toggle("dark");
  };

  useEffect(handleThemeChange, [theme]);

  console.log("theme", theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
