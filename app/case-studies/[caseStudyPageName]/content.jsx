"use client";
import React, { useCallback, useState, useMemo } from "react";
// import dynamic from "next/dynamic";
import Image from "next/legacy/image";
import Link from "next/link";
import { MdDownload } from "react-icons/md";
import { InView } from "react-intersection-observer";
import styles from "../../../styles/casestudypage.module.scss";
import { CaseStudyDataRedesign2025 } from "../../../data";
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

        <Hero caseStudy={caseStudy} />
        <ContentSection caseStudy={caseStudy} />
        <RelatedCard />
      </div>
    </Layout>
  );
}

