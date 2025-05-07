"use client";
import {useTranslations} from 'next-intl';
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import { SectionSubtitle } from "@/shared/ui/kit/section-subtitle/SectionSubtitle";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";

import styles from "./OurPublisher.module.scss";


export const OurPublisher = () => {
  const t = useTranslations();

  const requirements = [
    {
      id: 1,
      title: t("partnerWithUs.ourPublisher.items.item1.title"),
      description:
        t("partnerWithUs.ourPublisher.items.item1.description"),
    },
    {
      id: 2,
      title: t("partnerWithUs.ourPublisher.items.item2.title"),
      description:
        t("partnerWithUs.ourPublisher.items.item2.description"),
    },
    {
      id: 3,
      title: t("partnerWithUs.ourPublisher.items.item3.title"),
      description:
        t("partnerWithUs.ourPublisher.items.item3.description"),
    },
    {
      id: 4,
      title: t("partnerWithUs.ourPublisher.items.item4.title"),
      description:
        t("partnerWithUs.ourPublisher.items.item4.description"),
    },
    {
      id: 5,
      title: t("partnerWithUs.ourPublisher.items.item5.title"),
      description:
        t("partnerWithUs.ourPublisher.items.item5.description"),
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
            <SectionTitle>{t("partnerWithUs.ourPublisher.title")}</SectionTitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionSubtitle>
              {t("partnerWithUs.ourPublisher.subtitle")}
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
