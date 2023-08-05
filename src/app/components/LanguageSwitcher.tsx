import { useContext } from "react";
import { LanguageContext } from "./Provider";

export default function LanguageSwitcher() {
  const lang = useContext(LanguageContext);

  const handleSwitchLanguage = () => {
    lang === "en" ? "es" : "en";
  };

  return (
    <button
      onClick={handleSwitchLanguage}
      className="bg-teal-500/30 p-2 rounded-lg text-teal-500"
    >
      {lang.toUpperCase()}
    </button>
  );
}
