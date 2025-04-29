"use client";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/kit/button/Button";
import { SectionSubtitle } from "@/shared/ui/kit/section-subtitle/SectionSubtitle";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";

import styles from "./NeedAssistance.module.scss";

export const NeedAssistance = () => {
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
          <SectionTitle>Need Further Assistance?</SectionTitle>
          <SectionSubtitle>
            If you didn’t find the answer to your question or need more
            personalized support, we’re here to help. Contact us directly, and
            our team will assist you with all your queries.
          </SectionSubtitle>
          <Button type="link" color="black" url="/get-in-touch">
            Contact Us Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
