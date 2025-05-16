'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import Button from '@/shared/ui/kit/button/Button';

import styles from './SectorsHero.module.scss';

export const SectorsHero = () => {
  const t = useTranslations();
  return (
    <section className={styles.sectorsHero}>
      <div className="_container">
        <div className={styles.sectorsHeroTop}>
          <div className={styles.sectorsHeroTopLeft}>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t('targetedSectors.hero.title')}
            </motion.h1>
          </div>
        </div>
        <div className={styles.sectorsHeroBottom}>
          <div className={styles.sectorsHeroBottomLeft}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.sectorsHeroBottomLeftItem}
            >
              <Image
                src="/images/targeted-sectors/heroIcon1.svg"
                alt="Smart Campaigns"
                width={48}
                height={48}
              />
              <p>{t('targetedSectors.hero.item1')}</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.sectorsHeroBottomLeftItem}
            >
              <Image
                src="/images/targeted-sectors/heroIcon2.svg"
                alt="Efficient Ad Placements"
                width={48}
                height={48}
              />
              <p>{t('targetedSectors.hero.item2')}</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.sectorsHeroBottomLeftItem}
            >
              <Image
                src="/images/targeted-sectors/heroIcon3.svg"
                alt="Sustainable Growth"
                width={48}
                height={48}
              />
              <p>{t('targetedSectors.hero.item3')}</p>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.sectorsHeroBottomRight}
          >
            <h3>{t('targetedSectors.hero.subtitle')}</h3>
            <Button url="/registration-form" type="link" color="green">
              {t('targetedSectors.hero.button')}
            </Button>
            <p>{t('targetedSectors.hero.text')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
