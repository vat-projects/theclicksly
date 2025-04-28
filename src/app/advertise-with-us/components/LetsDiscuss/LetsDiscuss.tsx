"use client";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/kit/button/Button";
import { SectionSubtitle } from "@/shared/ui/kit/section-subtitle/SectionSubtitle";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";

import styles from "./LetsDiscuss.module.scss";

export const LetsDiscuss = () => {
  return (
    <section className={styles.letsDiscuss}>
      <div className="_container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.titleBlock}
        >
          <SectionTitle>Let’s Discuss Your Project</SectionTitle>
          <SectionSubtitle>
            Ready to supercharge your affiliate campaigns?
          </SectionSubtitle>
          <Button type="link" color="black" url="/registration-form">
            Sign Up Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
