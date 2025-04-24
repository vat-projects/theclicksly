"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/components/button/Button";

import styles from "./HomeHero.module.scss";


export const HomeHero = () => {
  return (
    <section className={styles.homeHero}>
      <div className="_container">
        <div className={styles.homeHeroTop}>
          <div className={styles.homeHeroTopLeft}>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              The Clicksly – Unlocking the Potential of Your Affiliate Strategy
            </motion.h1>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.homeHeroTopRight}
          >
            <h2>
              Start Your Path to Success Today – Get Your Free Consultation
            </h2>
            <Button url="/" type="link" color="green">
              Join Now
            </Button>
          </motion.div>
        </div>
        <div className={styles.homeHeroBottom}>
          <div className={styles.homeHeroBottomLeft}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.homeHeroBottomLeftItem}
            >
              <Image
                src="/images/home/hero/icon1.svg"
                alt="Smart Campaigns"
                width={48}
                height={48}
              />
              <p>Smart Campaigns</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.homeHeroBottomLeftItem}
            >
              <Image
                src="/images/home/hero/icon2.svg"
                alt="Efficient Ad Placements"
                width={48}
                height={48}
              />
              <p>Efficient Ad Placements</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.homeHeroBottomLeftItem}
            >
              <Image
                src="/images/home/hero/icon3.svg"
                alt="Sustainable Growth"
                width={48}
                height={48}
              />
              <p>Sustainable Growth</p>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.homeHeroBottomRight}
          >
            <h3>
              Maximizing Your Affiliate Reach and Impact with The Clicksly
            </h3>
            <p>
              At The Clicksly, we specialize in creating bespoke affiliate
              marketing solutions designed to enhance your brand visibility,
              improve conversions, and build lasting relationships with your
              target audience. Whether you are a new advertiser or an
              experienced publisher, we provide the tools and expertise needed
              to propel your business forward.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
