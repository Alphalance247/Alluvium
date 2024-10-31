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
