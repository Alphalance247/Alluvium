import AboutSection from "components/event/accelerating-incident/AboutSection";
import HeroSection from "components/event/accelerating-incident/HeroSection";
import RegistrationSection from "components/event/accelerating-incident/RegistrationSection";
import SpeakerSection from "components/event/accelerating-incident/SpeakerSection";
import Layout from "components/layout";
import React from "react";

const index = () => {
  return (
    <Layout>
      <HeroSection />
      <RegistrationSection />
      <SpeakerSection />
      <AboutSection />
    </Layout>
  );
};

export default index;
