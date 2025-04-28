import { RegistrationForm } from "@/features/registration-form/ui/RegistrationForm";

import styles from "./RegistrationFormPage.module.scss";
export default function RegistrationFormPage() {
  return (
    <section className={styles.registrationFormPage}>
      <div className={"_container"}>
        <h1>Registration Form</h1>
        <RegistrationForm />
      </div>
    </section>
  );
}
