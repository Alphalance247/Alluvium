import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/ai-adoption-training/partner-badge.module.scss";
import Image from "next/image";

const PartnerBar = () => {
  const partners = [
    {
      logo: "/assets/atlassian-badges/gold-solution-partner.png",
      label: "Gold Solution Partner",
      width: 222,
      height: 60,
    },
    {
      logo: "/assets/atlassian-badges/trainingpartner.jpg",
      label: "Training Partner",
      width: 187,
      height: 60,
    },
    {
      logo: "/assets/atlassian-badges/market-place.png",
      label: "Marketplace Partner",
      width: 191,
      height: 60,
    },
    {
      logo: "/assets/Alluvium-Redesign-2026/badges/London_of_chamber.png",
      width: 158,
      height: 54,
      label: "London Chamber of Commerce",
    },
    {
      isSpecialization: true,
      title: "SERVICE MANAGEMENT",
      subtitle: "Specialization",
      width: 103,
      height: 70,
      logo: "/assets/atlassian-badges/atlassian-service-management.png",
      label: "Atlassian Service Management Specialization",
    },
  ];

  return (
    <div className={styles.partnerBarWrapper}>
      <div className={styles.container}>
        {partners.map((partner, index) => (
          <div key={index} className={styles.partnerItem}>
            <div className={styles.content}>
              <div className={styles.standardPartner}>
                <Image
                  src={partner.logo}
                  width={partner?.width}
                  height={partner?.height}
                  alt={partner.label}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerBar;
