import React from 'react';

import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getPage, getPageSlugs } from '@/features/policy/policy';

import st from './page.module.scss';

type PageParams = { locale: string; slug: string };

export async function generateStaticParams(): Promise<PageParams[]> {
  const locales = ['en', 'de', 'it'];
  const params: PageParams[] = [];

  for (const locale of locales) {
    const slugs = await getPageSlugs(locale);
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const awaitedParams = await params;
  const { locale, slug } = awaitedParams;
  const page = await getPage(slug, locale);
  const pageTitle = `${page.title} | The Clicksly`;
  return {
    title: pageTitle,
    openGraph: {
      title: pageTitle,
      images: '',
    },
  };
}

export default async function PolicyPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const awaitedParams = await params;
  const { locale, slug } = awaitedParams;
  const page = await getPage(slug, locale);
  const t = await getTranslations('legal');
  return (
    <>
      <section className={st.policy}>
        <div className="_container">
          <div className={st.policy__body}>
            <div className={st.sectionTitle}>
              <div className={st.date}>
                {t('date')} {page.date}
              </div>
              <h1>{page.title}</h1>
              {page.shortDescription && (
                <div className={st.policy__shortDescription}>{page.shortDescription}</div>
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
