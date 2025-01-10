import Badges from "components/Alluvium-Redesign-2025/ReuseComponents/badges";
import Expertise from "components/Alluvium-Redesign-2025/expertise";
import HeroSection from "components/Alluvium-Redesign-2025/startup/HeroSection";
import Layout from "components/layout";
import React from "react";

const StartupPackagePage = () => {
  return (
    <Layout>
      <HeroSection />
      <SupportPackage />
    </Layout>
  );
};

export default StartupPackagePage;
