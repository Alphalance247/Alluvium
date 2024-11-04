import Layout from "components/layout";
import ServicesHero from "components/atlassian-service-reuse/servicesHero";
import Link from "next/link";
import Button from "components/atlassian-service-reuse/Button";
import Advantages from "components/AtlassianCaseStudy/advantages";
import SuccessStories from "components/AtlassianCaseStudy/successStories";
import MeetAlluvium from "components/AtlassianCaseStudy/meetAlluvium";
import Elevate from "components/AtlassianCaseStudy/elevate";

const AtlassianCaseStudy = () => {
  return (
    <Layout>
      <Head>
        <title>Atlassian-ITSM-case-study | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Alluvium is an Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers complete data migration in half the time for half the cost."
        />
        <meta
          name="keywords"
          content="Alluvium, alluvium, team alluvium, atlassian products migration lab, migration, about alluvium, alluvians, cloud counter, Migration Experts, Software Consulting atlassian, confluence, jira"
        />
      </Head>
      <ServicesHero
        contentsheading1="Achieve ITSM Excellence with Alluvium & Atlassian"
        contentsheading2="Transform Your Service Management with the Proven Power of Atlassian Products."
        button1={
          <Link href="/support/contact#schedule-a-call">
            <Button size="large" className="mx-4 my-4">
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
