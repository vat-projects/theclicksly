"use client";
import { useRef } from "react";
import Image from "next/image";
import {useTranslations} from 'next-intl';
import { motion } from "framer-motion";
import { Navigation } from "swiper/modules";
import { Swiper, type SwiperRef, SwiperSlide } from "swiper/react";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import { SectionSubtitle } from "@/shared/ui/kit/section-subtitle/SectionSubtitle";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./OurTeam.module.scss";

export const OurTeam = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const t = useTranslations();

  const team = [
    {
      icon: "/images/who-we-are/our-team/icon1.svg",
      title: t("whoWeAre.ourTeam.items.item1.title"),
      subtitle: t("whoWeAre.ourTeam.items.item1.subtitle"),
      text1: t("whoWeAre.ourTeam.items.item1.text1"),
      text2: t("whoWeAre.ourTeam.items.item1.text2"),
    },
    {
      icon: "/images/who-we-are/our-team/icon2.svg",
      title: t("whoWeAre.ourTeam.items.item2.title"),
      subtitle: t("whoWeAre.ourTeam.items.item2.subtitle"),
      text1: t("whoWeAre.ourTeam.items.item2.text1"),
      text2: t("whoWeAre.ourTeam.items.item2.text2"),
    },
    {
      icon: "/images/who-we-are/our-team/icon3.svg",
      title: t("whoWeAre.ourTeam.items.item3.title"),
      subtitle: t("whoWeAre.ourTeam.items.item3.subtitle"),
      text1: t("whoWeAre.ourTeam.items.item3.text1"),
      text2: t("whoWeAre.ourTeam.items.item3.text2"),
    },
    {
      icon: "/images/who-we-are/our-team/icon4.svg",
      title: t("whoWeAre.ourTeam.items.item4.title"),
      subtitle: t("whoWeAre.ourTeam.items.item4.subtitle"),
      text1: t("whoWeAre.ourTeam.items.item4.text1"),
      text2: t("whoWeAre.ourTeam.items.item4.text2"),
    },
    {
      icon: "/images/who-we-are/our-team/icon1.svg",
      title: t("whoWeAre.ourTeam.items.item5.title"),
      subtitle: t("whoWeAre.ourTeam.items.item5.subtitle"),
      text1: t("whoWeAre.ourTeam.items.item5.text1"),
      text2: t("whoWeAre.ourTeam.items.item5.text2"),
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
    <section className={styles.ourTeam}>
      <div className="_container">
        <div className={styles.titleBlock}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle>
              {t("whoWeAre.ourTeam.tag")}<br/>
              {t("whoWeAre.ourTeam.title")}
            </SectionTitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionSubtitle>
              {t("whoWeAre.ourTeam.text")}
            </SectionSubtitle>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.team}
        >
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={0}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className={styles.swiper}
            loop={true}
            speed={500}
          >
            {team.map((item) => (
              <SwiperSlide key={item.title}>
                <div className={styles.teamItem}>
                  <span className={styles.icon}>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={60}
                      height={48}
                    />
                  </span>
                  <div className={styles.teamItemContent}>
                    <div className={styles.teamItemTitle}>
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                    </div>
                    <ul className={styles.teamItemText}>
                      <li dangerouslySetInnerHTML={{ __html: item.text1 }} />
                      <li dangerouslySetInnerHTML={{ __html: item.text2 }} />
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        <div className={styles.arrows}>
          <button className={styles.arrowPrev} onClick={handlePrevClick}>
            <Image
              src={"/images/who-we-are/our-values/prev.svg"}
              height={48}
              width={48}
              alt="prev"
            />
          </button>
          <button className={styles.arrowNext} onClick={handleNextClick}>
            <Image
              src={"/images/who-we-are/our-values/next.svg"}
              height={48}
              width={48}
              alt="next"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
