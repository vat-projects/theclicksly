"use client";
import React from "react";
import { useTolgee } from "@tolgee/react";

import { setLanguage } from "@/tolgee/language";

export const LangSelector: React.FC = () => {
  const tolgee = useTolgee(["language"]);
  const language = tolgee.getLanguage();

  function onSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setLanguage(e.target.value);
  }

  return (
    <select onChange={onSelectChange} value={language}>
      <option value="en">EN</option>
      <option value="de">DE</option>
      <option value="it">IT</option>
    </select>
  );
};
