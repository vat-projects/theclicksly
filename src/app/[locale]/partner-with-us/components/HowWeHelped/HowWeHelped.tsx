"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import { SectionSubtitle } from "@/shared/ui/kit/section-subtitle/SectionSubtitle";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";

import styles from "./HowWeHelped.module.scss";

export const HowWeHelped = () => {
  const t = useTranslations();

  return (
    <section className={styles.howWeHelped}>
      <div className="_container">
        <div className={styles.titleBlock}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle>{t("partnerWithUs.howWeHelped.title")}</SectionTitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionSubtitle>
              {t("partnerWithUs.howWeHelped.subtitle")}
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
              {t("partnerWithUs.howWeHelped.testimonial")}
              <span> {t("partnerWithUs.howWeHelped.testimonialAuthor")}</span>
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
                <Image
                  src={"/images/partners/1.svg"}
                  alt="how-we-helped"
                  width={48}
                  height={48}
                />
                <h3>{t("partnerWithUs.howWeHelped.items.item1.title")}</h3>
                <p>{t("partnerWithUs.howWeHelped.items.item1.description")}</p>
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
                <Image
                  src={"/images/partners/2.svg"}
                  alt="how-we-helped"
                  width={48}
                  height={48}
                />
                <h3>{t("partnerWithUs.howWeHelped.items.item2.title")}</h3>
                <p>{t("partnerWithUs.howWeHelped.items.item2.description")}</p>
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
                <Image
                  src={"/images/partners/3.svg"}
                  alt="how-we-helped"
                  width={48}
                  height={48}
                />
                <h3>{t("partnerWithUs.howWeHelped.items.item3.title")}</h3>
                <p>{t("partnerWithUs.howWeHelped.items.item3.description")}</p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.successStory}
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
