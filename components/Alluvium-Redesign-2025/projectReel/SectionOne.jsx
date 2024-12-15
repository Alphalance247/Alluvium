import Image from "next/image";
import React from "react";
import styles from "../../../styles/AlluviumRedesign2025/projectReel/sectionOne.module.scss";
import IntegrationIcon from "../icons/IntegrationIcon";
import MarkIcon from "../icons/MarkIcon";
import LegacyIcon from "../icons/LegacyIcon";

const cticker = [
  {
    icon: <IntegrationIcon />,
    title: "Agile Implementation",
    paragraph:
      "We transitioned a UK bank to Agile with Atlassian tools and legacy system integration.",
  },
  {
    icon: <MarkIcon />,
    title: "Compliance & Security",
    paragraph:
      "We ensured compliance with ISO and audit standards during the migration.",
  },
  {
    icon: <LegacyIcon />,
    title: "Legacy Systems Integration",
    paragraph:
      "We migrated from taiga.io and Jira to Jira Cloud, integrating SharePoint with Confluence.",
  },
];

const accomplishments = [
  { title: "2 Jira servers", paragraph: "Successfully migrated to Jira Cloud" },
  {
    title: "100% Compliance",
    paragraph: "with ISO and audit standards",
  },
];

const SectionOne = () => {
  return (
    <div className={styles.mainContainer}>
      <main>
        <div className={styles.agile}>
          <h3 className={styles.headingss}>
            Agile Implementation at a UK Bank
          </h3>
          <p>
            We implemented a large-scale Agile way of working using Atlassian
            tools, <br /> ensuring compliance and seamless integration
          </p>
        </div>
        <div className={styles.agile_way}>
          <Image
            src="/assets/redesign-2025/OurMission.webp"
            alt="agile way"
            width={635}
            height={523}
          />
          <div className={styles.container}>
            <h4>
              Agile Way of Working implementation on a large scale at a top tier
              UK bank.
            </h4>
            <p>
              We helped a major UK bank set up an entirely new way of working by
              using Atlassian tools and process in conjunction with their
              existing legacy tools. This delivery included meeting compliance
              standard to satisfy the stringent ISO and Audit requirements of
              the compliance department of the institution.
            </p>
            <p>
              This helped to bring structure and organisation during this
              massive change. Part of the legacy systems and tools involved in
              the migration included taiga.io, migration of 2 Jira servers to
              Jira Cloud and integration of SharePoint with Confluence.
            </p>
          </div>
        </div>

        <div className={styles.gridContainer}>
          {cticker.map((item, i) => (
            <div key={i} className={styles.gridItem}>
              <div className={styles.iconContainer}>{item.icon}</div>
              <h5 className={styles.heading5}>{item.title}</h5>
              <p>{item.paragraph}</p>
            </div>
          ))}
        </div>

        <div className={styles.accomplishments}>
          {accomplishments.map((accomplishment, i) => (
            <div className={styles.accomplishItem} key={i}>
              <h4>{accomplishment.title}</h4>
              <p>{accomplishment.paragraph}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SectionOne;
