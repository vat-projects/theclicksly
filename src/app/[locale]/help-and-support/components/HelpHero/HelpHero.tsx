"use client";
import {useTranslations} from 'next-intl';
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./HelpHero.module.scss";

export const HelpHero = () => {
  const t = useTranslations();
  return (
    <section className={styles.helpHero}>
      <div className="_container">
        <div className={styles.helpHeroContent}>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t("helpAndSupport.hero.title")}
          </motion.h1>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t("helpAndSupport.hero.subtitle")}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t("helpAndSupport.hero.text")}
          </motion.p>
        </div>
      </div>
    </section>
  );
};
