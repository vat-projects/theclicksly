"use client";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/kit/button/Button";
import { SectionSubtitle } from "@/shared/ui/kit/section-subtitle/SectionSubtitle";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";

import styles from "./JoinUs.module.scss";

export const JoinUs = () => {
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
          <SectionTitle>Join Us</SectionTitle>
          <SectionSubtitle>
            Are you ready to take your affiliate marketing strategy to the next
            level? Whether you’re an advertiser looking to expand your reach or
            a publisher ready to monetize your traffic, The Clicksly is here to
            help you grow.
          </SectionSubtitle>
          <SectionSubtitle>
            Let’s collaborate and achieve your business goals together.
            <br />
            Contact us today to get started!
          </SectionSubtitle>
          <Button type="link" color="black" url="/registration-form">
            Contact Us Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
