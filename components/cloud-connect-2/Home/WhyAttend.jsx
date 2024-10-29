import SectionHeader from "../SectionHeader";
import styles from "../../../styles/cloud-connect-2/Home/whyAttend.module.scss";
import AttendCloud from "../AttendCloud";

const data = [
  {
    icon: "/assets/cloud-connect/icons/ic_outline-insights.svg",
    title: "Strategic Insights",
    description:
      "Learn how world leading organizations and giants are maximizing Service Management strategies to optimize their operations and business.",
  },
  {
    icon: "/assets/cloud-connect/icons/la_handshake-solid.svg",
    title: "Cross-Functional Collaboration",
    description:
      "Discover how extending Service Management practices beyond IT can create synergies and drive innovation in all areas of your organization.",
  },
  {
    icon: "/assets/cloud-connect/icons/icons8_idea.svg",
    title: "Business Transformation",
    description:
      "From Customer Service to Human Resources and beyond, Cloud Connect demonstrates how to maximize new opportunities for growth and efficiency within an organization.",
  },
  {
    icon: "/assets/cloud-connect/icons/icon-park-outline_database-success.svg",
    title: "Networking Opportunities",
    description:
      "Connect with industry experts, thought leaders and peers at the forefront of Service Management. Share experiences, exchange ideas and make valuable networks; propellant of a rapid growth of your business.",
  },
];

const WhyAttend = () => {
  return (
    <section className={styles.whyAttend}>
      <div className={styles.whyAttend__content}>
        <div className={styles.whyAttend__header}>
          <SectionHeader
            heading="Why Attend Cloud Connect?"
            description="Cloud Connect offers a platform to explore ways to outshining traditional IT service management and align Service Delivery with broader business objectives, discover innovative strategies to optimize operations, enhance customer experiences, as well as drive sustainable growth."
            size="small"
            variant="dark"
            width="small"
          />
        </div>
        <AttendCloud data={data} />
      </div>
    </section>
  );
};

export default WhyAttend;
