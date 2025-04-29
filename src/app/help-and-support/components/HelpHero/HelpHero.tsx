"use client";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./HelpHero.module.scss";

export const HelpHero = () => {
  return (
    <section className={styles.helpHero}>
      <div className="_container">
        <div className={styles.helpHeroContent}>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Help & Support
          </motion.h1>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            We’re Here to Assist You – Providing the Guidance You Need
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            At The Clicksly, we prioritize your success. Whether you’re an
            advertiser looking to optimize your campaigns or a publisher aiming
            to maximize revenue, our dedicated support team is here to help you.
            Explore answers to frequently asked questions below, or reach out
            for personalized assistance.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
