'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import Button from '@/shared/ui/kit/button/Button';
import { SectionSubtitle } from '@/shared/ui/kit/section-subtitle/SectionSubtitle';
import { SectionTitle } from '@/shared/ui/kit/section-title/SectionTitle';

import styles from './MarketingServices.module.scss';

export const MarketingServices = () => {
  const t = useTranslations();
  const locale = useLocale();
  const steps = [
    {
      id: 1,
      title: t('home.marketingServices.steps.affiliateCampaignStrategy.title'),
      details: [
        t(
          'home.marketingServices.steps.affiliateCampaignStrategy.details.inDepthCompetitorAnalysis'
        ),
        t('home.marketingServices.steps.affiliateCampaignStrategy.details.customBrandPositioning'),
        t(
          'home.marketingServices.steps.affiliateCampaignStrategy.details.targetedAffiliateAdvertisingCampaigns'
        ),
        t(
          'home.marketingServices.steps.affiliateCampaignStrategy.details.efficientCampaignManagement'
        ),
      ],
    },
    {
      id: 2,
      title: t('home.marketingServices.steps.conversionRateOptimization.title'),
      details: [
        t(
          'home.marketingServices.steps.conversionRateOptimization.details.improvingSearchEngineVisibility'
        ),
        t(
          'home.marketingServices.steps.conversionRateOptimization.details.payPerClickCampaignSetup'
        ),
        t(
          'home.marketingServices.steps.conversionRateOptimization.details.landingPageFunnelOptimization'
        ),
        t('home.marketingServices.steps.conversionRateOptimization.details.dataDrivenInsights'),
      ],
    },
    {
      id: 3,
      title: t('home.marketingServices.steps.businessExpansion.title'),
      details: [
        t(
          'home.marketingServices.steps.businessExpansion.details.marketPenetrationEntryStrategies'
        ),
        t(
          'home.marketingServices.steps.businessExpansion.details.customerAcquisitionLongTermRetention'
        ),
        t('home.marketingServices.steps.businessExpansion.details.businessModelOptimization'),
        t('home.marketingServices.steps.businessExpansion.details.streamliningOperations'),
      ],
    },
    {
      id: 4,
      title: t('home.marketingServices.steps.audienceEngagement.title'),
      details: [
        t('home.marketingServices.steps.audienceEngagement.details.socialMediaGrowth'),
        t('home.marketingServices.steps.audienceEngagement.details.leveragingInfluencers'),
        t('home.marketingServices.steps.audienceEngagement.details.emailMarketingCRMCampaigns'),
        t('home.marketingServices.steps.audienceEngagement.details.storytellingHighQualityContent'),
      ],
    },
    {
      id: 5,
      title: t('home.marketingServices.steps.affiliateMarketingTechnologyAutomation.title'),
      details: [
        t(
          'home.marketingServices.steps.affiliateMarketingTechnologyAutomation.details.integratingAIBasedMarketingAutomation'
        ),
        t(
          'home.marketingServices.steps.affiliateMarketingTechnologyAutomation.details.optimizingCustomerJourney'
        ),
        t(
          'home.marketingServices.steps.affiliateMarketingTechnologyAutomation.details.automatingLeadGeneration'
        ),
        t(
          'home.marketingServices.steps.affiliateMarketingTechnologyAutomation.details.dataDrivenInsights'
        ),
      ],
    },
    {
      id: 6,
      title: t('home.marketingServices.steps.strategicScalingCompetitiveAdvantage.title'),
      details: [
        t(
          'home.marketingServices.steps.strategicScalingCompetitiveAdvantage.details.buildingPersonalBrands'
        ),
        t(
          'home.marketingServices.steps.strategicScalingCompetitiveAdvantage.details.longTermLeadGenerationRetention'
        ),
        t(
          'home.marketingServices.steps.strategicScalingCompetitiveAdvantage.details.entrepreneurialSalesTactics'
        ),
        t(
          'home.marketingServices.steps.strategicScalingCompetitiveAdvantage.details.customizedMonetizationPlans'
        ),
        t(
          'home.marketingServices.steps.strategicScalingCompetitiveAdvantage.details.ourSolutionsAlwaysTailored'
        ),
      ],
    },
  ];

  return (
    <section className={styles.marketingServices + ' ' + styles[locale]}>
      <div className="_container">
        <div className={styles.titleBlock}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle>{t('home.marketingServices.title')}</SectionTitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionSubtitle>{t('home.marketingServices.subtitle')}</SectionSubtitle>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Button url="/who-we-are" type="link" color="black">
              {t('home.marketingServices.button')}
            </Button>
          </motion.div>
        </div>
      </div>
      <div className={styles.stepsWrap}>
        <Image src="/images/home/marketing-services/way.png" alt="way" width={1486} height={856} />
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
        <div className={'_container'}>
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
