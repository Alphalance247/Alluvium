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
        <title>Become a Sponsor | Cloud Connect 2024</title>
        <link rel="icon" href="/favicon.ico" />
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
