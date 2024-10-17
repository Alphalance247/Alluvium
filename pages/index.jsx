import React from "react";
// import * as arrays from "../data";
import Head from "next/head";
import Services from "components/services-components/services";
import CaseStudies from "components/case-studies/case-studies";
// import WhyAlluvium from "components/whyAlluvium";
// import Hero from "components/Hero";
// import OurSolution from "components/ourSolutions";

// import OurPartners from "components/ourPartners";
// import WelcomeToAlluvium from "components/welcomeToAlluvium";
// import ToolsAndPlatforms from "components/toolsAndPlatforms";
import Layout from "components/layout";
import HeroCarousel from "components/HeroCarousel";
import styles from "../styles/hero.module.scss";
import Badges from "components/badges";
import Featured from "components/Featured";
import Solutions from "components/our-solutions/solutions";
import CustomerReview from "components/our-customers/customer";
const Home = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Home | Alluvium</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Alluvium is an Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers complete data migration in half the time for half the cost."
          />
          <meta
            name="keywords"
            content="Alluvium, alluvium, team alluvium, atlassian products migration lab, migration, about alluvium, alluvians, cloud counter, Migration Experts, Software Consulting atlassian, confluence, jira"
          />
        </Head>
        <div className="container-fluid p-0 m-0">
          <div className="container-fluid p-0" style={{ background: "" }}>
            <HeroCarousel />
            <Featured />
          </div>
          <Services />
          <Solutions />
          {/* <OurSolution /> */}
          {/* <WelcomeToAlluvium /> */}
          {/* <ToolsAndPlatforms /> */}
          {/* <WhyAlluvium /> */}
          {/* <OurPartners /> */}
          <CaseStudies />
          {/* <CustomerReview /> */}
          {/* <News /> */}
        </div>
      </Layout>
    </>
  );
};

export default Home;
