"use client";
import Image from "next/image";
import { useTranslate } from "@tolgee/react";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./WhoWeAreHero.module.scss";

export const WhoWeAreHero = () => {
  const { t } = useTranslate();
  return (
    <section className={styles.whoWeAreHero}>
      <div className={"_container"}>
        <div className={styles.whoWeAreHeroTop}>
          <div className={styles.whoWeAreHeroTopLeft}>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("whoWeAre.hero.title")}
            </motion.h1>
          </div>
          <div className={styles.whoWeAreHeroTopRight}>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("whoWeAre.hero.text1")}
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("whoWeAre.hero.text2")}
            </motion.p>
          </div>
        </div>
        <div className={styles.whoWeAreHeroBottom}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.whoWeAreHeroBottomLeft}
          >
            <div>
              <Image
                src="/images/who-we-are/hero/icon1.svg"
                alt="Who We Are"
                width={48}
                height={48}
              />
              <h3>{t("whoWeAre.hero.missionTitle")}</h3>
            </div>
            <p>
              {t("whoWeAre.hero.missionText1")}
            </p>
            <p>
              {t("whoWeAre.hero.missionText2")}
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.whoWeAreHeroBottomLeft}
          >
            <div>
              <Image
                src="/images/who-we-are/hero/icon2.svg"
                alt="Who We Are"
                width={48}
                height={48}
              />
              <h3>{t("whoWeAre.hero.visionTitle")}</h3>
            </div>
            <p>
              {t("whoWeAre.hero.visionText1")}
            </p>
            <p>
              {t("whoWeAre.hero.visionText2")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
