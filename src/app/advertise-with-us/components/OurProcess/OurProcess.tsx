"use client";
import Image from "next/image";
import { useTranslate } from "@tolgee/react";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";

import styles from "./OurProcess.module.scss";

export const OurProcess = () => {
  const { t } = useTranslate();
  const items = [
    {
      title: t("advertiseWithUs.ourProcess.items.item1.title"),
      text: t("advertiseWithUs.ourProcess.items.item1.text"),
      image: "/images/advertise/process/image1.png",
    },
    {
      title: t("advertiseWithUs.ourProcess.items.item2.title"),
      text: t("advertiseWithUs.ourProcess.items.item2.text"),
      image: "/images/advertise/process/image2.png",
    },
    {
      title: t("advertiseWithUs.ourProcess.items.item3.title"),
      text: t("advertiseWithUs.ourProcess.items.item3.text"),
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
            <SectionTitle>{t("advertiseWithUs.ourProcess.title")}</SectionTitle>
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
