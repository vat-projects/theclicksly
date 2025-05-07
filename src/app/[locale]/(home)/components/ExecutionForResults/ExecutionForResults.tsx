"use client";
import Image from "next/image";
import {useTranslations} from 'next-intl';
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/kit/button/Button";
import { SectionSubtitle } from "@/shared/ui/kit/section-subtitle/SectionSubtitle";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";

import styles from "./ExecutionForResults.module.scss";

export const ExecutionForResults = () => {
  const t = useTranslations();
  return (
    <section className={styles.executionForResults}>
      <div className="_container">
        <div className={styles.titleBlock}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle>{t("home.executionForResults.title")}</SectionTitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionSubtitle>
              {t("home.executionForResults.subtitle")}
            </SectionSubtitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Button url="/help-and-support" type="link" color="black">
              {t("home.executionForResults.button")}
            </Button>
          </motion.div>
        </div>
        <div className={styles.row}>
          <div className={styles.col1}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.card}
            >
              <Image
                src="/images/home/execution-for-results/icon1.svg"
                alt="icon1"
                width={48}
                height={48}
              />
              <p>{t("home.executionForResults.items.item1")}</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.card}
            >
              <Image
                src="/images/home/execution-for-results/icon1.svg"
                alt="icon1"
                width={48}
                height={48}
              />
              <p>{t("home.executionForResults.items.item2")}</p>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.col2}
          >
            <Image
              src="/images/home/execution-for-results/image1.svg"
              alt="image1"
              width={600}
              height={200}
            />
            <p>{t("home.executionForResults.items.item3")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
