'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';

import { useTranslations } from 'next-intl';

import { FaqArrow } from '@/shared/ui/icons/faqArrow/faqArrow';
import Button from '@/shared/ui/kit/button/Button';

import styles from './Industries.module.scss';

export const Industries = () => {
  const t = useTranslations();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const industries = [
    {
      title: t('targetedSectors.industries.items.item1.title'),
      description: t('targetedSectors.industries.items.item1.description'),
    },
    {
      title: t('targetedSectors.industries.items.item2.title'),
      description: t('targetedSectors.industries.items.item2.description'),
    },
    {
      title: t('targetedSectors.industries.items.item3.title'),
      description: t('targetedSectors.industries.items.item3.description'),
    },
    {
      title: t('targetedSectors.industries.items.item4.title'),
      description: t('targetedSectors.industries.items.item4.description'),
    },
    {
      title: t('targetedSectors.industries.items.item5.title'),
      description: t('targetedSectors.industries.items.item5.description'),
    },
    {
      title: t('targetedSectors.industries.items.item6.title'),
      description: t('targetedSectors.industries.items.item6.description'),
    },
    {
      title: t('targetedSectors.industries.items.item7.title'),
      description: t('targetedSectors.industries.items.item7.description'),
    },
  ];

  return (
    <section className={`${styles.industries}`}>
      <div className="_container">
        <h2>{t('targetedSectors.industries.title')}</h2>
        <div className={styles.industriesBody}>
          <div className={styles.col1}>
            <div className={styles.faqList}>
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className={styles.faqHeader}>
                    <h3>{industry.title}</h3>
                    <div className={styles.arrow}>
                      <FaqArrow />
                    </div>
                  </div>
                  <div
                    className={styles.faqContent}
                    style={{
                      height: activeIndex === index ? contentRef.current?.scrollHeight : '0px',
                    }}
                  >
                    <p>{industry.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.col2}>
            <div className={styles.details}>
              <h2>{t('targetedSectors.industries.subtitle1')}</h2>
              <div>
                <p>{t('targetedSectors.industries.text1')}</p>
              </div>
            </div>
            <div className={styles.details}>
              <h2>{t('targetedSectors.industries.subtitle2')}</h2>
              <div>
                <p>{t('targetedSectors.industries.text2')}</p>
                <p>{t('targetedSectors.industries.text3')}</p>
                <Button url="/registration-form" type="link" color="green">
                  {t('targetedSectors.industries.button')}
                </Button>
              </div>
            </div>
            <div className={styles.image}>
              <Image src="/images/targeted-sectors/industryBack.png" alt="Industries" fill />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
