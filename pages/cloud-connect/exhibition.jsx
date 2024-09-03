import Layout from "components/cloud-connect-2/Layout";
import SectionHeader from "components/cloud-connect-2/SectionHeader";
import Head from "next/head";
import Button from "components/cloud-connect-2/Button";
import styles from "../../styles/cloud-connect-2/Exhibition/exhibition.module.scss";
import Hero from "components/cloud-connect-2/Home/Hero";
import Image from "next/image";
import AttendCloud from "components/cloud-connect-2/AttendCloud";

const data = [
  {
    icon: "/assets/cloud-connect/icons/ic_outline-insights.svg",
    title: "Strategic Insights",
    description:
      "Learn how leading organizations are harnessing Service Management strategy ies to optimize their business operations.",
  },
  {
    icon: "/assets/cloud-connect/icons/la_handshake-solid.svg",
    title: "Cross-Functional Collaboration",
    description:
      "Discover how extending service management practices beyond IT can create synergies and drive innovation throughout your entire organization.",
  },
  {
    icon: "/assets/cloud-connect/icons/icons8_idea.svg",
    title: "Business Transformation",
    description:
      "From customer service to HR and beyond, Cloud Connect will show you how to maximize new opportunities for growth and efficiency within the an organization.",
  },
  {
    icon: "/assets/cloud-connect/icons/icon-park-outline_database-success.svg",
    title: "Networking Opportunities",
    description:
      "Connect with industry experts, thought leaders, and peers who are at the forefront of service management. Share experiences, exchange ideas, and forge valuable connections that can propel your business forward.",
  },
];

const Exhibition = () => {
  return (
    <Layout>
      <Head>
        <title>Exhibition | Cloud Connect 2024</title>
      </Head>
      <section className={`container ${styles.exhibition__style}`}>
        <SectionHeader
          heading="Exhibition"
          description="Unlock unparalleled opportunities by becoming a sponsor at Cloud Connect. Gain exclusive access to a highly engaged audience of industry leaders, innovators, and decision-makers. Elevate your brand, generate high-quality leads, and position your company at the forefront of cloud technology."
          button1={
            <Button size="large" variant="default">
              <a href="/cloud-connect-brochure.pdf" download>
                Become an Exhibitor
              </a>
            </Button>
          }
        />
      </section>

      <div className={`container-fluid ${styles.exhibition}`}>
        <div className={`container mx-auto ${styles.exhibitor__expectation}`}>
          <SectionHeader
            heading="WHAT TO EXPECT"
            description="As an exhibitor, you'll have a unique opportunity to connect with your targeted audience and service management professionals, who are eager to discover innovative solutions. More than this, you get to showcase your expertise, generate valuable leads, and position your company as a leader in the industry."
            size="small"
            variant="dark"
            width="small"
          />

          <div className={styles["hero__images-main"]}>
            <Image
              src="/assets/cloud-connect/images/image.png"
              alt="Cloud connect Hero image"
              className={styles.image}
              width={529}
              height={363}
            />
          </div>
        </div>
      </div>

      <div className={`container mx-auto ${styles.exhibitor__expectation}`}>
        <SectionHeader heading="Why YOU SHOULD EXHIBIT" />

        <AttendCloud data={data} />
      </div>
    </Layout>
  );
};

export default Exhibition;
