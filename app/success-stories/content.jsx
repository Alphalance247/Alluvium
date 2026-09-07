"use client";
import Layout from "components/layout";
import SuccessStoriesHero from "components/Alluvium-Redesign-2026/success-stories/hero";
import CaseStudyGrid from "components/Alluvium-Redesign-2026/success-stories/caseStudyGridCard";
import CtaBannerSection from "components/Alluvium-Redesign-2026/home/ctaBannerSection";

const SuccessStories = () => {
  return (
    <Layout>
      <SuccessStoriesHero />
      <CaseStudyGrid />
      <CtaBannerSection
        label="WORK WITH ALLUVIUM"
        heading="Your migration starts with a conversation."
        description="Show us your current stack and the problems it is causing. We will tell you what moving to Atlassian would actually involve, with no assumptions and no obligation."
        ctaLabel="Talk to our team"
        ctaHref="/contact-us"
      />
    </Layout>
  );
};

export default SuccessStories;
