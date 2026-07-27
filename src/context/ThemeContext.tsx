import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type ThemeMode = "auto" | "light" | "dark";
export type EffectiveTheme = "light" | "dark";

interface ThemeContextType {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  effectiveTheme: EffectiveTheme;
  isLight: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [themeMode, setThemeModeState] = useState<ThemeMode>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("app_theme_mode") as ThemeMode;
      if (saved === "light" || saved === "dark" || saved === "auto") {
        return saved;
      }
    }
    return "auto"; // Default is dynamic system mode
  });

  const [effectiveTheme, setEffectiveTheme] = useState<EffectiveTheme>("dark");

  const setThemeMode = (mode: ThemeMode) => {
    setThemeModeState(mode);
    if (typeof window !== "undefined") {
      localStorage.setItem("app_theme_mode", mode);
    }
  };

  useEffect(() => {
    const updateTheme = () => {
      let resolvedTheme: EffectiveTheme = "dark";

      if (themeMode === "auto") {
        if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
          resolvedTheme = "light";
        } else if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
          resolvedTheme = "dark";
        } else {
          // Dynamic time fallback: Day hours (6am - 6pm) -> light, Night hours -> dark
          const hour = new Date().getHours();
          resolvedTheme = hour >= 6 && hour < 18 ? "light" : "dark";
        }
      } else {
        resolvedTheme = themeMode;
      }

      setEffectiveTheme(resolvedTheme);

      const root = document.documentElement;
      if (resolvedTheme === "light") {
        root.classList.add("light");
        root.classList.remove("dark");
      } else {
        root.classList.add("dark");
        root.classList.remove("light");
      }
    };

    updateTheme();

    if (themeMode === "auto" && typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => updateTheme();

      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.addListener(handleChange);
        return () => mediaQuery.removeListener(handleChange);
      }
    }
  }, [themeMode]);

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        setThemeMode,
        effectiveTheme,
        isLight: effectiveTheme === "light",
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

