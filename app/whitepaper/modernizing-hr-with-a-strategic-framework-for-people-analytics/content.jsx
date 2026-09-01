"use client";
import React from "react";
import Layout from "components/layout";
import Container from "components/Alluvium-Redesign-2026/common/container";
import WhitepaperHero from "components/Alluvium-Redesign-2026/whitepaper/hero";
import ArticleBody from "components/Alluvium-Redesign-2026/whitepaper/articleBody";
import AuthorBio from "components/Alluvium-Redesign-2026/whitepaper/authorBio";
import References from "components/Alluvium-Redesign-2026/whitepaper/references";
import Sidebar from "components/Alluvium-Redesign-2026/whitepaper/sidebar";
import { articleBlocks } from "./articleBlocks";
import { bioParagraphs, references } from "./authorData";
import { tocItems } from "./tocData";

const WHITEPAPER_TITLE =
  "The intelligent advantage: Modernizing HR with a strategic framework for people analytics";

const ModernizingHrWhitepaper = () => {
  return (
    <>
      <Layout>
        <section className="w-full bg-white">
          <Container className="grid grid-cols-1 lg:grid-cols-[1fr_256px] gap-12 lg:gap-20 items-start">
            {/* Left: article content */}

            <div className="min-w-0 max-w-3xl flex flex-col items-start gap-16">
              <WhitepaperHero
                breadcrumbLabel={WHITEPAPER_TITLE}
                title={
                  "The intelligent advantage:\nModernizing HR with a strategic framework for people analytics"
                }
                subhead="AI is only as useful as the systems and knowledge behind it. This whitepaper explores how enterprises can connect trusted knowledge, service workflows, and AI to create systems that teams actually use."
                authorName="Taiwo Ojo"
                authorRole="Alluvium - Atlassian Service Management Specialised Solution Partner"
                imageAlt="Modernizing HR with a strategic framework for people analytics"
              />
              <ArticleBody blocks={articleBlocks} />
              <AuthorBio
                name="Taiwo Ojo"
                role="Alluvium - Atlassian Service Management Specialised Solution Partner"
                bioParagraphs={bioParagraphs}
                email="taiwo@alluvium.net"
                linkedin="linkedin.com/in/taiwoojo"
              />
              <References references={references} totalCount={""} />
            </div>

            {/* Right: sticky sidebar */}
            <Sidebar tocItems={tocItems} reportTitle={WHITEPAPER_TITLE} />
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default ModernizingHrWhitepaper;
