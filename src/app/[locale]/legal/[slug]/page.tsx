import React from "react";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import { getPage, getPageSlugs } from "@/features/policy/policy";

import st from "./page.module.scss";
import { routing } from "@/i18n/routing";

type PageParams = {
  slug: string;
};

export async function generateStaticParams(): Promise<PageParams[]> {
  const slugs = await getPageSlugs(routing.defaultLocale);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const locale = await getLocale();
  const page = await getPage(slug, locale);
  const pageTitle = `${page.title} | The Clicksly`;
  return {
    title: pageTitle,
    openGraph: {
      title: pageTitle,
      images: "",
    },
  };
}

export default async function PolicyPage({
  params,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { slug } = params;
  const locale = await getLocale();
  const page = await getPage(slug, locale);
  const t = await getTranslations("legal");
  return (
    <>
      <section className={st.policy}>
        <div className="_container">
          <div className={st.policy__body}>
            <div className={st.sectionTitle}>
              <div className={st.date}>
                {t("date")} {page.date}
              </div>
              <h1>{page.title}</h1>
              {page.shortDescription && (
                <div className={st.policy__shortDescription}>
                  {page.shortDescription}
                </div>
              )}
            </div>
            <article
              dangerouslySetInnerHTML={{ __html: page.body }}
              className={st.policy__content}
            />
          </div>
        </div>
      </section>
    </>
  );
}
