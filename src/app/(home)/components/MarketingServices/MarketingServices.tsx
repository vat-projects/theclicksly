"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import Button from "@/shared/ui/kit/button/Button";
import { SectionSubtitle } from "@/shared/ui/kit/section-subtitle/SectionSubtitle";
import { SectionTitle } from "@/shared/ui/kit/section-title/SectionTitle";

import styles from "./MarketingServices.module.scss";

export const MarketingServices = () => {
  const steps = [
    {
      id: 1,
      title: "Affiliate Campaign Strategy <br/>& Execution",
      details: [
        "In-depth Competitor Analysis & Market Research",
        "Custom Brand Positioning & Messaging",
        "Targeted Affiliate Advertising Campaigns",
        "Efficient Campaign Management & Optimization",
      ],
    },
    {
      id: 2,
      title: "Conversion Rate Optimization & <br/>Performance Marketing",
      details: [
        "Improving Search Engine Visibility & Organic Reach",
        "Pay-Per-Click (PPC) Campaign Setup & Management",
        "Landing Page & Funnel Optimization for Conversions",
        "Data-Driven Insights to Enhance Marketing Performance",
      ],
    },
    {
      id: 3,
      title: "Business Expansion & Strategic <br/>Consulting",
      details: [
        "Market Penetration & Entry Strategies",
        "Customer Acquisition & Long-Term Retention",
        "Business Model Optimization for Increased Revenue",
        "Streamlining Operations with Automation Tools",
      ],
    },
    {
      id: 4,
      title: "Audience Engagement & Content <br/>Marketing",
      details: [
        "Social Media Growth & Community Building",
        "Leveraging Influencers & Affiliate Networks",
        "Email Marketing & CRM Campaigns",
        "Storytelling Through High-Quality Content Creation",
      ],
    },
    {
      id: 5,
      title: "Affiliate Marketing Technology & <br/>Automation",
      details: [
        "Integrating AI-Based Marketing Automation",
        "Optimizing the Customer Journey with CRM Tools",
        "Lead Generation with Chatbots & Automation",
        "Real-Time Analytics and Marketing Performance Reports",
      ],
    },
    {
      id: 6,
      title: "Strategic Scaling & Competitive <br/>Advantage",
      details: [
        "Building Personal Brands & Expanding Multi-Channel Reach",
        "Long-Term Lead Generation & Retention Strategies",
        "Entrepreneurial Sales Tactics for Small Businesses",
        "Customized Monetization Plans for Affiliates & Advertisers",
        "Our Solutions Are Always Tailored to Your Business Needs",
      ],
    },
  ];

  return (
    <section className={styles.marketingServices}>
      <div className="_container">
        <div className={styles.titleBlock}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle>
              Our Comprehensive Affiliate Marketing Services
            </SectionTitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionSubtitle>
              At The Clicksly, we combine deep industry knowledge with
              cutting-edge tools to provide a full range of services to optimize
              your affiliate marketing efforts. Here’s how we can help you
              achieve your goals:
            </SectionSubtitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Button url="/" type="link" color="black">
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
      <div className={styles.stepsWrap}>
        <Image
          src="/images/home/marketing-services/way.png"
          alt="way"
          width={1486}
          height={856}
        />
        <Image
          src="/images/home/marketing-services/wayMobile1.png"
          alt="way"
          width={400}
          height={978}
        />
        <Image
          src="/images/home/marketing-services/wayMobile2.png"
          alt="way"
          width={400}
          height={978}
        />
        <Image
          src="/images/home/marketing-services/wayMobile3.png"
          alt="way"
          width={400}
          height={484}
        />
        <div className={"_container"}>
          <div className={styles.steps}>
            {steps.map((step) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.step}
                key={step.id}
              >
                <div className={styles.stepNumber}>0{step.id}</div>
                <div className={styles.stepContent}>
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: step.title,
                    }}
                  />
                  <ul>
                    {step.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
