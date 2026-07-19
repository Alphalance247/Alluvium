"use client";
import Layout from "components/layout";
import Hero from "./webinarComponents/hero";
import EventCountDown from "./webinarComponents/eventCountDown";
import WhyAttend from "./webinarComponents/whyAttend";
import OurSpeaker from "./webinarComponents/ourSpeaker";
import AttendeeQuotes from "./webinarComponents/attendQuetes";

const SWP = () => {
  return (
    <div>
      <Layout>

        <main>
          <Hero />
          <EventCountDown />
          <WhyAttend />
          <OurSpeaker />
          <AttendeeQuotes />
        </main>
      </Layout>
    </div>
  );
};

export default SWP;
