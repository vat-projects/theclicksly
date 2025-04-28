"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./WhoWeAreHero.module.scss";

export const WhoWeAreHero = () => {
  return (
    <section className={styles.whoWeAreHero}>
      <div className={"_container"}>
        <div className={styles.whoWeAreHeroTop}>
          <div className={styles.whoWeAreHeroTopLeft}>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Get to Know Us – The Clicksly Team & Our Vision
            </motion.h1>
          </div>
          <div className={styles.whoWeAreHeroTopRight}>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              We are more than just an affiliate marketing platform — a
              dedicated team of professionals committed to helping businesses
              grow and succeed. Learn about our mission, vision, and core values
              that guide us in delivering innovative, data-driven marketing
              solutions.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Explore how we collaborate with advertisers and publishers to
              create lasting partnerships and drive measurable results.
            </motion.p>
          </div>
        </div>
        <div className={styles.whoWeAreHeroBottom}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.whoWeAreHeroBottomLeft}
          >
            <div>
              <Image
                src="/images/who-we-are/hero/icon1.svg"
                alt="Who We Are"
                width={48}
                height={48}
              />
              <h3>Our Mission</h3>
            </div>
            <p>
              Our mission is simple yet powerful: to help businesses grow by
              connecting them with the right affiliate partners and delivering
              measurable results.
            </p>
            <p>
              We are passionate about elevating brands and driving lasting
              success. We aim to redefine the affiliate marketing landscape
              through innovation and data-driven strategies.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.whoWeAreHeroBottomLeft}
          >
            <div>
              <Image
                src="/images/who-we-are/hero/icon2.svg"
                alt="Who We Are"
                width={48}
                height={48}
              />
              <h3>Our Vision</h3>
            </div>
            <p>
              Our vision is to become the premier affiliate marketing platform
              globally, serving as the bridge that connects advertisers and
              publishers in meaningful, impactful ways.
            </p>
            <p>
              We aspire to empower businesses of all sizes to scale and thrive
              by offering innovative solutions that drive sustainable growth
              across diverse industries.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
