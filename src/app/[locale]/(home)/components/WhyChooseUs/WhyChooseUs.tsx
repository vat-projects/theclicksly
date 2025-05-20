'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import Button from '@/shared/ui/kit/button/Button';
import { SectionSubtitle } from '@/shared/ui/kit/section-subtitle/SectionSubtitle';
import { SectionTitle } from '@/shared/ui/kit/section-title/SectionTitle';

import styles from './WhyChooseUs.module.scss';

export const WhyChooseUs = () => {
  const t = useTranslations();
  const items = [
    {
      text: t('home.whyChooseUs.items.item1'),
      value: '200',
      prefix: '%+',
    },
    {
      text: t('home.whyChooseUs.items.item2'),
      value: '30',
      prefix: '%+',
    },
    {
      text: t('home.whyChooseUs.items.item3'),
      value: '95',
      prefix: '%',
    },
    {
      text: t('home.whyChooseUs.items.item4'),
      value: '50',
      prefix: '%+',
    },
  ];

  return (
    <section className={styles.whyChooseUs}>
      <div className="_container">
        <div className={styles.titleBlock}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle>{t('home.whyChooseUs.title')}</SectionTitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionSubtitle>{t('home.whyChooseUs.subtitle')}</SectionSubtitle>
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
              <span className={styles.number}>
                <span>0{index + 1}</span>
              </span>
              <div className={styles.valueBlock}>
                <span>{item.value}</span>
                {item.prefix}
              </div>
              <p dangerouslySetInnerHTML={{ __html: item.text }} />
            </motion.div>
          ))}
        </div>
        <div className={styles.buttonsBlock}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionSubtitle>{t('home.whyChooseUs.text')}</SectionSubtitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Button url="/targeted-sectors" type="link" color="black">
              {t('home.whyChooseUs.button')}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
