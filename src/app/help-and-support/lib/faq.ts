"use client";
import { useTranslate } from "@tolgee/react";

export const useFAQ = () => {
  const { t } = useTranslate();

  const advertisersFAQ = [
    {
      question: t("helpAndSupport.faq.advertisersFAQ.item1.question"),
      answer: t("helpAndSupport.faq.advertisersFAQ.item1.answer"),
    },
    {
      question: t("helpAndSupport.faq.advertisersFAQ.item2.question"),
      answer: t("helpAndSupport.faq.advertisersFAQ.item2.answer"),
    },
    {
      question: t("helpAndSupport.faq.advertisersFAQ.item3.question"),
      answer: t("helpAndSupport.faq.advertisersFAQ.item3.answer"),
    },
    {
      question: t("helpAndSupport.faq.advertisersFAQ.item4.question"),
      answer: t("helpAndSupport.faq.advertisersFAQ.item4.answer"),
    },
    {
      question: t("helpAndSupport.faq.advertisersFAQ.item5.question"),
      answer: t("helpAndSupport.faq.advertisersFAQ.item5.answer"),
    },
  ];

  const publishersFAQ = [
    {
      question: t("helpAndSupport.faq.publishersFAQ.item1.question"),
      answer: t("helpAndSupport.faq.publishersFAQ.item1.answer"),
    },
    {
      question: t("helpAndSupport.faq.publishersFAQ.item2.question"),
      answer: t("helpAndSupport.faq.publishersFAQ.item2.answer"),
    },
    {
      question: t("helpAndSupport.faq.publishersFAQ.item3.question"),
      answer: t("helpAndSupport.faq.publishersFAQ.item3.answer"),
    },
    {
      question: t("helpAndSupport.faq.publishersFAQ.item4.question"),
      answer: t("helpAndSupport.faq.publishersFAQ.item4.answer"),
    },
    {
      question: t("helpAndSupport.faq.publishersFAQ.item5.question"),
      answer: t("helpAndSupport.faq.publishersFAQ.item5.answer"),
    },
  ];

  const generalFAQ = [
    {
      question: t("helpAndSupport.faq.generalFAQ.item1.question"),
      answer: t("helpAndSupport.faq.generalFAQ.item1.answer"),
    },
    {
      question: t("helpAndSupport.faq.generalFAQ.item2.question"),
      answer: t("helpAndSupport.faq.generalFAQ.item2.answer"),
    },
    {
      question: t("helpAndSupport.faq.generalFAQ.item3.question"),
      answer: t("helpAndSupport.faq.generalFAQ.item3.answer"),
    },
    {
      question: t("helpAndSupport.faq.generalFAQ.item4.question"),
      answer: t("helpAndSupport.faq.generalFAQ.item4.answer"),
    },
    {
      question: t("helpAndSupport.faq.generalFAQ.item5.question"),
      answer: t("helpAndSupport.faq.generalFAQ.item5.answer"),
    },
  ];

  return { advertisersFAQ, publishersFAQ, generalFAQ };
};
