"use client";
import { useTranslate } from "@tolgee/react";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/kit/button/Button";
import { SectionSubtitle } from "@/shared/ui/kit/section-subtitle/SectionSubtitle";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";

import styles from "./NeedAssistance.module.scss";

export const NeedAssistance = () => {
  const { t } = useTranslate();
  return (
    <section className={styles.needAssistance}>
      <div className="_container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.titleBlock}
        >
          <SectionTitle>{t("targetedSectors.needAssistance.title")}</SectionTitle>
          <SectionSubtitle>
            {t("targetedSectors.needAssistance.text")}
          </SectionSubtitle>
          <Button type="link" color="black" url="/registration-form">
            {t("targetedSectors.needAssistance.button")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
