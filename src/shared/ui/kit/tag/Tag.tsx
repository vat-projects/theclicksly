import { Asterisk } from "@/shared/ui/icons/asterisk/asterisk";

import styles from "./Tag.module.scss";

export const Tag = ({
  children,
  color = "grey",
}: {
  children: React.ReactNode;
  color?: "grey" | "white";
}) => {
  return (
    <div className={styles.tag + " " + styles[color]}>
      <Asterisk />
      <span>{children}</span>
    </div>
  );
};
