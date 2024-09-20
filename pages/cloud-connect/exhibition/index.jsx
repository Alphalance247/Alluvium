import Layout from "components/cloud-connect-2/Layout";
import SectionHeader from "components/cloud-connect-2/SectionHeader";
import Head from "next/head";
import Button from "components/cloud-connect-2/Button";
import styles from "../../../styles/cloud-connect-2/Exhibition/exhibition.module.scss";
import Hero from "components/cloud-connect-2/Home/Hero";
import Image from "next/image";
import AttendCloud from "components/cloud-connect-2/AttendCloud";
import Packages from "components/cloud-connect-2/Packages";
import ExhibitionForm from "components/cloud-connect-2/Exhibition/ExhibitionForm";
import Link from "next/link";
import { sponsorPackage } from "data";

const data = [
  {
    icon: "/assets/cloud-connect/icons/ic_outline-insights_w.svg",
    title: "Strategic Insights",
    description:
      "Learn how leading organizations are harnessing Service Management strategy ies to optimize their business operations.",
  },
  {
    icon: "/assets/cloud-connect/icons/la_handshake-solid_w.svg",
    title: "Cross-Functional Collaboration",
    description:
      "Discover how extending service management practices beyond IT can create synergies and drive innovation throughout your entire organization.",
  },
  {
    icon: "/assets/cloud-connect/icons/icons8_idea_w.svg",
    title: "Business Transformation",
    description:
      "From customer service to HR and beyond, Cloud Connect will show you how to maximize new opportunities for growth and efficiency within the an organization.",
  },
  {
    icon: "/assets/cloud-connect/icons/icon-park-outline_database-success_w.svg",
    title: "Networking Opportunities",
    description:
      "Connect with industry experts, thought leaders, and peers who are at the forefront of service management. Share experiences, exchange ideas, and forge valuable connections that can propel your business forward.",
  },
];

export const exhibitorsPackage = [
  {
    id: "1",
    title: "SILVER",
    price: "NGN 350,000 (₦)",

    paragraphs:
      "Become the cornerstone of Cloud Connect with our premier Title Sponsorship. This exclusive package offers unparalleled brand visibility and engagement opportunities,",
    list1: "1 by 2 booth space",
    list2: " Co-branding opportunities with Alluvium",
    list3: "Host a dedicated workshop or roundtable",
    list4: "Three complimentary registrations (VIP Admission)",
  },
  {
    id: "2",
    title: "GOLD",
    price: "NGN 500,000 (₦)",

    paragraphs:
      "Elevate your brand presence with our Platinum Sponsorship. This package provides significant exposure and engagement with event attendees.",
    list1: "2 by 2 booth space",
    list2: "All Silver Sponsor Benefits",
    list3: " Top placement on event website & marketing materials",
    list4: "Exclusive advertisement on our remote work website",
    list5:
      "Prime opportunity to feature your product in our widely distributed magazine",
    list6: "Five complimentary registrations (Platinum Admission)",
    list7:
      "Priority consideration for future collaborations and partnerships with Alluvium.",
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

      <section className={`container mx-auto ${styles.exhibitors}`}>
        <SectionHeader heading="Why YOU SHOULD EXHIBIT" />

        <AttendCloud data={data} />
      </section>

      <section className={`container-fluid ${styles.exhibitor__packages}`}>
        <Packages
          sponsorPackage={exhibitorsPackage}
          heading="EXHIBITORS PACKAGES"
          showButton={false}
          subText={true}
        />
      </section>
      <img
        src="/assets/cloud-connect/images/imagey.png"
        alt="Cloud connect event image"
        className={styles.eventImg}
        width={1440}
        height={557}
      />
      <ExhibitionForm />

      <section className={`container text-center ${styles.feedback}`}>
        <p>
          Have questions or need more information? We are here to help you make
          the most of your Cloud Connect experience
        </p>
        <Link href="/support/contact#schedule-a-call">
          <Button size="large">Contact Us</Button>
        </Link>
      </section>
    </Layout>
  );
};

export default Exhibition;
