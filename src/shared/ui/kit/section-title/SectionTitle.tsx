import styles from "./SectionTitle.module.scss";

export const SectionTitle = ({ children }: { children: React.ReactNode }) => {
    return (
        <h2 className={styles.sectionTitle}>
            {children}
        </h2>
    )
}
