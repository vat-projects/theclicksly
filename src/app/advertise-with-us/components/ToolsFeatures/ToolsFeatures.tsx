"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./ToolsFeatures.module.scss";

export const ToolsFeatures = () => {
  const experience = [
    {
      icon: "/images/advertise/tools-features/icon1.svg",
      title: "Real-Time Campaign Monitoring",
      description:
        "Keep track of your campaign performance in real time, allowing you to make quick adjustments and maximize effectiveness.",
    },
    {
      icon: "/images/advertise/tools-features/icon2.svg",
      title: "Performance Source Analysis",
      description:
        "Understand which traffic sources drive the best results and optimize your campaigns for maximum reach.",
    },
    {
      icon: "/images/advertise/tools-features/icon3.svg",
      title: "Detailed Conversion Insights",
      description:
        "Gain in-depth analysis of your conversions to improve your campaigns’ performance continually.",
    },
    {
      icon: "/images/advertise/tools-features/icon4.svg",
      title: "Fraud Prevention & Alerts",
      description:
        "Protect your investment with advanced fraud detection tools that notify you of suspicious activity.",
    },
    {
      icon: "/images/advertise/tools-features/icon5.svg",
      title: "Geo-Targeting & Device Optimization",
      description:
        "Reach your ideal audience at the right time and place by targeting specific geographic regions and devices to optimize ROI.",
    },
  ];

  return (
    <section className={styles.toolsFeatures}>
      <div className={"_container"}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Our Tools & Features
        </motion.h2>
        <div className={styles.toolsFeaturesList}>
          {experience.map((item, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              key={index}
              className={styles.experienceItem}
            >
              <Image
                src={item.icon || ""}
                alt={item.title}
                width={48}
                height={48}
              />
              <div>
                <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
