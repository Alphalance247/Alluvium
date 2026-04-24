// import React from "react";
// import styles from "../../../styles/AlluviumRedesign2026/about/awards.module.scss";

// const awardsData = [
//   {
//     label: "How it All started",
//     description:
//       "Atlassian named Alluvium a finalist for Partner of the Year 2024–2025 (Emerging Markets), highlighting its “exceptional innovation” and impact for customers.",
//   },
//   {
//     label: "How it All started",
//     description:
//       "Atlassian named Alluvium a finalist for Partner of the Year 2024–2025 (Emerging Markets), highlighting its “exceptional innovation” and impact for customers.",
//   },
//   {
//     label: "How it All started",
//     description:
//       "Atlassian named Alluvium a finalist for Partner of the Year 2024–2025 (Emerging Markets), highlighting its “exceptional innovation” and impact for customers.",
//   },
// ];

// const AwardsSection = () => {
//   return (
//     <section className={styles.wrapper}>
//       <div className={styles.innerContainer}>
//         {/* Section Headline */}
//         <h2 className={styles.title}>Awards & recognition</h2>

//         {/* Awards Loop */}
//         <div className={styles.awardsList}>
//           {awardsData.map((award, index) => (
//             <div key={index} className={styles.awardItem}>
//               <div className={styles.awardLabel}>{award.label}</div>
//               <div className={styles.awardDescription}>{award.description}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AwardsSection;

import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/about/awards.module.scss";
import Image from "next/image";

const AwardsSection = () => {
  // DRY: Partner data array
  const partners = [
    {
      width: 278,
      height: 74,
      alt: "Atlassian Gold Solution Partner",
      img: "/assets/atlassian-badges/gold-solution-partner.png",
    },
    {
      width: 286,
      height: 78,
      alt: "Atlassian Solution Partner",
      img: "/assets/atlassian-badges/atlassian-solution-partner-b.png",
    },
    {
      width: 239,
      height: 74,
      alt: "Atlassian Marketplace Partner",
      img: "/assets/atlassian-badges/marketplace.png",
    },
  ];

  // DRY: Recognition images array
  const recognitionImages = [
    {
      img: "/assets/atlassian-badges/cloud-migration.png",
      width: 201,
      height: 134,
      alt: "Atlassian Cloud Migration Specialization",
    },
    {
      img: "/assets/atlassian-badges/service-management-specialization.png",
      width: 196,
      height: 134,
      alt: "Atlassian Service Management Specialization",
    },
    {
      img: "/assets/atlassian-badges/itsm-specialization.png",
      width: 201,
      height: 134,
      alt: "Atlassian ITSM Specialization",
    },
  ];

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Awards & Recognition</h2>
          <p className={styles.subtitle}>
            Operating at the standards of Atlassian Cloud Specialized partners,
            focusing on high-complexity enterprise transitions.
          </p>
        </div>

        <div className={styles.contentGrid}>
          {/* Loop through Partner Badges */}
          <div className={styles.partnerRow}>
            {partners.map((partner, index) => (
              <div key={index} className={partner.className}>
                <Image
                  src={partner.img}
                  width={partner?.width}
                  height={partner?.height}
                  alt={partner?.alt}
                />
              </div>
            ))}
          </div>

          {/* Loop through Awards/Specializations */}
          <div className={styles.specializationRow}>
            {recognitionImages.map((src, index) => (
              <img
                key={index}
                src={src.img}
                width={src.width}
                height={src.height}
                alt={src.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
