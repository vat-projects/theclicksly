"use client";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/kit/button/Button";
import { SectionSubtitle } from "@/shared/ui/kit/section-subtitle/SectionSubtitle";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";

import styles from "./WhyChooseUs.module.scss";

export const WhyChooseUs = () => {
  const items = [
    {
      text: "Reduction in Marketing Spend Waste",
      value: "200",
      prefix: "%+",
    },
    {
      text: "Reduction in Unnecessary <br/> Marketing Spend",
      value: "30",
      prefix: "%+",
    },
    {
      text: "Client Satisfaction <br/>Rate",
      value: "95",
      prefix: "%",
    },
    {
      text: "Increase in Qualified Leads for Startups",
      value: "50",
      prefix: "%+",
    },
  ];

  return (
    <section className={styles.whyChooseUs}>
      <div className="_container">
        <div className={styles.titleBlock}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle>
              Why Choose The Clicksly for Your Affiliate Needs?
            </SectionTitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionSubtitle>
              Partner with The Clicksly and benefit from our expert guidance and
              robust strategies. We’re a forward-thinking agency committed to
              delivering results-driven campaigns and maximizing your affiliate
              potential. Here’s why our clients trust us:
            </SectionSubtitle>
          </motion.div>
        </div>
        <div className={styles.cardsBlock}>
          {items.map((item, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.card}
              key={index}
            >
              <span className={styles.number}>
                <span>0{index + 1}</span>
              </span>
              <div className={styles.valueBlock}>
                <span>{item.value}</span>
                {item.prefix}
              </div>
              <p dangerouslySetInnerHTML={{ __html: item.text }} />
            </motion.div>
          ))}
        </div>
        <div className={styles.buttonsBlock}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionSubtitle>
              Your Business Growth is Our Top Priority. Let’s Build Success
              Together!
            </SectionSubtitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Button url="/" type="link" color="black">
              Explore Our Sectors
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
