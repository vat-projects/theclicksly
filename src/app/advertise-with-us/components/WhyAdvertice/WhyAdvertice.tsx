"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";

import styles from "./WhyAdvertice.module.scss";

export const WhyAdvertice = () => {
  const solutions = [
    {
      title: "Insight-Driven <br/>Approach",
      description:
        "Every project begins with deep research, ensuring your campaign will be as effective as possible.",
      icon: "/images/advertise/why-advertise/icon1.svg",
    },
    {
      title: "Comprehensive <br/>Expertise",
      description:
        "From creative design to launch, we handle every step of the process seamlessly.",
      icon: "/images/advertise/why-advertise/icon2.svg",
    },
    {
      title: "Maximized <br/>Results",
      description:
        "Our development always focuses on delivering the best ROI for your affiliate marketing campaigns.",
      icon: "/images/advertise/why-advertise/icon3.svg",
    },
    {
      title: "Timely <br/>Delivery",
      description:
        "We pride ourselves on efficient, on-time project completion without compromising quality.",
      icon: "/images/home/affiliate-solutions/icon4.svg",
    },
  ];

  return (
    <section className={styles.whyAdvertice}>
      <div className="_container">
        <div className={styles.titleBlock}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle>Why Advertise With Us?</SectionTitle>
          </motion.div>
        </div>
        <div className={styles.solutionsBlock}>
          {solutions.map((solution, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.solutionsBlockItem}
              key={index}
            >
              <div className={styles.solutionsBlockItemTop}>
                <Image src={solution.icon} alt="icon" width={48} height={48} />
                <h3 dangerouslySetInnerHTML={{ __html: solution.title }} />
              </div>
              <p>{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
