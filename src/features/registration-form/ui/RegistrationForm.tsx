"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import { zodResolver } from "@hookform/resolvers/zod";
import {useTranslations} from 'next-intl';

import Button from "@/shared/ui/kit/button/Button";

import "react-phone-input-2/lib/style.css";
import { submitRegistration } from "../api/submitRegistration";
import { RegistrationFormSchema } from "../model/RegistrationForm.schema";
import styles from "./RegistrationForm.module.scss";
import { RegistrationFormSuccess } from "./RegistrationFormSuccess";

export const RegistrationForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const t = useTranslations();

  const roleOptions = [
    { value: "advertiser", label: t("registrationForm.role.advertiser") },
    { value: "publisher", label: t("registrationForm.role.publisher") },
  ];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegistrationFormSchema),
    defaultValues: {
      name: "",
      role: "",
      email: "",
      phone: "",
      message: "",
      terms: false,
    },
  });

  const onSubmit = (data: RegistrationFormSchema) => {
    setIsLoading(true);
    submitRegistration(data);
    setTimeout(() => {
      setIsSuccess(true);
      reset();
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {!isSuccess && (
        <div className={styles.registrationForm}>
          <h2>{t("registrationForm.subtitle")}</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>
              <label htmlFor="name">
                {t("registrationForm.form.name.label")}
              </label>
              <input
                type="text"
                {...register("name")}
                placeholder={t("registrationForm.form.name.placeholder")}
                className={errors.name ? styles.errorInput : ""}
              />
              {errors.name && (
                <p className={styles.error}>{errors.name.message}</p>
              )}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="role">
                {t("registrationForm.form.role.label")}
              </label>
              <Select
                id="role"
                options={roleOptions}
                className={styles.select}
                classNamePrefix="select"
                onChange={(option) => setValue("role", option?.value || "")}
                placeholder={t("registrationForm.form.role.placeholder")}
              />
              {errors.role && (
                <p className={styles.error}>{errors.role.message}</p>
              )}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">
                {t("registrationForm.form.email.label")}
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder={t("registrationForm.form.email.placeholder")}
                className={errors.email ? styles.errorInput : ""}
              />
              {errors.email && (
                <p className={styles.error}>{errors.email.message}</p>
              )}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">
                {t("registrationForm.form.phone.label")}
              </label>
              <PhoneInput
                country="ua"
                inputClass={errors.phone ? styles.errorInput : ""}
                containerClass={styles.phoneInputContainer}
                buttonClass={styles.phoneInputButton}
                dropdownClass={styles.phoneInputDropdown}
                onChange={(value) => setValue("phone", value)}
                value={watch("phone")}
                placeholder={t("registrationForm.form.phone.placeholder")}
              />
              {errors.phone && (
                <p className={styles.error}>{errors.phone.message}</p>
              )}
            </div>
            <div className={styles.formGroup + " " + styles.message}>
              <label htmlFor="message">
                {t("registrationForm.form.message.label")}
              </label>
              <textarea
                {...register("message")}
                placeholder={t("registrationForm.form.message.placeholder")}
              />
              {errors.message && (
                <p className={styles.error}>{errors.message.message}</p>
              )}
            </div>

            <div className={styles.bottom}>
              <div className={styles.terms}>
                <input type="checkbox" {...register("terms")} />
                <label htmlFor="terms">
                  {t("registrationForm.form.aggree")}
                </label>
                {errors.terms && (
                  <p className={styles.error}>{errors.terms.message}</p>
                )}
              </div>
              <Button url="" type="submit" buttonType="submit" color="black">
                {isLoading
                  ? t("registrationForm.form.loading")
                  : t("registrationForm.form.submit")}
              </Button>
            </div>
          </form>
        </div>
      )}
      {isSuccess && (
        <RegistrationFormSuccess onClose={() => setIsSuccess(false)} />
      )}
    </>
  );
};
