"use client";
import React from "react";
import Layout from "components/layout";
import Container from "components/Alluvium-Redesign-2026/common/container";
import ArticleHero from "components/Alluvium-Redesign-2026/whitepaper/hero";
import ArticleBody from "components/Alluvium-Redesign-2026/whitepaper/articleBody";
import ArticleSidebar from "components/Alluvium-Redesign-2026/blogs/articleSidebar";
import { articleBlocks, tocSections } from "./articleBlocks";

const ARTICLE_TITLE =
  "Opsgenie is going away. The migration should not be a fire drill.";

const OpsgenieMigrationArticle = () => {
  return (
    <>
      <Layout>
        <section className="w-full bg-white">
          <Container className="grid grid-cols-1 lg:grid-cols-[1fr_208px] gap-12 lg:gap-20 items-start">
            <div className="min-w-0 max-w-3xl flex flex-col items-start gap-16">
              <ArticleHero
                breadcrumbLabel={ARTICLE_TITLE}
                breadcrumbSegmentLabel="News"
                breadcrumbSegmentHref="/blogs"
                title={ARTICLE_TITLE}
                subhead="Opsgenie support ends 5 April 2027. Here is what teams need to consider beyond simply moving their data to Jira Service Management."
                meta="JUL 22, 2026 - 5 MINS READ"
                // authorName="Muhammad Zubairu"
                // authorRole="Product lead"
                authorAvatar="https://placehold.co/40x40"
                image="https://d38rkvi67t4lhi.cloudfront.net/assets/1787731328047-image-5.png"
                imageAlt="Opsgenie to JSM Migration"
              />
              <ArticleBody blocks={articleBlocks} />
            </div>

            <ArticleSidebar sections={tocSections} />
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default OpsgenieMigrationArticle;
