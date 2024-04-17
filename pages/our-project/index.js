import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/project.module.scss";
import Image from "next/image";
import { BookingCTA } from "components/Consultation";
import Layout from "components/layout";

export default function OurProject() {
  const imagePath = "/assets/our-project/";
  let achievemnetKeys = 0;
  return (
    <Layout>
      <div className={styles.ourProject}>
        <Head>
          <title>Our Projects | Alluvium</title>
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
          <section className={styles.welcome}>
            <div className={styles.content}>
              <div className="container">
                <h1>Our Projects</h1>
                <p>
                We want you to know you are in safe hands, here’s a preview of <br/> previously done projects.
                </p>
                <Link href="#case-studies" className="m-5">
                    <a className={`btn btn-pri`}>View our case studies</a>
                </Link>
              </div>
            </div>
          </section>

          <section className={styles.about}>
            <div className="container">
              <div className="row gap-5 justify-content-between align-items-center">
                <div className="col-md-6">
                  <div className={styles.content}>
                    <div className={styles.heading}>
                      <h2>Agile Way of Working implementation on a large scale at a top tier UK bank.</h2>
                    </div>
                    <p>
                    We helped a major UK bank set up an entirely new way of working by using Atlassian tools and process in conjunction with their existing legacy tools. This delivery included meeting compliance standard to satisfy the stringent ISO and Audit requirements of the compliance department of the institution. 
                    </p>
                    <p>
                    This helped to bring structure and organisation during this massive change. Part of the legacy systems and tools involved in the migration included taiga.io, migration of 2 Jira servers to Jira Cloud and integration of SharePoint with Confluence.
                    </p>{" "}
                  </div>
                </div>
                <div className="position-relative col-md-5">
                  <Image
                    src={"/assets/our-project/agile-way-of-working.png"}
                    width={500}
                    height={450}
                    objectFit="contain"
                    alt="Atlassian tools"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className={styles.about}>
            <div className="container">
              <div className="row gap-5 justify-content-between align-items-center">
                <div className="position-relative col-md-5">
                  <Image
                    src={"/assets/our-project/deploying-atlassian-tools.png"}
                    width={500}
                    height={450}
                    objectFit="contain"
                    alt="Atlassian tools"
                  />
                </div>
                <div className="col-md-6">
                  <div className={styles.content}>
                    <div className={styles.heading}>
                      <h2>Deploying Atlassian Tools to support Project/Delivery Lifecycle / Governance with a major UK Telco</h2>
                    </div>
                    <p>
                    At the time a major telco company was going through a multimillion-pound transformation program, we came to help bring structure, simplicity, and scalability to their Safe Agile way of working adoption. This required restructuring of the entire Atlassian product set up, setting up of new configuration to help with progress reporting using advanced roadmap and BigGant, dependency tracking using Big Picture solution board. 
                    </p>
                    <p>
                    As part of the delivery, regular training and workshops were organised and delivered by our team to get the clients staffs comfortable with the tools usage.
                    </p>{" "}
                  </div>
                </div>
                
              </div>
            </div>
          </section>

          <section className={styles.about}>
            <div className="container">
              <div className="row gap-5 justify-content-between align-items-center">
                <div className="col-md-6">
                  <div className={styles.content}>
                    <div className={styles.heading}>
                      <h2>Jira Server/Jira Service Desk Migration</h2>
                    </div>
                    <p>
                    The client had their instance being hosted on a 3rd party’s server and wanted options when it was time to renew the hosting license, the client wanted options that would help reduce cost and improve efficiency within their delivery. 
                    </p>
                    <p>
                    A feasibility report was provided to compare but on prem and cloud hosting of Atlassian and a cost benefit analysis was provide, once all the security questions and checks were satisfactorily answered, the client took the cloud recommendation and we proceeded to set up Atlassian cloud products (Jira, Confluence and Jira Service Desk) and then migrated the existing 3rd party hosted instances to the cloud in a timely manner to prevent them from getting double billed as their license was almost ready for renewal. 
                    </p>{" "}
                    <p>
                    This delivery included setting up of new reporting dashboard for the different teams, workflows, automation around their change and ticket management processes as well as building a customer centric service desk portal. 
                    </p>
                  </div>
                </div>
                <div className="position-relative col-md-5">
                  <Image
                    src={"/assets/our-project/jira-server-migration.png"}
                    width={500}
                    height={450}
                    objectFit="contain"
                    alt="Atlassian tools"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className={styles.cta}>
            <div className="container">
              <BookingCTA />
            </div>
          </section>

        </main>
      </div>
    </Layout>
  );
}
