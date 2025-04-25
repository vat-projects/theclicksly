import styles from "./SectionSubtitle.module.scss";

export const SectionSubtitle = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <p className={styles.sectionSubtitle}>{children}</p>;
};
