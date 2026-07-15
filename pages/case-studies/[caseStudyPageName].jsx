import React, { useCallback, useState, useMemo } from "react";
// import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import { MdDownload } from "react-icons/md";
import { InView } from "react-intersection-observer";
import styles from "../../styles/casestudypage.module.scss";
import { CaseStudyDataRedesign2025 } from "../../data";
import BookingCTA from "components/Booking";
import Layout from "components/layout";
import Hero from "components/Alluvium-Redesign-2025/case-studies/Hero";
import ContentSection from "components/Alluvium-Redesign-2025/case-studies/contentSection";
import RelatedCard from "components/Alluvium-Redesign-2025/case-studies/relatedStudy";

export default function CaseStudy({ caseStudy }) {
  const [activeNav, setActiveNav] = useState(null);
  const { details } = useMemo(() => caseStudy, [caseStudy]);

  const changeNav = useCallback((inView, entry) => {
    if (inView) {
      setActiveNav(entry?.target?.id);
    }
  }, []);

  return (
    <Layout>
      <div className={styles.caseStudyPage}>
        <Head>
          <title>{caseStudy?.title + " | Alluvium"}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Alluvium is an Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers complete data migration in half the time for half the cost."
          />
          <meta
            name="keywords"
            content={`${caseStudy?.title}, Alluvium, alluvium, team alluvium, atlassian products migration lab, migration, about alluvium, alluvians, cloud counter, Migration Experts, Software Consulting atlassian, confluence, jira`}
          />
        </Head>

        <Hero caseStudy={caseStudy} />
        <ContentSection caseStudy={caseStudy} />
        <RelatedCard />
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const caseStudiesArr = CaseStudyDataRedesign2025.filter(
    (caseStudy) =>
      caseStudy.caseStudyPageName.toString() === params.caseStudyPageName
  );

  return {
    props: {
      caseStudy: caseStudiesArr[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = CaseStudyDataRedesign2025.map((caseStudy) => ({
    params: { caseStudyPageName: caseStudy.caseStudyPageName.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
