"use client";
import Layout from "components/layout";
import EventsBanner from "components/Alluvium-Redesign-2026/events/hero";
import CaseStudyGrid from "components/Alluvium-Redesign-2026/success-stories/caseStudyGridCard";
import CtaSection from "components/Alluvium-Redesign-2026/common/ctaSection";

const SuccessStories = () => {
  return (
    <Layout>

      <EventsBanner
        heading={"Enterprise Impact & Case Studies"}
        title={"our success stories"}
        subhead={
          "Stay informed on industry trends and the future of work with insights and updates from thought leaders at Atlassian and Alluvium."
        }
        backgroundImage={
          "/assets/Alluvium-Redesign-2026/blogs/hero-section.png"
        }
      />
      <CaseStudyGrid />
      <CtaSection />
    </Layout>
  );
};

export default SuccessStories;
