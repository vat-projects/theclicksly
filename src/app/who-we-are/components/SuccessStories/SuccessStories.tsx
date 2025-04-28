"use client";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import { SectionSubtitle } from "@/shared/ui/kit/section-subtitle/SectionSubtitle";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";

import styles from "./SuccessStories.module.scss";

export const SuccessStories = () => {
  return (
    <section className={styles.successStories}>
      <div className="_container">
        <div className={styles.titleBlock}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle>Our Success Stories</SectionTitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionSubtitle>
              The results speak for themselves. With a focus on driving
              engagement, conversions, and long-term growth, The Clicksly has
              helped numerous businesses achieve remarkable success:
            </SectionSubtitle>
          </motion.div>
        </div>
        <div className={styles.row}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.col1}
          >
            <h2>
              “The Clicksly team helped us scale our affiliate marketing efforts
              exponentially. Their expertise in driving high-quality traffic and
              converting leads has been invaluable.”{" "}
              <span>— Client Testimonial</span>
            </h2>
          </motion.div>
          <div className={styles.col2}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.successStory}
            >
              <div>
                <h3>200%+</h3>
                <p>Increase in Client Engagement</p>
              </div>
              <div>
                <p>
                  Through our affiliate campaigns, we’ve consistently seen
                  significant boosts in online engagement.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.successStory}
            >
              <div>
                <h3>+50%</h3>
                <p>Growth in Qualified Leads for Startups</p>
              </div>
              <div>
                <p>
                  Startups that worked with us saw a rapid increase in
                  high-quality leads, helping them scale faster.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.successStory}
            >
              <div>
                <h3>+95%</h3>
                <p>Client Satisfaction Rate</p>
              </div>
              <div>
                <p>
                  Our clients trust us; our commitment to their success shows in
                  our client feedback.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
