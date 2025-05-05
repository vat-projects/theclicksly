"use client";
import { useTranslate } from "@tolgee/react";

import { RegistrationForm } from "@/features/registration-form/ui/RegistrationForm";

import styles from "./RegistrationFormPage.module.scss";
export default function RegistrationFormPage() {
  const { t } = useTranslate();

  return (
    <section className={styles.registrationFormPage}>
      <div className={"_container"}>
        <h1>{t("registrationForm.title")}</h1>
        <RegistrationForm />
      </div>
    </section>
  );
}
