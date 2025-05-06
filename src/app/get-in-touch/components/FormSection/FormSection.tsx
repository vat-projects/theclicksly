"use client";
import { useTranslate } from "@tolgee/react";
import { motion } from "framer-motion";

import { ContactForm } from "@/features/contact-form/ui/ContactForm";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./FormSection.module.scss";

export const FormSection = () => {
  const { t } = useTranslate();
  return (
    <section className={styles.formSection}>
      <div className="_container">
        <div className={styles.formSectionInner}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            s{t("getInTouch.formSection.title")}
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p
              dangerouslySetInnerHTML={{
                __html: t("getInTouch.formSection.text1"),
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: t("getInTouch.formSection.text2"),
              }}
            />
          </motion.div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};
