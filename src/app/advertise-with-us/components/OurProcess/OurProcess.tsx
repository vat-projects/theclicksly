"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";

import styles from "./OurProcess.module.scss";

export const OurProcess = () => {
  const items = [
    {
      title: "In-Depth Research",
      text: "We thoroughly analyze your market and audience, ensuring our strategy is based on accurate data.",
      image: "/images/advertise/process/image1.png",
    },
    {
      title: "Tailored Development",
      text: "From messaging to design, we build everything to maximize engagement and conversions, always focusing on your brand’s objectives.",
      image: "/images/advertise/process/image2.png",
    },
    {
      title: "Extensive Testing & Launch",
      text: "Before going live, we rigorously test each element to ensure flawless performance and that your campaign hits the ground running.",
      image: "/images/advertise/process/image3.png",
    },
  ];

  return (
    <section className={styles.ourProcess}>
      <div className="_container">
        <div className={styles.titleBlock}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle>Our Process</SectionTitle>
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
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Image
                  src={item.image}
                  alt={item.text}
                  width={426}
                  height={426}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
