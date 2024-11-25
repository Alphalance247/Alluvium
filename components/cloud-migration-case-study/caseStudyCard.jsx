import Image from "next/image";
import styles from "../../styles/cloud-migration-case-study/migartionmain.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const CaseStudyCard = () => {
  const data = [
    {
      title: "SOFTWARE",
      heading: "Boosting Productivity with Jira Data Center to Cloud Migration",
      imgSrc: "/assets/Cloud-Migration-Case-Study/ginko.png",
      pageTitle:
        "boosting-productivity-with-jira-data-center-to-cloud-migration",
    },
    {
      title: "LIFE SCIENCES",
      heading: "Ginkgo Bioworks scales to save the planet with Atlassian Cloud",
      imgSrc: "/assets/Cloud-Migration-Case-Study/ginko.png",
      pageTitle:
        "ginkgo-bioworks-scales-to-save-the-planet-with-atlassian-cloud",
    },
    {
      title: "FINANCIAL SERVICES",
      heading:
        "How Sun Life unlocked a brighter future by migrating to Atlassian Cloud",
      imgSrc: "/assets/Cloud-Migration-Case-Study/sunlife.png",
      pageTitle:
        "how-sun-life-unlocked-a-brighter-future-by-migrating-to-atlassian-cloud",
    },
    {
      title: "GOVERNMENT",
      heading: "The State of Utah Successful Migration to Atlassian Cloud",
      imgSrc: "/assets/Cloud-Migration-Case-Study/utah.png",
      pageTitle: "the-state-of-utah-successful-migration-to-atlassian-cloud",
    },
    {
      title: "Internet & Software",
      heading: "Iress improves service with Jira Service Management Cloud",
      imgSrc: "/assets/Cloud-Migration-Case-Study/iress.png",
      pageTitle: "iress-improves-service-with-jira-service-management-cloud",
    },
    {
      title: "Internet & Software",
      heading:
        "Sophos elevates cybersecurity, productivity, and impact with Atlassian cloud",
      imgSrc: "/assets/Cloud-Migration-Case-Study/sophos.png",
      pageTitle:
        "sophos-elevates-cybersecurity,productivity,and-impact-with-atlassian-cloud",
    },
  ];

  return (
    <section className={`${styles.case__study__card} container mx-auto`}>
      <div className={styles.study__card}>
        {data.map((el, i) => {
          return (
            <Link
              href={`/atlassian-cloud-migration-case-studies/${el?.pageTitle}`}
              passHref
              key={i}
            >
              <div className={styles.card}>
                <Image
                  src={el?.imgSrc}
                  width={389}
                  height={200}
                  alt={el.title}
                />

                <div>
                  <p className={styles.dhcs__head}>{el?.title}</p>
                  <h4>{el?.heading}</h4>
                  <button>
                    Read now
                    <span>
                      <FaArrowRightLong />
                    </span>
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CaseStudyCard;
