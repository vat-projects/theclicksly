"use client";
import { useTranslate } from "@tolgee/react";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/kit/button/Button";
import { SectionSubtitle } from "@/shared/ui/kit/section-subtitle/SectionSubtitle";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";

import styles from "./JoinUs.module.scss";


export const JoinUs = () => {
  const { t } = useTranslate();

  return (
    <section className={styles.joinUs}>
      <div className="_container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.titleBlock}
        >
          <SectionTitle>{t("whoWeAre.joinUs.title")}</SectionTitle>
          <SectionSubtitle>
            {t("whoWeAre.joinUs.text1")}
          </SectionSubtitle>
          <SectionSubtitle>
            {t("whoWeAre.joinUs.text2")}
            <br />
            {t("whoWeAre.joinUs.text3")}
          </SectionSubtitle>
          <Button type="link" color="black" url="/registration-form">
            {t("whoWeAre.joinUs.button")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
