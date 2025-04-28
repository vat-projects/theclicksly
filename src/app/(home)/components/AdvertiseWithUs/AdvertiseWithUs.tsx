"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/kit/button/Button";
import { SectionSubtitle } from "@/shared/ui/kit/section-subtitle/SectionSubtitle";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";
import { Tag } from "@/shared/ui/kit/tag/Tag";

import styles from "./AdvertiseWithUs.module.scss";

export const AdvertiseWithUs = () => {
  const items = [
    {
      text: "A broad network of publishers across diverse sectors.",
      image: "/images/home/what-we-offer/image1.svg",
    },
    {
      text: "Quick ad placements to get your campaigns launched swiftly.",
      image: "/images/home/what-we-offer/image2.svg",
    },
    {
      text: "Customized strategies designed to fit your unique business needs.",
      image: "/images/home/what-we-offer/image3.svg",
    },
  ];

  return (
    <section className={styles.advertiseWithUs}>
      <div className="_container">
        <div className={styles.titleBlock}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Tag color="white">What We Offer</Tag>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle>Advertise With Us – Amplify Your Reach</SectionTitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionSubtitle>
              Connect with your ideal audience effortlessly through our trusted
              network of experienced publishers.
            </SectionSubtitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Button url="/advertise-with-us" type="link" color="green-white">
              Start Advertising Today
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
