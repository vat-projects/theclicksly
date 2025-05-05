
import { useTranslate } from "@tolgee/react";

import { CloseIcon } from "@/shared/ui/icons/close/close";

import styles from "./RegistrationForm.module.scss";

export const RegistrationFormSuccess = ({
  onClose,
}: {
  onClose: () => void;
}) => {
  const { t } = useTranslate();

  return (
    <div className={styles.registrationFormSuccess}>
      <h2>{t("registrationForm.form.sucees")}</h2>
      <button onClick={onClose}>
        <CloseIcon />
      </button>
    </div>
  );
};
