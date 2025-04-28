"use client";
import { useRef } from "react";
import Image from "next/image";
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

  const team = [
    {
      icon: "/images/who-we-are/our-team/icon1.svg",
      title: "Marketing & Strategy Team – Crafting Winning Campaigns",
      subtitle:
        "Our marketing experts focus on driving results and continuously improving campaign performance:",
      text1:
        "<b>Affiliate Strategy Team:</b>  With deep expertise in affiliate marketing, this team designs campaigns that target the right audience at the right time, optimizing ad placements and ensuring the success of every campaign.",
      text2:
        "<b>Digital Marketing Specialists:</b>  From PPC management to SEO optimization, our digital marketers ensure your brand stands out across multiple digital channels. They are the key players in building your brand’s online presence and driving high-quality traffic.",
    },
    {
      icon: "/images/who-we-are/our-team/icon2.svg",
      title: "Leadership Team – Guiding Our Vision and Strategy",
      subtitle:
        "Our leadership team combines years of experience in affiliate marketing, operations, and strategy. They steer the company toward its goals, ensuring that our clients always receive the best possible results:",
      text1:
        "<b>Affiliate Strategy Leaders:</b> Our strategic masterminds are focused on designing high-converting campaigns that align perfectly with your business goals. They analyze market trends and consumer behavior to create impactful strategies tailored to your needs.",
      text2:
        "<b>Operations Experts:</b> Managing day-to-day operations, our operations team ensures that every project is executed seamlessly, meets deadlines, and stays within budget. They keep everything running smoothly while optimizing efficiency.",
    },
    {
      icon: "/images/who-we-are/our-team/icon3.svg",
      title: "Creative & Content Team – Bringing Stories to Life",
      subtitle:
        "Creativity is at the core of what we do. Our content team ensures that every campaign is visually compelling and strategically aligned:",
      text1:
        "<b>Creative Visionaries:</b>  Our creative team brings your brand’s story to life, delivering eye-catching designs and engaging content that resonates with audiences and drives conversions.",
      text2:
        "<b>Content Strategists</b> are the architects of your brand’s voice, crafting narratives that connect with your target audience. Their expertise in content optimization ensures that each piece of content contributes to building a loyal customer base.",
    },
    {
      icon: "/images/who-we-are/our-team/icon4.svg",
      title: "Client Success Team – Ensuring Long-Term Relationships",
      subtitle:
        "We go beyond simply executing campaigns—we are committed to ensuring your ongoing success:",
      text1:
        "<b>Client Success Managers:</b> Our success managers work closely with you to understand your needs, provide actionable insights, and help you maximize your results. They are dedicated to making sure your expectations are exceeded at every stage.",
      text2:
        "<b>Account Managers:</b> Our account managers focus on smooth execution and consistent communication. They ensure your campaigns progress as planned, optimize them for better results, and keep you updated on performance.",
    },
    {
      icon: "/images/who-we-are/our-team/icon1.svg",
      title: "Data & Analytics Team – Driving Growth Through Insights",
      subtitle:
        "Our data experts are responsible for turning numbers into actionable strategies that fuel growth:",
      text1:
        "<b>Analytics Leaders:</b> They analyze performance metrics, uncover trends, and identify opportunities to optimize your campaigns. Their insights are essential in adjusting strategies for maximum performance and ROI.",
      text2:
        "<b>Data Analysts:</b> Our data analysts dive deep into consumer behavior, interpreting complex data to fine-tune campaigns and make informed decisions. Their work ensures that each strategy is based on solid evidence, leading to better outcomes for our clients.",
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
              Our Team: <br />
              The Heart of The Clicksly
            </SectionTitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionSubtitle>
              At The Clicksly, we believe our strength lies in the expertise and
              passion of our team. Every member plays a pivotal role in shaping
              our approach to affiliate marketing, driving innovation, and
              ensuring client success. Here’s a closer look at the dedicated
              professionals who make it all happen:
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
