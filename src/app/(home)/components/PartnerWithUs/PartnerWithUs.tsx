"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/kit/button/Button";
import { SectionSubtitle } from "@/shared/ui/kit/section-subtitle/SectionSubtitle";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";
import { Tag } from "@/shared/ui/kit/tag/Tag";

import styles from "./PartnerWithUs.module.scss";

export const PartnerWithUs = () => {
  const items = [
    {
      text: "Continuous demand for ad space to maximize your earnings.",
      image: "/images/home/partner-with-us/image1.svg",
    },
    {
      text: "Flexible cooperation models tailored to your preferences.",
      image: "/images/home/partner-with-us/image2.svg",
    },
    {
      text: "Strong, long-term partnerships for consistent success.",
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
            <Tag color="grey">What We Offer</Tag>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle>Partner With Us – Unlock Your Potential</SectionTitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionSubtitle>
              Monetize your site traffic with exclusive, high-demand campaigns
              from our trusted advertiser partners.
            </SectionSubtitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Button url="/partner-with-us" type="link" color="black">
              Become Our Partner
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
