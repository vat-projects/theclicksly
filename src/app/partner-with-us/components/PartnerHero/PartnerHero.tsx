"use client";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/kit/button/Button";

import styles from "./PartnerHero.module.scss";

export const PartnerHero = () => {
  return (
    <section className={styles.partnerHero}>
      <div className="_container">
        <div className={styles.partnerHeroTop}>
          <div className={styles.partnerHeroTopLeft}>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Partner With Us
            </motion.h1>
            <div>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                By partnering with The Clicksly, you can access a robust network
                of high-converting campaigns and premium affiliate
                opportunities. We offer flexible partnership models that cater
                to your unique needs, whether you want to generate passive
                income or scale your business.
              </motion.p>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                Our dedicated support team and cutting-edge tracking tools
                ensure you can easily optimize your campaigns and maximize
                revenue. Join us today and start earning with proven,
                performance-driven solutions to help you succeed.
              </motion.p>
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.partnerHeroTopRight}
          >
            <h2>
              Unlock New Revenue Streams with The Clicksly’s Affiliate Network
            </h2>
            <Button url="/registration-form" type="link" color="green">
              Join Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
