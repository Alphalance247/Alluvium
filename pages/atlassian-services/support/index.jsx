import ServicesHero from "components/atlassian-service-reuse/servicesHero";
import Layout from "components/layout";
import ServerMigration from "components/support-component/serverMigration";
import Link from "next/link";
import Button from "components/atlassian-service-reuse/Button";
import SupportServices from "components/support-component/supportServices";
import LearnMore from "components/support-component/learnMore";
import Head from "next/head";

const Support = () => {
  return (
    <Layout>
      <Head>
        <title>Support | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Alluvium is an Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers complete data migration in half the time for half the cost."
        />
        <meta
          name="keywords"
          content="How to raise Atlassian support ticket, How to contact Atlassian support, atlassian support for jira server, atlassian support jira server, atlassian support request, Atlassian support tool, atlassian support portal, atlassian support services, atlassian support confluence, atlassian support community, atlassian support cloud, atlassian support billing, atlassian support data center, atlassian support documentations"
        />
      </Head>
      <ServicesHero
        contentsheading1="Dedicated Atlassian Support"
        contentsheading2="Be assured of having technical and functional Atlassian expertise by your side with our Atlassian support packages."
        withSlide={false}
        button1={
          <Link href="https://support.portal.alluvium.net/servicedesk/customer/portals">
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
