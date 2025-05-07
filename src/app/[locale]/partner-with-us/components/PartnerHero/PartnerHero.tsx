"use client";
import {useTranslations} from 'next-intl';
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/kit/button/Button";

import styles from "./PartnerHero.module.scss";

export const PartnerHero = () => {
  const t = useTranslations();
  return (
    <section className={styles.partnerHero}>
      <div className="_container">
        <div className={styles.partnerHeroTop}>
          <div className={styles.partnerHeroTopLeft}>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("partnerWithUs.hero.title")}
            </motion.h1>
            <div>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                {t("partnerWithUs.hero.text1")}
              </motion.p>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                {t("partnerWithUs.hero.text2")}
              </motion.p>
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.partnerHeroTopRight}
          >
            <h2>{t("partnerWithUs.hero.subtitle")}</h2>
            <Button url="/registration-form" type="link" color="green">
              {t("partnerWithUs.hero.button")}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
