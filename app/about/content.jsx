"use client";
import styles from "../../styles/about.module.scss";
import Layout from "components/layout";
import AboutHero from "components/Alluvium-Redesign-2026/about/hero";
import MissionSection from "components/Alluvium-Redesign-2026/about/ourMission";
import AboutGrid from "components/Alluvium-Redesign-2026/about/aboutAlluvium";
import AwardsSection from "components/Alluvium-Redesign-2026/about/awardsNomination";
import ImpactStory from "components/Alluvium-Redesign-2026/about/ourImpact";
import WhatWeNo from "components/Alluvium-Redesign-2026/home/services";
import ValuesGrid from "components/Alluvium-Redesign-2026/about/coreValue";
import WhatWeStandFor from "components/Alluvium-Redesign-2026/about/whatWeStandFor";
import SecurityCompliance from "components/Alluvium-Redesign-2026/cloud-upgrade/security";
import CtaBannerSection from "components/Alluvium-Redesign-2026/home/ctaBannerSection";

export default function AboutUs() {
  const complianceData = [
    {
      id: 1,
      src: "/assets/Alluvium-Redesign-2026/services/gdpr.png",
      alt: "Compliance Cert 1",
      size: styles.large,
      width: 264,
      height: 168,
    },
    {
      id: 2,
      src: "/assets/Alluvium-Redesign-2026/home/commerce.png",
      alt: "Compliance Cert 2",
      size: styles.medium,
      width: 212,
      height: 107,
    },
    {
      id: 3,
      src: "/assets/Alluvium-Redesign-2026/home/chamber.png",
      alt: "Compliance Cert 3",
      size: styles.small,
      width: 330,
      height: 112,
    },
  ];
  const stats = [
    { value: "57+", label: "Accreditations" },
    { value: "100+", label: "Projects delivered" },
    { value: "AMER, EMEA", label: "coverage" },
  ];
  return (
    <Layout>
      <div className={styles.aboutUsPage}>
        <main>
          <AboutHero />
          <MissionSection />
          <ImpactStory heading="By the numbers" stats={stats} />
          <WhatWeNo eyebrow="Our services" heading="What we do" />
          <ValuesGrid />
          <WhatWeStandFor />
          <AboutGrid />
          {/* <AwardsSection /> */}
          {/* <SecurityCompliance
            data={complianceData}
            withSubhead={false}
            heading={"Industry Accolades"}
          /> */}
          <CtaBannerSection
            label="SEE WHAT IS POSSIBLE"
            heading="See AI in action."
            description="Explore how we apply Rovo and Claude to real workflows, from knowledge management and customer experience to underwriting and compliance."
            ctaLabel="See AI in action"
            ctaHref="/ai"
          />
        </main>
      </div>
    </Layout>
  );
}
