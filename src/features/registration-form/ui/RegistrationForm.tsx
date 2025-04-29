"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/shared/ui/kit/button/Button";

import "react-phone-input-2/lib/style.css";
import { RegistrationFormSchema } from "../model/RegistrationForm.schema";
import styles from "./RegistrationForm.module.scss";
import { RegistrationFormSuccess } from "./RegistrationFormSuccess";

const roleOptions = [
  { value: "advertiser", label: "Advertiser" },
  { value: "publisher", label: "Publisher" },
];

export const RegistrationForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);

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
    console.log(data);
    setIsSuccess(true);
    reset();
  };

  return (
    <>
      {!isSuccess && (
        <div className={styles.registrationForm}>
          <h2>The Clicksly Registration Request</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Your Name:</label>
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
              <label htmlFor="role">Your Role:</label>
              <Select
                id="role"
                options={roleOptions}
                className={styles.select}
                classNamePrefix="select"
                onChange={(option) => setValue("role", option?.value || "")}
                placeholder="Select your role"
              />
              {errors.role && (
                <p className={styles.error}>{errors.role.message}</p>
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
              <label htmlFor="phone">Your Phone:</label>
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
            <div className={styles.formGroup + " " + styles.message}>
              <label htmlFor="message">Your Message:</label>
              <textarea
                {...register("message")}
                placeholder="Enter your message"
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
                Submit
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
