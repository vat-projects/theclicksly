'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './HowItWorks.module.scss';

export const HowItWorks = () => {
  const t = useTranslations();
  const experience = [
    {
      title: t('partnerWithUs.howItWorks.items.item1.title'),
      description: t('partnerWithUs.howItWorks.items.item1.description'),
    },
    {
      title: t('partnerWithUs.howItWorks.items.item2.title'),
      description: t('partnerWithUs.howItWorks.items.item2.description'),
    },
    {
      title: t('partnerWithUs.howItWorks.items.item3.title'),
      description: t('partnerWithUs.howItWorks.items.item3.description'),
    },
    {
      title: t('partnerWithUs.howItWorks.items.item4.title'),
      description: t('partnerWithUs.howItWorks.items.item4.description'),
    },
  ];

  return (
    <section className={styles.howItWorks}>
      <div className={'_container'}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t('partnerWithUs.howItWorks.title')}
        </motion.h2>
        <div className={styles.howItWorksList}>
          {experience.map((item, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              key={index}
              className={styles.experienceItem}
            >
              <span className={styles.number}>
                <span>0{index + 1}</span>
              </span>
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
