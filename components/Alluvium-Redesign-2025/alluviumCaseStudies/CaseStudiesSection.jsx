import React from "react";
import styles from "../../../styles/AlluviumRedesign2025/alluviumCaseStudies/case-studies-section.module.scss";
import { SlArrowDown } from "react-icons/sl";
import CaseCard from "../ReuseComponents/CaseCard";
import FilterComponent from "../ReuseComponents/FilterComponent";

const arrayCaseStudies = [
  {
    src: "/assets/redesign-2025/pexels1.webp",
    industry: "INSURANCE",
    title:
      "Streamlining Server to Atlassian Cloud Migration for an Insurance Company",
    imgAlt: "image sof a woman",
    url: "/case-studies/streamlining-server-to-Aalassian-cloud-migration-for-an-insurance-company",
  },
  {
    src: "/assets/redesign-2025/pexels.webp",
    industry: "AGRICULTURE",
    title:
      "A Successful Server to Cloud Migration for an Agricultural business",
    imgAlt: "image sof a woman",
    url: "/case-studies/streamlining-server-to-Aalassian-cloud-migration-for-an-insurance-company",
  },
  {
    src: "/assets/redesign-2025/pexels1.webp",
    industry: "INSURANCE",
    title:
      "Streamlining Server to Atlassian Cloud Migration for an Insurance Company",
    imgAlt: "image sof a woman",
    url: "/case-studies/streamlining-server-to-Aalassian-cloud-migration-for-an-insurance-company",
  },
  {
    src: "/assets/redesign-2025/pexels.webp",
    industry: "AGRICULTURE",
    title:
      "A Successful Server to Cloud Migration for an Agricultural business",
    imgAlt: "image sof a woman",
    url: "/case-studies/streamlining-server-to-Aalassian-cloud-migration-for-an-insurance-company",
  },
  // {
  //   src: "/assets/redesign-2025/pexels1.webp",
  //   industry: "INSURANCE",
  //   title:
  //     "Streamlining Server to Atlassian Cloud Migration for an Insurance Company",
  //   imgAlt: "image sof a woman",
  // },
  // {
  //   src: "/assets/redesign-2025/pexels.webp",
  //   industry: "AGRICULTURE",
  //   title:
  //     "A Successful Server to Cloud Migration for an Agricultural business",
  //   imgAlt: "image sof a woman",
  // },
  // {
  //   src: "/assets/redesign-2025/pexels1.webp",
  //   industry: "INSURANCE",
  //   title:
  //     "Streamlining Server to Atlassian Cloud Migration for an Insurance Company",
  //   imgAlt: "image sof a woman",
  // },
  // {
  //   src: "/assets/redesign-2025/pexels.webp",
  //   industry: "AGRICULTURE",
  //   title:
  //     "A Successful Server to Cloud Migration for an Agricultural business",
  //   imgAlt: "image sof a woman",
  // },
  // {
  //   src: "/assets/redesign-2025/pexels1.webp",
  //   industry: "INSURANCE",
  //   title:
  //     "Streamlining Server to Atlassian Cloud Migration for an Insurance Company",
  //   imgAlt: "image sof a woman",
  // },
  // {
  //   src: "/assets/redesign-2025/pexels.webp",
  //   industry: "AGRICULTURE",
  //   title:
  //     "A Successful Server to Cloud Migration for an Agricultural business",
  //   imgAlt: "image sof a woman",
  // },
];

const CaseStudiesSection = () => {
  const handleSelected = (option) => {
    console.log(option);
  };
  return (
    <div className={styles.mainContainer}>
      <main>
        <p className={styles.highlights}>OUR Project Highlights</p>
        <h3 className={styles.heading3}>
          Transforming Businesses with <br /> Solutions
        </h3>

        <div className={styles.parentContainer}>
          <div className={styles.filterSection}>
            <FilterComponent
              onSelect={handleSelected}
              options={[
                "insurance",
                "agriculture",
                "business",
                "academics",
                "hospitality",
              ]}
              title="THEME"
            />
            <FilterComponent
              onSelect={handleSelected}
              options={[
                "insurance",
                "agriculture",
                "business",
                "academics",
                "hospitality",
                "",
              ]}
              title="INDUSTRY"
            />
            <FilterComponent
              onSelect={handleSelected}
              options={[
                "insurance",
                "agriculture",
                "business",
                "academics",
                "hospitality",
                "",
              ]}
              title="SERVICE"
            />
          </div>
          <div className={styles.caseStudies}>
            {arrayCaseStudies.map((card, index) => (
              <CaseCard
                key={index}
                imgSrc={card.src}
                width={392}
                height={191}
                industry={card.industry}
                title={card.title}
                imgAlt={card.imgAlt}
                url={card?.url}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CaseStudiesSection;
