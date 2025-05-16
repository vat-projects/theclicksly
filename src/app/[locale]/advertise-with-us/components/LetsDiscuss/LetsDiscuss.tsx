'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import Button from '@/shared/ui/kit/button/Button';
import { SectionSubtitle } from '@/shared/ui/kit/section-subtitle/SectionSubtitle';
import { SectionTitle } from '@/shared/ui/kit/section-title/SectionTitle';

import styles from './LetsDiscuss.module.scss';

export const LetsDiscuss = () => {
  const t = useTranslations();
  return (
    <section className={styles.letsDiscuss}>
      <div className="_container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.titleBlock}
        >
          <SectionTitle>{t('advertiseWithUs.needAssistance.title')}</SectionTitle>
          <SectionSubtitle>{t('advertiseWithUs.needAssistance.text')}</SectionSubtitle>
          <Button type="link" color="black" url="/registration-form">
            {t('advertiseWithUs.needAssistance.button')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
