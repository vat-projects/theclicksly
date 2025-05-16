'use client';
import { useRef, useState } from 'react';

import { useTranslations } from 'next-intl';

import { FaqArrow } from '@/shared/ui/icons/faqArrow/faqArrow';

import styles from './FaqSection.module.scss';

export const FaqSection = () => {
  const t = useTranslations();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: t('advertiseWithUs.faq.items.item1.question'),
      answer: t('advertiseWithUs.faq.items.item1.answer'),
    },
    {
      question: t('advertiseWithUs.faq.items.item2.question'),
      answer: t('advertiseWithUs.faq.items.item2.answer'),
    },
    {
      question: t('advertiseWithUs.faq.items.item3.question'),
      answer: t('advertiseWithUs.faq.items.item3.answer'),
    },
  ];

  return (
    <section className={`${styles.faqSection}`}>
      <div className="_container">
        <h2>{t('advertiseWithUs.faq.title')}</h2>
        <div className={styles.faqList}>
          {questions.map((question, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className={styles.faqHeader}>
                <h3>{question.question}</h3>
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
                <p>{question.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
