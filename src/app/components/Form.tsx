"use client";

import { useContext, useRef } from "react";
import { postEntry } from "../action";
// import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { LanguageContext } from "./LanguageProvider";

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  // const { pending } = useFormStatus();
  const { lang } = useContext(LanguageContext);
  return (
    <>
      <p className="pb-2">
        {lang.language === "en"
          ? "Hey, leave me a little message below! Is anonymous 😉"
          : "¡Psst! Déjame un mensajito abajo. Es anónimo 😉"}
      </p>
      <form
        action={async (formData) => {
          await postEntry(formData);
          formRef.current?.reset();
        }}
        className="relative flex items-center text-sm mb-5"
        ref={formRef}
        // style={{ opacity: pending ? 0.5 : 1 }}
      >
        <input
          type="text"
          placeholder={
            lang.language === "en" ? "Your message..." : "Tu mensaje..."
          }
          name="entry"
          required
          // disabled={pending}
          className="pl-4 pr-32 py-2 mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
        />

        <button
          type="submit"
          // disabled={pending}
          className="flex items-center justify-center absolute right-2 mt-1 font-medium h-7 bg-teal-500/30 text-neutral-900 dark:text-neutral-100 rounded w-16"
        >
          {lang.language === "en" ? "Send" : "Enviar"}
        </button>
      </form>
    </>
  );
}
