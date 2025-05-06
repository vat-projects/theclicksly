"use client";
import { useTranslate } from "@tolgee/react";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./ClientTestimonials.module.scss";

export const ClientTestimonials = () => {
  const { t } = useTranslate();
  return (
    <section className={styles.clientTestimonials}>
      <div className="_container">
        <div className={styles.body}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t("targetedSectors.clientTestimonials.title")}
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.testimonialsItem}
          >
            <h3>{t("targetedSectors.clientTestimonials.items.item1.title")}</h3>
            <p>
              {t("targetedSectors.clientTestimonials.items.item1.text")}
              <b>
                {t("targetedSectors.clientTestimonials.items.item1.author")}
              </b>
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.testimonialsItem}
          >
            <h3>{t("targetedSectors.clientTestimonials.items.item2.title")}</h3>
            <p>
              {t("targetedSectors.clientTestimonials.items.item2.text")}
              <b>
                {t("targetedSectors.clientTestimonials.items.item2.author")}
              </b>
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.testimonialsItem}
          >
            <h3>{t("targetedSectors.clientTestimonials.items.item3.title")}</h3>
            <p>
              {t("targetedSectors.clientTestimonials.items.item3.text")}
              <b>
                {t("targetedSectors.clientTestimonials.items.item3.author")}
              </b>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
