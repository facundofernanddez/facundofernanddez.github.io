import { useContext } from "react";
import { LanguageContext } from "@/app/components/LanguageProvider";

export default function LanguageButton() {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <button
      onClick={() =>
        setLang((prevLang) => ({
          ...prevLang,
          language: prevLang.language === "en" ? "es" : "en",
        }))
      }
      className="bg-teal-500/30 p-2 rounded-lg text-teal-500"
    >
      {lang.language.toUpperCase()}
    </button>
  );
}
