"use client";
import Image from "next/image";
import {useTranslations} from 'next-intl';
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./ToolsFeatures.module.scss";


export const ToolsFeatures = () => {
  const t = useTranslations();
  const experience = [
    {
      icon: "/images/advertise/tools-features/icon1.svg",
      title: t("advertiseWithUs.toolsFeatures.items.item1.title"),
      description:
        t("advertiseWithUs.toolsFeatures.items.item1.description"),
    },
    {
      icon: "/images/advertise/tools-features/icon2.svg",
      title: t("advertiseWithUs.toolsFeatures.items.item2.title"),
      description:
        t("advertiseWithUs.toolsFeatures.items.item2.description"),
    },
    {
      icon: "/images/advertise/tools-features/icon3.svg",
      title: t("advertiseWithUs.toolsFeatures.items.item3.title"),
      description:
        t("advertiseWithUs.toolsFeatures.items.item3.description"),
    },
    {
      icon: "/images/advertise/tools-features/icon4.svg",
      title: t("advertiseWithUs.toolsFeatures.items.item4.title"),
      description:
        t("advertiseWithUs.toolsFeatures.items.item4.description"),
    },
    {
      icon: "/images/advertise/tools-features/icon5.svg",
      title: t("advertiseWithUs.toolsFeatures.items.item5.title"),
      description:
        t("advertiseWithUs.toolsFeatures.items.item5.description"),
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
          {t("advertiseWithUs.toolsFeatures.title")}
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
