"use client";
import {useTranslations} from 'next-intl';
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./WhyChooseUs.module.scss";

export const WhyChooseUs = () => {
  const t = useTranslations();
  return (
    <section className={styles.whyChooseUs}>
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t("targetedSectors.whyChooseUs.title")}
        </motion.h2>
        <div className={styles.whyChooseUsRow}>
          <div className={styles.col}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.item}
            >
              <div>
                <h3>{t("targetedSectors.whyChooseUs.items.item1.title")}</h3>
                <span className={styles.number}>
                  <span>01</span>
                </span>
              </div>
              <p>
                {t("targetedSectors.whyChooseUs.items.item1.text")}
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.item}
            >
              <div>
                <h3>{t("targetedSectors.whyChooseUs.items.item2.title")}</h3>
                <span className={styles.number}>
                  <span>02</span>
                </span>
              </div>
              <p>
                {t("targetedSectors.whyChooseUs.items.item2.text")}
              </p>
            </motion.div>
          </div>

          <div className={styles.central}>
            <h4>The Clicksly</h4>
          </div>

          <div className={styles.col}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.item}
            >
              <div>
                <h3>{t("targetedSectors.whyChooseUs.items.item3.title")}</h3>
                <span className={styles.number}>
                  <span>03</span>
                </span>
              </div>
              <p>
                {t("targetedSectors.whyChooseUs.items.item3.text")}
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.item}
            >
              <div>
                <h3>{t("targetedSectors.whyChooseUs.items.item4.title")}</h3>
                <span className={styles.number}>
                  <span>04</span>
                </span>
              </div>
              <p>
                {t("targetedSectors.whyChooseUs.items.item4.text")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
