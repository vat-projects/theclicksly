"use client";
import {useTranslations} from 'next-intl';
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./GetHero.module.scss";


export const GetHero = () => {
  const t = useTranslations();
  return (
    <section className={styles.getHero}>
      <div className="_container">
        <div className={styles.getHeroContent}>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t("getInTouch.hero.title")}
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t("getInTouch.hero.text")}
          </motion.p>
        </div>
      </div>
    </section>
  );
};
