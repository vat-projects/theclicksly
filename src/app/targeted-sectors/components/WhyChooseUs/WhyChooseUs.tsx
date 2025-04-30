"use client";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./WhyChooseUs.module.scss";

export const WhyChooseUs = () => {
  return (
    <section className={styles.whyChooseUs}>
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Why Choose Us for Your Business Sector?
        </motion.h2>
        <div className={styles.whyChooseUsRow}>
          <div className={styles.col}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.item}
            >
              <div>
                <h3>Tailored Strategies for Every Sector</h3>
                <span className={styles.number}>
                  <span>01</span>
                </span>
              </div>
              <p>
                Whether you’re in finance, health, tech, or any other industry,
                we provide strategies designed specifically for your market and
                audience needs.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.item}
            >
              <div>
                <h3>Proven Track Record of Success</h3>
                <span className={styles.number}>
                  <span>02</span>
                </span>
              </div>
              <p>
                With years of experience across various industries, we have a
                proven history of delivering results. We know what works and
                what doesn’t for each sector and apply that knowledge to every
                campaign.
              </p>
            </motion.div>
          </div>

          <div className={styles.central}>
            <h4>The Clicksly</h4>
          </div>

          <div className={styles.col}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.item}
            >
              <div>
                <h3>Innovative, Data-Driven Campaigns</h3>
                <span className={styles.number}>
                  <span>03</span>
                </span>
              </div>
              <p>
                Data powers our campaigns. We continuously analyze performance
                to optimize and refine strategies, ensuring you get the best
                possible results.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.item}
            >
              <div>
                <h3>Compliance and Quality Assurance</h3>
                <span className={styles.number}>
                  <span>04</span>
                </span>
              </div>
              <p>
                We understand the importance of industry compliance, especially
                in highly regulated sectors like finance and health. Our
                campaigns are designed to ensure that your business operates
                within industry standards while still achieving strong results.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
