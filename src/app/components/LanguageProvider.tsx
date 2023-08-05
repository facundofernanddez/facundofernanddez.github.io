"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

interface LanguageContextType {
  lang: { language: string };
  setLang: Dispatch<SetStateAction<{ language: string }>>;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: { language: "en" },
  setLang: () => {},
});

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState({
    language: "en",
  });

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
