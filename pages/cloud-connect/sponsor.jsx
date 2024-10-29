import SponsorsForm from "components/become-sponsor/sponsorsForm";
import WhySponsor from "components/become-sponsor/whysponsor";
import Partners from "components/cloud-connect-common/partners";
import styles from "../../styles/cloud-connect-2/cloudconnect.module.scss";
import SectionHeader from "components/cloud-connect-2/SectionHeader";
import Button from "components/cloud-connect-2/Button";
import Layout from "components/cloud-connect-2/Layout";
import Head from "next/head";

const BecomeASponsor = () => {
  const handleScrollToView = () => {
    document
      .getElementById("sponsor-form-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Layout>
      <Head>
        <title>Become A Sponsor | Cloud Connect 2024</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="This is an Atlassian Partner Event focused on remote work. It conveys the idea of collaboration, growth, and adaptability in the context of a remote and distributed work landscape. The event highlights the role of Atlassian in helping teams to collectively embrace the opportunities and challenges of remote work, striving for excellence in a distributed work environment."
        />
        <meta
          name="keywords"
          content="Alluvium, alluvium, alluvium event, Cloud Connect sponsors,call for sponsorship Cloud connect24, cloud connect event, cloud, connect, connect24, team alluvium, atlassian products migration lab, migration, about alluvium, alluvians, cloud counter, Migration Experts, Software Consulting atlassian, confluence, jira"
        />
      </Head>
      <div className={`container ${styles.sponsor_hero}`}>
        <SectionHeader
          heading="Become a Sponsor"
          description="Unlock unparalleled opportunities by becoming a sponsor at Cloud Connect. Gain exclusive access to a highly engaged audience of industry leaders, innovators, and decision-makers. Elevate your brand, generate high-quality leads, and position your company at the forefront of cloud technology."
          button1={
            <Button size="large" variant="outline">
              <a href="/cloud-connect-brochure.pdf" download>
                Download Brochure
              </a>
            </Button>
          }
          button2={
            <Button size="large" variant="default" onClick={handleScrollToView}>
              Apply
            </Button>
          }
          size="normal"
          variant="default"
        />
      </div>
      {/* <Partners /> */}
      <WhySponsor />
      <SponsorsForm />
    </Layout>
  );
};

export default BecomeASponsor;
