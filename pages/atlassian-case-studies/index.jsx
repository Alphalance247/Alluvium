import Layout from "components/layout";
import ServicesHero from "components/atlassian-service-reuse/servicesHero";
import Link from "next/link";
import Button from "components/atlassian-service-reuse/Button";
import Advantages from "components/AtlassianCaseStudy/advantages";
import SuccessStories from "components/AtlassianCaseStudy/successStories";
import MeetAlluvium from "components/AtlassianCaseStudy/meetAlluvium";
import Elevate from "components/AtlassianCaseStudy/elevate";
import Head from "next/head";

const AtlassianCaseStudy = () => {
  return (
    <Layout>
      <Head>
        <title>Atlassian-ITSM-case-study | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="See how leading organizations modernize with Atlassian ITSM implementation. Just like YALE School of Management and Twitter, Alluvium can help you implement a successful ITSM solution."
        />
        <meta
          name="keywords"
          content="atlassian case studies, atlassian itsm, atlassian itsm guide, atlassian jira itsm, itsm atlassian, atlassian use cases, jsm case studies, atlassian case study, itsm case study, atlassian problem management, jira case study, Incident nanagement, atlassian jira service management, jira service management asset management, jira service management training, jira service management assets, jira service management automation"
        />
      </Head>
      <ServicesHero
        contentsheading1="Achieve ITSM Excellence with Alluvium & Atlassian"
        contentsheading2="Transform Your Service Management with the Proven Power of Atlassian Products."
        button1={
          <Link href="/contact-us">
            <Button size="large" className="">
              Schedule a Call
            </Button>
          </Link>
        }
        variant="primary"
        fonts="primary"
        width="primary"
      />
      <Advantages />
      <SuccessStories />
      <MeetAlluvium />
      <Elevate />
    </Layout>
  );
};
export default AtlassianCaseStudy;
