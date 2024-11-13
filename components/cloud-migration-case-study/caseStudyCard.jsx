import Image from "next/image";
import styles from "../../styles/cloud-migration-case-study/migartionmain.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";

const CaseStudyCard = () => {
  const data = [
    {
      title: "SOFTWARE",
      heading: "Boosting Productivity with Jira Data Center to Cloud Migration",
      imgSrc: "/assets/Cloud-Migration-Case-Study/ginko.png",
    },
    {
      title: "LIFE SCIENCES",
      heading: "Ginkgo Bioworks scales to save the planet with Atlassian Cloud",
      imgSrc: "/assets/Cloud-Migration-Case-Study/ginko.png",
    },
    {
      title: "FINANCIAL SERVICES",
      heading:
        "How Sun Life unlocked a brighter future by migrating to Atlassian Cloud",
      imgSrc: "/assets/Cloud-Migration-Case-Study/sunlife.png",
    },
    {
      title: "GOVERNMENT",
      heading: "The State of Utah Successful Migration to Atlassian Cloud",
      imgSrc: "/assets/Cloud-Migration-Case-Study/utah.png",
    },
    {
      title: "Internet & Software",
      heading: "Iress improves service with Jira Service Management Cloud",
      imgSrc: "/assets/Cloud-Migration-Case-Study/iress.png",
    },
    {
      title: "Internet & Software",
      heading:
        "Sophos elevates cybersecurity, productivity, and impact with Atlassian cloud",
      imgSrc: "/assets/Cloud-Migration-Case-Study/sophos.png",
    },
  ];
  return (
    <section className={`${styles.case__study__card} container mx-auto`}>
      <div className={styles.study__card}>
        {data.map((el, i) => {
          return (
            <div className={styles.card} key={i}>
              <Image src={el?.imgSrc} width={389} height={200} alt={el.title} />

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
          );
        })}
      </div>
    </section>
  );
};

export default CaseStudyCard;
