"use client";

import { ChangeEvent, useContext, useRef, useState } from "react";
import { postEntry } from "../action";
import { useFormStatus } from "react-dom";
import { LanguageContext } from "./LanguageProvider";

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  const { pending } = useFormStatus();
  const [buttonPending, setButtonPending] = useState(false);
  const { lang } = useContext(LanguageContext);

  const actionPost = async (formData: FormData) => {
    const formEntry = formData.get("entry") as string;

    const entry = formEntry.trim();

    if (entry.length === 0) {
      return;
    }

    pending;

    await postEntry(formData);
    formRef.current?.reset();
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;

    if (inputValue.trim().length === 0) {
      setButtonPending(true);
    }

    if (inputValue.trim().length > 0) {
      setButtonPending(false);
    }
  };

  return (
    <>
      <h3 className="pb-2">
        {lang.language === "en"
          ? "Hey, leave me a little message below! It's anonymous 😉"
          : "¡Psst! Déjame un mensajito abajo. Es anónimo 😉"}
      </h3>
      <form
        action={(formData) => actionPost(formData)}
        className="relative flex items-center text-sm mb-5"
        ref={formRef}
        style={{ opacity: pending ? 0.5 : 1 }}
      >
        <input
          type="text"
          onChange={(e) => changeHandler(e)}
          placeholder={
            lang.language === "en" ? "Your message..." : "Tu mensaje..."
          }
          name="entry"
          required
          disabled={pending}
          className="pl-4 pr-32 py-2 mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
        />

        <button
          type="submit"
          disabled={buttonPending}
          style={{ opacity: buttonPending ? 0.5 : 1 }}
          className="flex items-center justify-center absolute right-2 mt-1 font-medium h-7 bg-teal-500/30 text-neutral-900 dark:text-neutral-100 rounded w-16"
        >
          {lang.language === "en" ? "Send" : "Enviar"}
        </button>
      </form>
    </>
  );
}
