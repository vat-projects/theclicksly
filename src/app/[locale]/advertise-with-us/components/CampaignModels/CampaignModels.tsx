"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import { SectionSubtitle } from "@/shared/ui/kit/section-subtitle/SectionSubtitle";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";

import styles from "./CampaignModels.module.scss";

export const CampaignModels = () => {
  const t = useTranslations();
  const locale = useLocale();
  const steps = [
    {
      id: 1,
      
      title: t("advertiseWithUs.campaignModels.items.item2.title"),
      description: t("advertiseWithUs.campaignModels.items.item2.description"),
    },
    {
      id: 2,
      title: t("advertiseWithUs.campaignModels.items.item1.title"),
      description: t("advertiseWithUs.campaignModels.items.item1.description"),
    },
    {
      id: 3,
      title: t("advertiseWithUs.campaignModels.items.item3.title"),
      description: t("advertiseWithUs.campaignModels.items.item3.description"),
    },
    {
      id: 4,
      title: t("advertiseWithUs.campaignModels.items.item4.title"),
      description: t("advertiseWithUs.campaignModels.items.item4.description"),
    },
  ];

  return (
    <section className={styles.campaignModels + " " + styles[locale]}>
      <div className="_container">
        <div className={styles.titleBlock}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle>
              {t("advertiseWithUs.campaignModels.title")}
            </SectionTitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionSubtitle>
              {t("advertiseWithUs.campaignModels.subtitle")}
            </SectionSubtitle>
          </motion.div>
        </div>
      </div>
      <div className={styles.stepsWrap}>
        <Image
          src="/images/advertise/way.png"
          alt="way"
          width={1486}
          height={856}
        />
        <Image
          src="/images/advertise/wayMobile1.png"
          alt="way"
          width={406}
          height={456}
        />
        <Image
          src="/images/advertise/wayMobile2.png"
          alt="way"
          width={300}
          height={253}
        />
        <Image
          src="/images/advertise/wayMobile3.png"
          alt="way"
          width={335}
          height={126}
        />
        <div className={"_container"}>
          <div className={styles.steps}>
            {steps.map((step) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.step}
                key={step.id}
              >
                <div className={styles.stepNumber}>0{step.id}</div>
                <div className={styles.stepContent}>
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: step.title,
                    }}
                  />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: step.description,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
