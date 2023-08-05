"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { createContext, useState } from "react";

export const LanguageContext = createContext({});

export function Provider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState({
    lang: "en" || "es",
  });

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>;
    </LanguageContext.Provider>
  );
}
