import SectionHeader from "../SectionHeader";
import styles from "../../../styles/cloud-connect-2/Home/whyAttend.module.scss";
import Image from "next/image";

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

const WhyAttend = () => {
  return (
    <section className={styles.whyAttend}>
      <div className={styles.whyAttend__content}>
        <div className={styles.whyAttend__header}>
          <SectionHeader
            heading="Why Attend Cloud Connect?"
            description="Cloud Connect offers a platform to explore how to outshine traditional IT service management and align service delivery with broader business objectives. Discover innovative strategies to optimize operations, enhance customer experiences, and drive sustainable growth."
            size="small"
            variant="dark"
            width="small"
          />
        </div>
        <div className={styles.whyAttend__grid}>
          {data.map((item, index) => (
            <div className={styles.card} key={index}>
              <Image
                src={item.icon}
                alt=""
                width={48}
                height={48}
                className={styles.card__icon}
              />
              <h3 className={styles.card__title}>{item.title}</h3>
              <p className={styles.card__description}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
