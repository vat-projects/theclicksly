"use client";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import { SectionSubtitle } from "@/shared/ui/kit/section-subtitle/SectionSubtitle";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";

import styles from "./OurPublisher.module.scss";

export const OurPublisher = () => {
  const requirements = [
    {
      id: 1,
      title: "Tier 1 Traffic",
      description:
        "At least 80% of your traffic must come from high-quality, Tier 1 sources to ensure premium engagement and performance.",
    },
    {
      id: 2,
      title: "Bounce Rate",
      description:
        "A bounce rate below 50% ensures visitors engage with your content, leading to better retention and conversions.",
    },
    {
      id: 3,
      title: "Unique Monthly Visits",
      description:
        "You must have at least 10,000 unique visits per month to ensure consistent, valuable traffic.",
    },
    {
      id: 4,
      title: "Click-Through Rate <br/>(CTR)",
      description:
        "A minimum CTR of 1.5% is required to demonstrate effective engagement and ad performance.",
    },
    {
      id: 5,
      title: "Malware-Free <br/>Traffic",
      description:
        "Only malware-free traffic is accepted to protect the integrity of campaigns and ensure a safe experience.",
    },
  ];

  return (
    <section className={styles.ourPublisher}>
      <div className={"_container"}>
        <div className={styles.titleBlock}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle>Our Publisher Requirements</SectionTitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionSubtitle>
              We accept publishers with traffic from many different sources. To
              ensure quality and performance, we ask for the following:
            </SectionSubtitle>
          </motion.div>
        </div>
        <div className={styles.row}>
          <div className={styles.col1}>
            {requirements.slice(0, 3).map((item) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                key={item.id}
                className={styles.item}
              >
                <span className={styles.number}>
                  <span>0{item.id}</span>
                </span>
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className={styles.col2}>
            {requirements.slice(3, 6).map((item) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                key={item.id}
                className={styles.item}
              >
                <span className={styles.number}>
                  <span>0{item.id}</span>
                </span>
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
