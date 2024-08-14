import Layout from "components/layout";
import styles from "./../../../styles/licence.module.scss";
import Link from "next/link";
import WhyMigrate from "components/cloud-migration-compo/whymigrate";
import CaseStudies from "components/case-studies/case-studies";
import FaQuestions from "components/licence-component/faQuestion";
import LicenceHero from "pages/atlassian-services/atlassian-licence/licencehero";
import ChooseAlluvium from "components/atlassian-service-compo/chooseAlluvium";
import MigrationProcess from "components/cloud-migration-compo/migrationProcess";
import ServerToCloud from "components/atlassian-service-reuse/serverToCloud";

const CloudMigration = () => {
  return (
    <Layout>
      <LicenceHero
        withrequest={false}
        contentsheading="ATLASSIAN LICENSE MANAGEMENT"
        contentsheading1="Effortless Atlassian Migration"
        contentsheading2="When smooth and secure data migration matters, make Alluvium your go-to partner."
        buttontext="Schedule a Demo"
        withSlide={false}
      />
      <ServerToCloud
        image2={true}
        paragraph="From strategy to execution, our team of experts will provide the
          utmost guidance and smooth delivery throughout your data migration
          journey. We’ll help your team prepare for Cloud or Data Center
          migration by scrutinizing your systems and focusing on the estimation
          process and timeframe during business hours. Moving forward, we'll conduct an in-depth analysis of the finances and technical aspects of your project and evaluate any probable risks. We ultimately get the job done and smoothly delivered—no dent, no stain. Just sit back and watch us bring your migration dream to life."
        heading="Atlassian Server to Cloud Migration"
        image2Url="/assets/licence-image/cloudpic.svg"
        alt2="cloudpic"
      />
      <WhyMigrate />
      <ChooseAlluvium
        choose="Why Plan Your Migration With Alluvium?"
        strategy="From strategy to execution, our team of experts will provide the utmost guidance and smooth delivery through your data migration journey."
      />
      <div className={`container-fluid ${styles.seamlessMigration}`}>
        <div className={` ${styles.seamlessheading}`}>
          <h4>Seamlessly migrate your data with Alluvium – Get started now!</h4>

          <div>
            <Link href="/support/contact#schedule-a-call">
              <button className={styles.button1}>
                Schedule a Free Consult
              </button>
            </Link>
          </div>
        </div>
      </div>
      <MigrationProcess />
      <CaseStudies />
      <FaQuestions />
    </Layout>
  );
};

export default CloudMigration;
