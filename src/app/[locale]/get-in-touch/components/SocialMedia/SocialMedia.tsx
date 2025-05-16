'use client';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './SocialMedia.module.scss';

export const SocialMedia = () => {
  const t = useTranslations();
  return (
    <section className={styles.socialMedia}>
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t('getInTouch.socialsMedia.title')}
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t('getInTouch.socialsMedia.text')}
        </motion.p>
        <div className={styles.socialMediaInner}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.socialMediaItem}
          >
            <div className={styles.socialMediaItemTop}>
              <h3>Facebook</h3>
              <Link href="#">
                <Image
                  src="/images/get-in-touch/facebook.svg"
                  alt="address"
                  width={48}
                  height={48}
                />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.socialMediaItem}
          >
            <div className={styles.socialMediaItemTop}>
              <h3>Instagram</h3>
              <Link href="#">
                <Image
                  src="/images/get-in-touch/instagram.svg"
                  alt="address"
                  width={48}
                  height={48}
                />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.socialMediaItem}
          >
            <div className={styles.socialMediaItemTop}>
              <h3>Twitter</h3>
              <Link href="#">
                <Image src="/images/get-in-touch/x.svg" alt="address" width={48} height={48} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
