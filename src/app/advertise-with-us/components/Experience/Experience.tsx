"use client";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./Experience.module.scss";

export const Experience = () => {
  const experience = [
    {
      title: "Comprehensive <br/>Technical Support",
      description:
        "Access everything you need to ensure your campaigns run smoothly, with dedicated support and integration tools to enhance your affiliate marketing success.",
    },
    {
      title: "Robust <br/>Fraud Protection",
      description:
        "Our state-of-the-art fraud detection system protects your campaigns from invalid traffic, giving you peace of mind.",
    },
    {
      title: "Consistent Lead <br/>Generation",
      description:
        "Reach your target audience and meet your growth objectives with a consistent flow of qualified, high-quality leads tailored to your business.",
    },
    {
      title: "Tailored <br/>Creative Solutions",
      description:
        "We design custom promotional assets that reflect your brand’s identity and messaging, ensuring maximum impact and audience engagement.",
    },
    {
      title: "Ongoing <br/>Traffic Validation",
      description:
        "We rigorously monitor every click to ensure you receive only authentic, high-value traffic that converts.",
    },
    {
      title: "Flexible Campaign <br/>Frameworks",
      description:
        "Whether you’re looking to scale quickly or operate within a set budget, our adaptable campaign models are designed to suit your specific needs.",
    },
  ];
  return (
    <section className={styles.experience}>
      <div className={"_container"}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          What You’ll Experience
        </motion.h2>
        <div className={styles.experienceList}>
          {experience.map((item, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              key={index}
              className={styles.experienceItem}
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
