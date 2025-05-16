'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './WhyChoose.module.scss';

export const WhyChoose = () => {
  const t = useTranslations();
  const experience = [
    {
      title: t('partnerWithUs.whyChoose.items.item1.title'),
      description: t('partnerWithUs.whyChoose.items.item1.description'),
    },
    {
      title: t('partnerWithUs.whyChoose.items.item2.title'),
      description: t('partnerWithUs.whyChoose.items.item2.description'),
    },
    {
      title: t('partnerWithUs.whyChoose.items.item3.title'),
      description: t('partnerWithUs.whyChoose.items.item3.description'),
    },
    {
      title: t('partnerWithUs.whyChoose.items.item4.title'),
      description: t('partnerWithUs.whyChoose.items.item4.description'),
    },
    {
      title: t('partnerWithUs.whyChoose.items.item5.title'),
      description: t('partnerWithUs.whyChoose.items.item5.description'),
    },
    {
      title: t('partnerWithUs.whyChoose.items.item6.title'),
      description: t('partnerWithUs.whyChoose.items.item6.description'),
    },
  ];
  return (
    <section className={styles.whyChoose}>
      <div className={'_container'}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t('partnerWithUs.whyChoose.title')}
        </motion.h2>
        <div className={styles.whyChooseList}>
          {experience.map((item, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              key={index}
              className={styles.whyChooseItem}
            >
              <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
