import Link from "next/link";

import { Arrow } from "../../icons/arrow/arrow";
import styles from "./Button.module.scss";

export default function Button({
  url,
  type,
  children,
  color = "black",
}: {
  url: string;
  type: string;
  children: React.ReactNode;
  color?: "black" | "green" | "green-white";
}) {
  if (type === "link") {
    return (
      <Link href={url} className={styles.button + " " + styles[color]}>
        <span>{children}</span>
        <div className={styles.arrow}>
          <Arrow />
        </div>
      </Link>
    );
  }
  return (
    <button className={styles.button + " " + styles[color]}>
      <span>{children}</span>
      <div className={styles.arrow}>
        <Arrow />
      </div>
    </button>
  );
}
