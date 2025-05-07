"use client";
import {useTranslations} from 'next-intl';

import { RegistrationForm } from "@/features/registration-form/ui/RegistrationForm";

import styles from "./RegistrationFormPage.module.scss";
export default function RegistrationFormPage() {
  const t = useTranslations();

  return (
    <section className={styles.registrationFormPage}>
      <div className={"_container"}>
        <h1>{t("registrationForm.title")}</h1>
        <RegistrationForm />
      </div>
    </section>
  );
}
