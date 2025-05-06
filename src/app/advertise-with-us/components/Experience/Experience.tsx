"use client";
import { useTranslate } from "@tolgee/react";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./Experience.module.scss";

export const Experience = () => {
  const { t } = useTranslate();

  const experience = [
    {
      title: t("advertiseWithUs.experience.items.item1.title"),
      description:
        t("advertiseWithUs.experience.items.item1.description"),
    },
    {
      title: t("advertiseWithUs.experience.items.item2.title"),
      description:
        t("advertiseWithUs.experience.items.item2.description"),
    },
    {
      title: t("advertiseWithUs.experience.items.item3.title"),
      description:
        t("advertiseWithUs.experience.items.item3.description"),
    },
    {
      title: t("advertiseWithUs.experience.items.item4.title"),
      description:
        t("advertiseWithUs.experience.items.item4.description"),
    },
    {
      title: t("advertiseWithUs.experience.items.item5.title"),
      description:
        t("advertiseWithUs.experience.items.item5.description"),
    },
    {
      title: t("advertiseWithUs.experience.items.item6.title"),
      description:
        t("advertiseWithUs.experience.items.item6.description"),
    },
  ];
  return (
    <section className={styles.experience}>
      <div className={"_container"}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t("advertiseWithUs.experience.title")}
        </motion.h2>
        <div className={styles.experienceList}>
          {experience.map((item, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              key={index}
              className={styles.experienceItem}
            >
              <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
