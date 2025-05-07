"use client";
import {useTranslations} from 'next-intl';
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import { SectionSubtitle } from "@/shared/ui/kit/section-subtitle/SectionSubtitle";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";

import styles from "./SuccessStories.module.scss";

export const SuccessStories = () => {
  const t = useTranslations();

  return (
    <section className={styles.successStories}>
      <div className="_container">
        <div className={styles.titleBlock}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle>{t("whoWeAre.successStories.title")}</SectionTitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionSubtitle>
              {t("whoWeAre.successStories.text")}
            </SectionSubtitle>
          </motion.div>
        </div>
        <div className={styles.row}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.col1}
          >
            <h2>
              {t("whoWeAre.successStories.testimonial")}
              <span>— {t("whoWeAre.successStories.testimonialAuthor")}</span>
            </h2>
          </motion.div>
          <div className={styles.col2}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.successStory}
            >
              <div>
                <h3>200%+</h3>
                <p>{t("whoWeAre.successStories.items.item1.title")}</p>
              </div>
              <div>
                <p>
                  {t("whoWeAre.successStories.items.item1.text")}
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.successStory}
            >
              <div>
                <h3>+50%</h3>
                <p>{t("whoWeAre.successStories.items.item2.title")}</p>
              </div>
              <div>
                <p>{t("whoWeAre.successStories.items.item2.text")}</p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.successStory}
            >
              <div>
                <h3>+95%</h3>
                <p>{t("whoWeAre.successStories.items.item3.title")}</p>
              </div>
              <div>
                <p>{t("whoWeAre.successStories.items.item3.text")}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
