"use client";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./ClientTestimonials.module.scss";

export const ClientTestimonials = () => {
  return (
    <section className={styles.clientTestimonials}>
      <div className="_container">
        <div className={styles.body}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Client Testimonials
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.testimonialsItem}
          >
            <h3>Finance:</h3>
            <p>
              “The Clicksly helped us elevate our affiliate marketing campaigns,
              bringing in high-quality leads that have become long-term
              customers. Their expertise in the finance industry has made all
              the difference!”
              <b>— FinancePro Group</b>
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.testimonialsItem}
          >
            <h3>Health & Wellness:</h3>
            <p>
              “The team at The Clicksly has been instrumental in growing our
              online presence. Their targeted campaigns brought us new
              customers, and the results have been exceptional. We’ve seen a
              major increase in both traffic and sales!”
              <b>— PureHealth</b>
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.testimonialsItem}
          >
            <h3>Technology:</h3>
            <p>
              Thanks to The Clicksly’s team, our SaaS product is reaching a much
              wider audience. Their performance marketing and data analysis
              expertise has allowed us to drive highly qualified leads and
              achieve measurable results.”
              <b>— TechForward Solutions</b>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
