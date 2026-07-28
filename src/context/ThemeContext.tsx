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
        // Dynamic time-based automatic mode:
        // Daytime (6:00 AM to 6:00 PM / 18:00) -> Light Mode
        // Nighttime (6:00 PM to 6:00 AM) -> Night Mode
        const currentHour = new Date().getHours();
        resolvedTheme = currentHour >= 6 && currentHour < 18 ? "light" : "dark";
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

    if (themeMode === "auto") {
      // Check local time every 30 seconds to automatically adjust day/night theme
      const intervalId = setInterval(() => {
        updateTheme();
      }, 30000);

      return () => clearInterval(intervalId);
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

