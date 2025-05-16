'use client';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import {
  WEBSITE_EMAIL,
  WEBSITE_OFFICE_ADDRESS,
  WEBSITE_PHONE,
  WEBSITE_REGISTRATION_ADDRESS,
} from '@/shared/lib/constants/constants';
import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './ContactInformation.module.scss';

export const ContactInformation = () => {
  const t = useTranslations();
  return (
    <section className={styles.contactInformation}>
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t('getInTouch.contactInformation.title')}
        </motion.h2>
        <div className={styles.contactInformationInner}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.address}
          >
            <div className={styles.addressTop}>
              <h3
                dangerouslySetInnerHTML={{
                  __html: t('getInTouch.contactInformation.office'),
                }}
              />
              <Image src="/images/get-in-touch/location.svg" alt="address" width={48} height={48} />
            </div>
            <div className={styles.addressBottom}>
              <p>{WEBSITE_OFFICE_ADDRESS}</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.33979297357!2d-0.05980932383362604!3d51.5436680080538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ce5a1dd59ab%3A0x5bd0d2905b885284!2s205%20Richmond%20Rd%2C%20London%20E8%203FF!5e0!3m2!1sen!2suk!4v1747127735643!5m2!1sen!2suk"
                width="192"
                height="136"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.address}
          >
            <div className={styles.addressTop}>
              <h3
                dangerouslySetInnerHTML={{
                  __html: t('getInTouch.contactInformation.registered'),
                }}
              />
              <Image src="/images/get-in-touch/location.svg" alt="address" width={48} height={48} />
            </div>
            <div className={styles.addressBottom}>
              <p>{WEBSITE_REGISTRATION_ADDRESS}</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.308779930173!2d-64.62264552529422!3d18.424284172109402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0577eab3ed6ad9%3A0x835ad2b51ce679a2!2sINTERSHORE%20CONSULT%20(BVI)%20LTD.!5e0!3m2!1sen!2sua!4v1746445569732!5m2!1sen!2sua"
                width="192"
                height="136"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.contacts}
          >
            <div className={styles.item}>
              <div className={styles.contactTop}>
                <h3>{t('getInTouch.contactInformation.email')}</h3>
                <Image src="/images/get-in-touch/email.svg" alt="address" width={48} height={48} />
              </div>
              <div className={styles.contactBottom}>
                <Link href={`mailto:${WEBSITE_EMAIL}`}>{WEBSITE_EMAIL}</Link>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.contactTop}>
                <h3>{t('getInTouch.contactInformation.phone')}</h3>
                <Image src="/images/get-in-touch/phone.svg" alt="address" width={48} height={48} />
              </div>
              <div className={styles.contactBottom}>
                <Link href={`tel:${WEBSITE_PHONE}`}>{WEBSITE_PHONE}</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
