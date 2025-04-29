import React from "react";
import type { Metadata } from "next";

import { getPage, getPageSlugs } from "@/features/policy/policy";

import st from "./page.module.scss";

type PageParams = {
  slug: string;
};

export async function generateStaticParams(): Promise<PageParams[]> {
  const slugs = await getPageSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const awaitedParams = await params;
  const { slug } = awaitedParams;
  const page = await getPage(slug);
  const pageTitle = `${page.title} | ProWorkforceX`;
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
  params: Promise<{ slug: string }>;
}) {
  const awaitedParams = await params;
  const { slug } = awaitedParams;
  const page = await getPage(slug);
  return (
    <>
      <section className={st.policy}>
        <div className="_container">
          <div className={st.policy__body}>
            <div className={st.sectionTitle}>
              <div className={st.date}>Last Updated: {page.date}</div>
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
