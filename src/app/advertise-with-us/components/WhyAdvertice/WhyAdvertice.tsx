"use client";
import Image from "next/image";
import { useTranslate } from "@tolgee/react";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";

import styles from "./WhyAdvertice.module.scss";


export const WhyAdvertice = () => {
  const { t } = useTranslate();
  const solutions = [
    {
      title: t("advertiseWithUs.whyAdvertice.items.item1.title"),
      description:
        t("advertiseWithUs.whyAdvertice.items.item1.description"),
      icon: "/images/advertise/why-advertise/icon1.svg",
    },
    {
      title: t("advertiseWithUs.whyAdvertice.items.item2.title"),
      description:
        t("advertiseWithUs.whyAdvertice.items.item2.description"),
      icon: "/images/advertise/why-advertise/icon2.svg",
    },
    {
      title: t("advertiseWithUs.whyAdvertice.items.item3.title"),
      description:
        t("advertiseWithUs.whyAdvertice.items.item3.description"),
      icon: "/images/advertise/why-advertise/icon3.svg",
    },
    {
      title: t("advertiseWithUs.whyAdvertice.items.item4.title"),
      description:
        t("advertiseWithUs.whyAdvertice.items.item4.description"),
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
            <SectionTitle>{t("advertiseWithUs.whyAdvertice.title")}</SectionTitle>
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
