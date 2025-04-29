"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/shared/ui/kit/button/Button";

import "react-phone-input-2/lib/style.css";
import { submitContactForm } from "../api/submitContactForm";
import { ContactFormSchema } from "../model/ContactForm.schema";
import styles from "./ContactForm.module.scss";
import { ContactFormSuccess } from "./ContactFormSuccess";

const roleOptions = [
  { value: "advertiser", label: "Advertiser" },
  { value: "publisher", label: "Publisher" },
];

export const ContactForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      role: "",
      email: "",
      phone: "",
      message: "",
      terms: false,
    },
  });

  const onSubmit = (data: ContactFormSchema) => {
    setIsLoading(true);
    submitContactForm(data);
    setTimeout(() => {
      setIsSuccess(true);
      reset();
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {!isSuccess && (
        <div className={styles.contactForm}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                {...register("name")}
                placeholder="Enter your full name"
                className={errors.name ? styles.errorInput : ""}
              />
              {errors.name && (
                <p className={styles.error}>{errors.name.message}</p>
              )}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                {...register("email")}
                placeholder="Enter your email address"
                className={errors.email ? styles.errorInput : ""}
              />
              {errors.email && (
                <p className={styles.error}>{errors.email.message}</p>
              )}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number:</label>
              <PhoneInput
                country="ua"
                inputClass={errors.phone ? styles.errorInput : ""}
                containerClass={styles.phoneInputContainer}
                buttonClass={styles.phoneInputButton}
                dropdownClass={styles.phoneInputDropdown}
                onChange={(value) => setValue("phone", value)}
                value={watch("phone")}
                placeholder="000-000-0000"
              />
              {errors.phone && (
                <p className={styles.error}>{errors.phone.message}</p>
              )}
            </div>
            <div className={styles.formGroup + " " + styles.role}>
              <label htmlFor="role">Your Role:</label>
              <div className={styles.radioGroup}>
                {roleOptions.map((option) => (
                  <label key={option.value} className={styles.radioOption}>
                    <input
                      type="radio"
                      id={`role-${option.value}`}
                      value={option.value}
                      {...register("role")}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
              {errors.role && (
                <p className={styles.error}>{errors.role.message}</p>
              )}
            </div>
            <div className={styles.formGroup + " " + styles.message}>
              <label htmlFor="message">Your Message:</label>
              <input
                type="text"
                {...register("message")}
                placeholder="Type here..."
              />
              {errors.message && (
                <p className={styles.error}>{errors.message.message}</p>
              )}
            </div>

            <div className={styles.bottom}>
              <div className={styles.terms}>
                <input type="checkbox" {...register("terms")} />
                <label htmlFor="terms">
                  I agree to the Terms and Conditions and Privacy Policy and
                  acknowledge that my information will be securely stored in
                  compliance with these policies.
                </label>
                {errors.terms && (
                  <p className={styles.error}>{errors.terms.message}</p>
                )}
              </div>
              <Button url="" type="submit" buttonType="submit" color="black">
                {isLoading ? "Submitting..." : "Apply Now"}
              </Button>
            </div>
          </form>
        </div>
      )}
      {isSuccess && <ContactFormSuccess onClose={() => setIsSuccess(false)} />}
    </>
  );
};
