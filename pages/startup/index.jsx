import Badges from "components/Alluvium-Redesign-2025/ReuseComponents/badges";
import Expertise from "components/Alluvium-Redesign-2025/expertise";
import HeroSection from "components/Alluvium-Redesign-2025/startup/HeroSection";
import Layout from "components/layout";
import React from "react";
import SupportPackage from "components/Alluvium-Redesign-2025/startup/SupportPackage";
import DownLoadOffer from "components/Alluvium-Redesign-2025/startup/downloadOffer";
import ContactSection from "components/Alluvium-Redesign-2025/ContactSection";

const StartupPackagePage = () => {
  return (
    <Layout withoutForm={true}>
      <HeroSection />
      <SupportPackage />
      <ContactSection />
      <DownLoadOffer />
    </Layout>
  );
};

export default StartupPackagePage;
