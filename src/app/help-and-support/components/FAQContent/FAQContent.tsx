"use client";

import { useTranslate } from "@tolgee/react";

import { FaqSection } from "../FaqSection/FaqSection";
import { useFAQ } from "@/app/help-and-support/lib/faq";

export const FAQContent = () => {
  const { advertisersFAQ, publishersFAQ, generalFAQ } = useFAQ();
  const { t } = useTranslate();
  return (
    <>
      <FaqSection
        theme="dark"
        questions={advertisersFAQ}
        title={t("helpAndSupport.faq.titleAdvertisers")}
      />
      <FaqSection
        theme="white"
        questions={publishersFAQ}
        title={t("helpAndSupport.faq.titlePublishers")}
      />
      <FaqSection
        theme="white"
        questions={generalFAQ}
        title={t("helpAndSupport.faq.titleGeneral")}
      />
    </>
  );
};
