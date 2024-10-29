import ServicesHero from "components/atlassian-service-reuse/servicesHero";
import Layout from "components/layout";
import ServerMigration from "components/support-component/serverMigration";
import Link from "next/link";
import Button from "components/atlassian-service-reuse/Button";
import SupportServices from "components/support-component/supportServices";
import LearnMore from "components/support-component/learnMore";

const Support = () => {
  return (
    <Layout>
      <ServicesHero
        contentsheading1="Dedicated Atlassian Support"
        contentsheading2="Be assured of having technical and functional Atlassian expertise by your side with our Atlassian support packages."
        withSlide={false}
        button1={
          <Link href="/support/contact#schedule-a-call">
            <Button size="large">Go to Support</Button>
          </Link>
        }
      />
      <ServerMigration />
      <SupportServices />
      {/* <SupportPackages /> */}
      <LearnMore />
    </Layout>
  );
};

export default Support;
