'use client';
import { useRef } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Navigation } from 'swiper/modules';
import { Swiper, type SwiperRef, SwiperSlide } from 'swiper/react';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { SectionTitle } from '@/shared/ui/kit/section-title/SectionTitle';
import { Tag } from '@/shared/ui/kit/tag/Tag';

import styles from './OurValues.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';

export const OurValues = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const t = useTranslations();

  const values = [
    {
      icon: '/images/who-we-are/our-values/icon1.svg',
      title: t('whoWeAre.ourValues.items.item1.title'),
      text1: t('whoWeAre.ourValues.items.item1.text1'),
      text2: t('whoWeAre.ourValues.items.item1.text2'),
    },
    {
      icon: '/images/who-we-are/our-values/icon2.svg',
      title: t('whoWeAre.ourValues.items.item2.title'),
      text1: t('whoWeAre.ourValues.items.item2.text1'),
      text2: t('whoWeAre.ourValues.items.item2.text2'),
    },
    {
      icon: '/images/who-we-are/our-values/icon3.svg',
      title: t('whoWeAre.ourValues.items.item3.title'),
      text1: t('whoWeAre.ourValues.items.item3.text1'),
      text2: t('whoWeAre.ourValues.items.item3.text2'),
    },
    {
      icon: '/images/who-we-are/our-values/icon4.svg',
      title: t('whoWeAre.ourValues.items.item4.title'),
      text1: t('whoWeAre.ourValues.items.item4.text1'),
      text2: t('whoWeAre.ourValues.items.item4.text2'),
    },
  ];

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className={styles.ourValues}>
      <div className="_container">
        <div className={styles.titleBlock}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Tag color="white">{t('whoWeAre.ourValues.tag')}</Tag>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle>{t('whoWeAre.ourValues.title')}</SectionTitle>
          </motion.div>
        </div>
        <div className={styles.values}>
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className={styles.swiper}
            loop={true}
            speed={500}
          >
            {values.map((value) => (
              <SwiperSlide key={value.title}>
                <motion.div className={styles.value}>
                  <div className={styles.valueTop}>
                    <Image src={value.icon || ''} alt={value.title} width={48} height={48} />
                    <h3>{value.title}</h3>
                  </div>
                  <div className={styles.valueBottom}>
                    <p>{value.text1}</p>
                    <p>{value.text2}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.arrows}>
          <button className={styles.arrowPrev} onClick={handlePrevClick}>
            <Image
              src={'/images/who-we-are/our-values/prev.svg'}
              height={48}
              width={48}
              alt="prev"
            />
          </button>
          <button className={styles.arrowNext} onClick={handleNextClick}>
            <Image
              src={'/images/who-we-are/our-values/next.svg'}
              height={48}
              width={48}
              alt="next"
            />
          </button>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.approach}
        >
          <div>
            <Tag color="white">{t('whoWeAre.ourValues.tag')}</Tag>
            <SectionTitle>{t('whoWeAre.ourValues.approachTitle')}</SectionTitle>
          </div>
          <div>
            <p>{t('whoWeAre.ourValues.text1')}</p>
          </div>
          <div>
            <p>{t('whoWeAre.ourValues.text2')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
