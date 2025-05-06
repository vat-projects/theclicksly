import { useTranslate } from "@tolgee/react";

import { CloseIcon } from "@/shared/ui/icons/close/close";

import styles from "./ContactForm.module.scss";

export const ContactFormSuccess = ({ onClose }: { onClose: () => void }) => {
  const { t } = useTranslate();
  return (
    <div className={styles.contactFormSuccess}>
      <h2>{t("registrationForm.form.sucees")}</h2>
      <button onClick={onClose}>
        <CloseIcon />
      </button>
    </div>
  );
};
