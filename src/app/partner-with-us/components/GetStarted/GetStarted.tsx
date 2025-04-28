"use client";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/kit/button/Button";
import { SectionSubtitle } from "@/shared/ui/kit/section-subtitle/SectionSubtitle";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";

import styles from "./GetStarted.module.scss";

export const GetStarted = () => {
  return (
    <section className={styles.getStarted}>
      <div className="_container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.titleBlock}
        >
          <SectionTitle>Get Started with The Clicksly Network</SectionTitle>
          <SectionSubtitle>
            Join our network today and start earning revenue with
            high-converting affiliate campaigns!
          </SectionSubtitle>
          <Button type="link" color="black" url="/registration-form">
            Join Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
