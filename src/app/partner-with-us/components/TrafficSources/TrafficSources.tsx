"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import { SectionSubtitle } from "@/shared/ui/kit/section-subtitle/SectionSubtitle";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";

import styles from "./TrafficSources.module.scss";

export const TrafficSources = () => {
  const experience = [
    {
      icon: "/images/partners/traffic/icon1.svg",
      title: "Social Media <br/>Platforms",
    },
    {
      icon: "/images/partners/traffic/icon2.svg",
      title: "Push <br/>Notifications",
    },
    {
      icon: "/images/partners/traffic/icon3.svg",
      title: "Native <br/>Ads",
    },
    {
      icon: "/images/partners/traffic/icon4.svg",
      title: "Video, Banners, <br/>Teasers",
    },
    {
      icon: "/images/partners/traffic/icon5.svg",
      title: "Organic Traffic <br/>(SEO)",
    },
    {
      icon: "/images/partners/traffic/icon6.svg",
      title: "Contextual <br/>and Display Ads",
    },
    {
      icon: "/images/partners/traffic/icon7.svg",
      title: "Email <br/>Marketing",
    },
    {
      icon: "/images/partners/traffic/icon8.svg",
      title: "Websites <br/>and Blogs",
    },
    {
      icon: "/images/partners/traffic/icon9.svg",
      title: "PPC <br/>Advertising",
    },
    {
      icon: "/images/partners/traffic/icon10.svg",
      title: "Click and <br/>Popunder Ads",
    },
  ];

  return (
    <section className={styles.trafficSources}>
      <div className={"_container"}>
        <div className={styles.titleBlock}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle>Traffic Sources We Accept</SectionTitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionSubtitle>
              We support a wide variety of traffic sources, making it easy for
              you to monetize your audience. Here are some of the options:
            </SectionSubtitle>
          </motion.div>
        </div>
        <div className={styles.trafficSourcesWrapper}>
          <div className={styles.trafficSourcesList}>
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
                <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
