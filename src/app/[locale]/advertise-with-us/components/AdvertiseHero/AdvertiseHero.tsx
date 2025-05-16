'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import Button from '@/shared/ui/kit/button/Button';

import styles from './AdvertiseHero.module.scss';

export const AdvertiseHero = () => {
  const t = useTranslations();
  return (
    <section className={styles.advertiseHero}>
      <div className="_container">
        <div className={styles.advertiseHeroTop}>
          <div className={styles.advertiseHeroTopLeft}>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t('advertiseWithUs.hero.title')}
            </motion.h1>
            <div>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                {t('advertiseWithUs.hero.text1')}
              </motion.p>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                {t('advertiseWithUs.hero.text2')}
              </motion.p>
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.advertiseHeroTopRight}
          >
            <h2>{t('advertiseWithUs.hero.subtitle')}</h2>
            <Button url="/registration-form" type="link" color="green">
              {t('advertiseWithUs.hero.button')}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
