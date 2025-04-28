import { CloseIcon } from "@/shared/ui/icons/close/close";

import styles from "./RegistrationForm.module.scss";

export const RegistrationFormSuccess = ({
  onClose,
}: {
  onClose: () => void;
}) => {
  return (
    <div className={styles.registrationFormSuccess}>
      <h2>
        Thanks for reaching out to join The Clicksly! We’ve received your
        request and will review it shortly. Stay tuned! 
      </h2>
      <button onClick={onClose}>
        <CloseIcon />
      </button>
    </div>
  );
};
