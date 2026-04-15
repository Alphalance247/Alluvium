import Layout from "components/layout";
import Head from "next/head";
import EventsBanner from "components/Alluvium-Redesign-2026/events/hero";
import CaseStudyGrid from "components/Alluvium-Redesign-2026/success-stories/caseStudyGridCard";
import CtaSection from "components/Alluvium-Redesign-2026/common/ctaSection";

const SuccessStories = () => {
  return (
    <Layout>
      <Head>
        <title>Alluvium Success Stories | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Discover how Alluvium, an Atlassian Solution Partner, has transformed businesses worldwide with our ITSM, DevOps, Agile, and Cloud Migration solutions. Explore our success stories and see how we've helped organizations optimize their workflows and achieve their goals."
        />
        <meta
          name="keywords"
          content="Alluvium success stories, Atlassian success stories, ITSM success, DevOps success, Agile success, cloud migration success"
        />
      </Head>

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
