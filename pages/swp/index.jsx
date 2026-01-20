import Hero from "components/Hero";
import Layout from "components/layout";
import Head from "next/head";
import SwpHero from "./components/hero";
import GetInTouch from "./components/getInTouch";
import CustomerStory from "./components/customerStory";
import MeetBoard from "./components/meetBoard";

const SWP = () => {
  return (
    <div>
      <Layout>
        <Head>
          <title>SWP | Alluvium</title>
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
          <SwpHero />
          <GetInTouch />
          <MeetBoard />
          <CustomerStory />
        </main>
      </Layout>
    </div>
  );
};

export default SWP;
