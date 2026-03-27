import Layout from "components/layout";
import Head from "next/head";
import Hero from "./webinarComponents/hero";
import EventCountDown from "./webinarComponents/eventCountDown";
import WhyAttend from "./webinarComponents/whyAttend";
import OurSpeaker from "./webinarComponents/ourSpeaker";
import AttendeeQuotes from "./webinarComponents/attendQuetes";

const SWP = () => {
  return (
    <div>
      <Layout>
        <Head>
          <title>Atlassian Webinars | Alluvium</title>
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
