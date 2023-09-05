"use client";

import { useContext } from "react";
import { LanguageContext } from "../components/LanguageProvider";

export default function GuestbookTitle() {
  const { lang } = useContext(LanguageContext);
  return (
    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
      {lang.language === "en" ? "Guestbook" : "Visitas"}
    </h1>
  );
}
