"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";

import styles from "./ClickslyAdvantage.module.scss";

export const ClickslyAdvantage = () => {
  const t = useTranslations();

  return (
    <section className={styles.clickslyAdvantage}>
      <div className="_container">
        <div className={styles.titleBlock}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle>
              {t("advertiseWithUs.clickslyAdvantage.title")}
            </SectionTitle>
          </motion.div>
        </div>
        <div className={styles.solutionsBlock}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.solutionsBlockItem}
          >
            <h3
              dangerouslySetInnerHTML={{
                __html: t(
                  "advertiseWithUs.clickslyAdvantage.items.item1.title"
                ),
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: t(
                  "advertiseWithUs.clickslyAdvantage.items.item1.description"
                ),
              }}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.solutionsBlockItem}
          >
            <h3
              dangerouslySetInnerHTML={{
                __html: t(
                  "advertiseWithUs.clickslyAdvantage.items.item2.title"
                ),
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: t(
                  "advertiseWithUs.clickslyAdvantage.items.item2.description"
                ),
              }}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.solutionsBlockItem}
          ></motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.solutionsBlockItem}
          >
            <h3
              dangerouslySetInnerHTML={{
                __html: t(
                  "advertiseWithUs.clickslyAdvantage.items.item3.title"
                ),
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: t(
                  "advertiseWithUs.clickslyAdvantage.items.item3.description"
                ),
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
