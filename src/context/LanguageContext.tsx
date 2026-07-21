import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, translations, TranslationStructure } from "../translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationStructure;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("ar") || hash.includes("arabic")) {
        return "ar";
      }
      const saved = localStorage.getItem("app_lang") as Language;
      if (saved === "ar" || saved === "en") {
        return saved;
      }
    }
    return "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("app_lang", lang);
      // Update hash gracefully without forcing unnecessary jump if scrolling
      if (lang === "ar") {
        if (!window.location.hash.includes("ar")) {
          window.history.replaceState(null, "", "#ar");
        }
      } else {
        if (window.location.hash === "#ar" || window.location.hash === "#en") {
          window.history.replaceState(null, "", window.location.pathname + window.location.search);
        }
      }
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  // Sync DOM document direction and html lang
  useEffect(() => {
    const root = document.documentElement;
    if (language === "ar") {
      root.dir = "rtl";
      root.lang = "ar";
    } else {
      root.dir = "ltr";
      root.lang = "en";
    }
  }, [language]);

  // Listen to hash changes (e.g., if user navigates or shares #ar link)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("ar") && language !== "ar") {
        setLanguageState("ar");
      } else if (hash === "#en" && language !== "en") {
        setLanguageState("en");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    toggleLanguage,
    t: translations[language],
    isRTL: language === "ar",
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
