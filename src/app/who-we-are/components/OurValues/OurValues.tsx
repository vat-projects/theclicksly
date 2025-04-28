"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navigation } from "swiper/modules";
import { Swiper, type SwiperRef, SwiperSlide } from "swiper/react";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";
import { Tag } from "@/shared/ui/kit/tag/Tag";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./OurValues.module.scss";

export const OurValues = () => {
  const swiperRef = useRef<SwiperRef>(null);

  const values = [
    {
      icon: "/images/who-we-are/our-values/icon1.svg",
      title: "Integrity & Transparency",
      text1:
        "We operate with honesty, ethics, and accountability in everything we do. Integrity is about adhering to legal standards and fostering trust through transparency and openness.",
      text2:
        "Our clients can rely on us to deliver truthful insights, clear communication, and ethical strategies, knowing we put their interests first. We believe that integrity is the foundation of lasting partnerships.",
    },
    {
      icon: "/images/who-we-are/our-values/icon2.svg",
      title: "Innovation & Excellence",
      text1:
        "Staying ahead of the curve is not just a goal but a continuous pursuit. We embrace change and challenge ourselves to think differently, creating innovative solutions that set new benchmarks in affiliate marketing.",
      text2:
        "By leveraging cutting-edge technology, we ensure our solutions remain relevant, adaptable, and practical. Innovation drives our business and allows us to provide high-impact strategies.",
    },
    {
      icon: "/images/who-we-are/our-values/icon3.svg",
      title: "Collaboration & Partnership",
      text1:
        "Success is never achieved in isolation. We view our clients, partners, and affiliates as collaborators, not just customers. Together, we foster a spirit of teamwork, communication, and shared objectives.",
      text2:
        " We work with our clients and partners to unlock opportunities and solve challenges. At The Clicksly, every project is a partnership aimed at mutual growth.",
    },
    {
      icon: "/images/who-we-are/our-values/icon4.svg",
      title: "Data-Driven Results",
      text1:
        "Every strategy we develop is rooted in data. We believe that real insights, not guesswork, should inform decisions. From performance metrics to consumer behavior, we use data to optimize every aspect of your affiliate marketing efforts. ",
      text2:
        "Our strategies are continuously monitored, tested, and refined to ensure the best possible outcomes for our clients. At The Clicksly, results are not just a goal but a guarantee.",
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
            <Tag color="white">Our Principles</Tag>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle>Our Values</SectionTitle>
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
                    <Image
                      src={value.icon || ""}
                      alt={value.title}
                      width={48}
                      height={48}
                    />
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.approach}
        >
          <div>
            <Tag color="white">Our Principles</Tag>
            <SectionTitle>Our Values</SectionTitle>
          </div>
          <div>
            <p>
              We take a personalized approach to every campaign. We understand
              that each brand is unique, and so are its affiliate marketing
              needs. By collaborating closely with our clients, we craft
              customized strategies that align with their goals and objectives.
            </p>
          </div>
          <div>
            <p>
              Our team employs data-backed insights, industry trends, and
              innovative techniques to ensure each campaign performs at its
              best. From campaign setup to ongoing optimization, we are
              dedicated to maximizing your return on investment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
