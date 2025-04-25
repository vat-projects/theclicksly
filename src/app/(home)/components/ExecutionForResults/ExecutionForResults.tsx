"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/kit/button/Button";
import { SectionSubtitle } from "@/shared/ui/kit/section-subtitle/SectionSubtitle";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";

import styles from "./ExecutionForResults.module.scss";

export const ExecutionForResults = () => {
  return (
    <section className={styles.executionForResults}>
      <div className="_container">
        <div className={styles.titleBlock}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle>
              The Clicksly Approach – Data-Backed Execution for Results
            </SectionTitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionSubtitle>
              Our marketing approach ensures that every strategy we implement is
              measurable and scalable. Here’s how we help businesses drive more
              leads, enhance customer loyalty, and increase ROI:
            </SectionSubtitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Button url="/" type="link" color="black">
              Get Help & Support
            </Button>
          </motion.div>
        </div>
        <div className={styles.row}>
          <div className={styles.col1}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.card}
            >
              <Image
                src="/images/home/execution-for-results/icon1.svg"
                alt="icon1"
                width={48}
                height={48}
              />
              <p>40% Increase in Customer Retention for Clients</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.card}
            >
              <Image
                src="/images/home/execution-for-results/icon1.svg"
                alt="icon1"
                width={48}
                height={48}
              />
              <p>2X Higher Engagement on Digital Campaigns</p>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.col2}
          >
            <Image
              src="/images/home/execution-for-results/image1.svg"
              alt="image1"
              width={600}
              height={200}
            />
            <p>85% Faster ROI Through Optimized Marketing Plans</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
