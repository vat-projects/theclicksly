"use client";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./GetHero.module.scss";

export const GetHero = () => {
  return (
    <section className={styles.getHero}>
      <div className="_container">
        <div className={styles.getHeroContent}>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Get in Touch with Us
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            We’re here to assist you! Whether you have a question about our
            services, need support, or want to explore partnership
            opportunities, our team is ready to help. Contact us through the
            options below or fill out the contact form to get in touch directly.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
