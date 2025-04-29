"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./SocialMedia.module.scss";

export const SocialMedia = () => {
  return (
    <section className={styles.socialMedia}>
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Follow Us on Social Media
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Stay connected with us on our social channels for the latest updates,
          tips, and insights:
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
              <Image
                src="/images/get-in-touch/facebook.svg"
                alt="address"
                width={48}
                height={48}
              />
            </div>
            <div className={styles.socialMediaItemBottom}>
              <Link href="#">Facebook link</Link>
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
              <Image
                src="/images/get-in-touch/instagram.svg"
                alt="address"
                width={48}
                height={48}
              />
            </div>
            <div className={styles.socialMediaItemBottom}>
              <Link href="#">Instagram link</Link>
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
              <Image
                src="/images/get-in-touch/x.svg"
                alt="address"
                width={48}
                height={48}
              />
            </div>
            <div className={styles.socialMediaItemBottom}>
              <Link href="#">Twitter link</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
