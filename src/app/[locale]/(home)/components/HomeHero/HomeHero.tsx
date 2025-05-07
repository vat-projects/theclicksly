"use client";
import Image from "next/image";
import {useTranslations} from 'next-intl';
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/kit/button/Button";

import styles from "./HomeHero.module.scss";

export const HomeHero = () => {
  const t = useTranslations();
  return (
    <section className={styles.homeHero}>
      <div className="_container">
        <div className={styles.homeHeroTop}>
          <div className={styles.homeHeroTopLeft}>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("home.homeHero.title")}
            </motion.h1>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.homeHeroTopRight}
          >
            <h2>{t("home.homeHero.subtitle")}</h2>
            <Button url="/registration-form" type="link" color="green">
              {t("home.homeHero.joinNow")}
            </Button>
          </motion.div>
        </div>
        <div className={styles.homeHeroBottom}>
          <div className={styles.homeHeroBottomLeft}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.homeHeroBottomLeftItem}
            >
              <Image
                src="/images/home/hero/icon1.svg"
                alt="Smart Campaigns"
                width={48}
                height={48}
              />
              <p>{t("home.homeHero.features.smartCampaigns")}</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.homeHeroBottomLeftItem}
            >
              <Image
                src="/images/home/hero/icon2.svg"
                alt="Efficient Ad Placements"
                width={48}
                height={48}
              />
              <p>{t("home.homeHero.features.efficientAdPlacements")}</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.homeHeroBottomLeftItem}
            >
              <Image
                src="/images/home/hero/icon3.svg"
                alt="Sustainable Growth"
                width={48}
                height={48}
              />
              <p>{t("home.homeHero.features.sustainableGrowth")}</p>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.homeHeroBottomRight}
          >
            <h3>{t("home.homeHero.subTitle2")}</h3>
            <p>{t("home.homeHero.description")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
