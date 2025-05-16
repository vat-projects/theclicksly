'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { SectionSubtitle } from '@/shared/ui/kit/section-subtitle/SectionSubtitle';
import { SectionTitle } from '@/shared/ui/kit/section-title/SectionTitle';

import styles from './TrafficSources.module.scss';

export const TrafficSources = () => {
  const t = useTranslations();
  const experience = [
    {
      icon: '/images/partners/traffic/icon1.svg',
      title: t('partnerWithUs.trafficSources.items.item1.title'),
    },
    {
      icon: '/images/partners/traffic/icon2.svg',
      title: t('partnerWithUs.trafficSources.items.item2.title'),
    },
    {
      icon: '/images/partners/traffic/icon3.svg',
      title: t('partnerWithUs.trafficSources.items.item3.title'),
    },
    {
      icon: '/images/partners/traffic/icon4.svg',
      title: t('partnerWithUs.trafficSources.items.item4.title'),
    },
    {
      icon: '/images/partners/traffic/icon5.svg',
      title: t('partnerWithUs.trafficSources.items.item5.title'),
    },
    {
      icon: '/images/partners/traffic/icon6.svg',
      title: t('partnerWithUs.trafficSources.items.item6.title'),
    },
    {
      icon: '/images/partners/traffic/icon7.svg',
      title: t('partnerWithUs.trafficSources.items.item7.title'),
    },
    {
      icon: '/images/partners/traffic/icon8.svg',
      title: t('partnerWithUs.trafficSources.items.item8.title'),
    },
    {
      icon: '/images/partners/traffic/icon9.svg',
      title: t('partnerWithUs.trafficSources.items.item9.title'),
    },
    {
      icon: '/images/partners/traffic/icon10.svg',
      title: t('partnerWithUs.trafficSources.items.item10.title'),
    },
  ];

  return (
    <section className={styles.trafficSources}>
      <div className={'_container'}>
        <div className={styles.titleBlock}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle>{t('partnerWithUs.trafficSources.title')}</SectionTitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionSubtitle>{t('partnerWithUs.trafficSources.subtitle')}</SectionSubtitle>
          </motion.div>
        </div>
        <div className={styles.trafficSourcesWrapper}>
          <div className={styles.trafficSourcesList}>
            {experience.map((item, index) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                key={index}
                className={styles.experienceItem}
              >
                <Image src={item.icon || ''} alt={item.title} width={48} height={48} />
                <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
