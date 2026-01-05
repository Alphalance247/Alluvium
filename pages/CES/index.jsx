import Layout from "components/layout";
import Head from "next/head";
import Hero from "./cmponents/hero";
import Badges from "components/Alluvium-Redesign-2025/ReuseComponents/badges";
import { badges } from "data";
import HowItWorks from "./cmponents/howItWorks";
import CalendlyWidget from "components/calendlyWidget";
import styles from "../../styles/contact-us.module.scss";
import MeetAlluvium from "./cmponents/meetAlluvium";
import AlluviumCESShowCaseStudy from "./cmponents/caseStudy";

const CES = () => {
  return (
    <div>
      <Layout>
        <Head>
          <title>CES | Alluvium</title>
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
          <Badges variant={"default"} badgesData={badges} />
          <HowItWorks />

          <div className={styles.booking} id="demo-request-section">
            <div className={styles.book_a_call}>
              <div>
                <h1>Speak to an Atlassian Solution Partner.</h1>
                <p>
                  Contact Alluvium in the US, UK, or Nigeria for Atlassian
                  consulting, licensing, or cloud migration support.
                </p>
              </div>
              {/* className="container-fluid my-5" */}
              <section id="schedule-a-call" className={styles.widget}>
                <CalendlyWidget />
              </section>
            </div>
          </div>
          <MeetAlluvium />
          <AlluviumCESShowCaseStudy />
        </main>
      </Layout>
    </div>
  );
};

export default CES;
