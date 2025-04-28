"use client";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./WhyChoose.module.scss";

export const WhyChoose = () => {
  const experience = [
    {
      title: "Tailored Campaigns for Every Traffic Source",
      description:
        "Select from a diverse range of campaigns designed to match the specific audience and traffic types you work with, ensuring that your efforts pay off.",
    },
    {
      title: "Ready-to-Use Marketing Assets",
      description:
        "Access a suite of promotional tools, including banners, landing pages, and creatives, to help you get your campaigns up and running fast.",
    },
    {
      title: "Flexible Partnership Models",
      description:
        "Choose from various compensation models — CPA, CPL, RevShare, or hybrid options — designed to align with your business objectives.",
    },
    {
      title: "Reliable Tracking & Data Insights",
      description:
        "Our intuitive system provides detailed, actionable insights to help you fine-tune your campaigns and maximize your revenue.",
    },
    {
      title: "Dedicated Partner Support",
      description:
        "Our team is always here to support you, offering expert advice and assistance to help you optimize your campaigns and increase earnings.",
    },
    {
      title: "Proven Performance & High Conversions",
      description:
        "Join a network that consistently delivers high-converting campaigns with a track record of measurable success that ensures a solid return on your efforts.",
    },
  ];
  return (
    <section className={styles.whyChoose}>
      <div className={"_container"}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          What You’ll Experience
        </motion.h2>
        <div className={styles.whyChooseList}>
          {experience.map((item, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              key={index}
              className={styles.whyChooseItem}
            >
              <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
