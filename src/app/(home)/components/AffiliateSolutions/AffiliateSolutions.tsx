"use client";
import Image from "next/image";
import { useTranslate } from '@tolgee/react';
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/kit/button/Button";
import { SectionSubtitle } from "@/shared/ui/kit/section-subtitle/SectionSubtitle";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";

import styles from "./AffiliateSolutions.module.scss";

export const AffiliateSolutions = () => {
  const { t } = useTranslate();
  const solutions = [
    {
      title: t("home.affiliateSolutions.solutions.enhanceVisibility.title"),
      description: t("home.affiliateSolutions.solutions.enhanceVisibility.description"),
      icon: "/images/home/affiliate-solutions/icon1.svg",
    },
    {
      title: t("home.affiliateSolutions.solutions.maximizeROI.title"),
      description: t("home.affiliateSolutions.solutions.maximizeROI.description"),
      icon: "/images/home/affiliate-solutions/icon2.svg",
    },
    {
      title: t("home.affiliateSolutions.solutions.driveQualityConversions.title"),
      description: t("home.affiliateSolutions.solutions.driveQualityConversions.description"),
      icon: "/images/home/affiliate-solutions/icon3.svg",
    },
    {
      title: t("home.affiliateSolutions.solutions.sustainableGrowth.title"),
      description: t("home.affiliateSolutions.solutions.sustainableGrowth.description"),
      icon: "/images/home/affiliate-solutions/icon4.svg",
    },
  ];

  return (
    <section className={styles.affiliateSolutions}>
      <div className="_container">
        <div className={styles.titleBlock}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle>
              {t("home.affiliateSolutions.title")}
            </SectionTitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionSubtitle>
              {t("home.affiliateSolutions.subtitle")}
            </SectionSubtitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Button url="/registration-form" type="link" color="black">
              {t("home.affiliateSolutions.button")}
            </Button>
          </motion.div>
        </div>
        <div className={styles.solutionsBlock}>
          {solutions.map((solution, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.solutionsBlockItem}
              key={index}
            >
              <div className={styles.solutionsBlockItemTop}>
                <Image src={solution.icon} alt="icon" width={48} height={48} />
                <h3>{solution.title}</h3>
              </div>
              <p>{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
