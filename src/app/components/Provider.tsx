"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { createContext, useState } from "react";

export const LanguageContext = createContext("en" || "es");

export function Provider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState("en" || "es");

  return (
    <LanguageContext.Provider value={lang}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>;
    </LanguageContext.Provider>
  );
}
