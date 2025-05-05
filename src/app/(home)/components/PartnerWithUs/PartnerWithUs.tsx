"use client";
import Image from "next/image";
import { useTranslate } from "@tolgee/react";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/kit/button/Button";
import { SectionSubtitle } from "@/shared/ui/kit/section-subtitle/SectionSubtitle";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";
import { Tag } from "@/shared/ui/kit/tag/Tag";

import styles from "./PartnerWithUs.module.scss";

export const PartnerWithUs = () => {
  const { t } = useTranslate();
  const items = [
    {
      text: t("home.partnerWithUs.items.continuousDemand"),
      image: "/images/home/partner-with-us/image1.svg",
    },
    {
      text: t("home.partnerWithUs.items.flexibleCooperation"),
      image: "/images/home/partner-with-us/image2.svg",
    },
    {
      text: t("home.partnerWithUs.items.strongLongTermPartnerships"),
      image: "/images/home/partner-with-us/image3.svg",
    },
  ];

  return (
    <section className={styles.partnerWithUs}>
      <div className="_container">
        <div className={styles.titleBlock}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Tag color="grey">{t("home.partnerWithUs.tag")}</Tag>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle>{t("home.partnerWithUs.title")}</SectionTitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionSubtitle>
              {t("home.partnerWithUs.subtitle")}
            </SectionSubtitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Button url="/partner-with-us" type="link" color="black">
              {t("home.partnerWithUs.button")}
            </Button>
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
              <Image
                src={item.image}
                alt={item.text}
                width={426}
                height={426}
              />
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
