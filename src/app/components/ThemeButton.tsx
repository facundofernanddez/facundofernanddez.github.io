"use client";

import { useTheme } from "next-themes";

export default function ThemeButton() {
  const {} = useTheme();

  return (
    <button className="bg-teal-500/30 p-2 rounded-lg text-teal-500"></button>
  );
}
