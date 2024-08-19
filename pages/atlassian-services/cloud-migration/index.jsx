import Layout from "components/layout";
import styles from "./../../../styles/licence.module.scss";
import Link from "next/link";
import WhyMigrate from "components/cloud-migration-compo/whymigrate";
import CaseStudies from "components/case-studies/case-studies";
import FaQuestions from "components/licence-component/faQuestion";
import { cloudOptions } from "data";
import ChooseAlluvium from "components/atlassian-service-compo/chooseAlluvium";
import MigrationProcess from "components/cloud-migration-compo/migrationProcess";
import ServerToCloud from "components/atlassian-service-reuse/serverToCloud";
import Button from "components/atlassian-service-reuse/Button";
import GetStarted from "components/atlassian-service-reuse/getStarted";
import ServicesHero from "components/atlassian-service-reuse/servicesHero";

const CloudMigration = () => {
  return (
    <Layout>
      <ServicesHero
        contentsheading="ATLASSIAN LICENSE MANAGEMENT"
        contentsheading1="Effortless Atlassian Migration"
        contentsheading2="When smooth and secure data migration matters, make Alluvium your go-to partner."
        withSlide={false}
        button1={
          <Link href="/support/contact#schedule-a-call">
            <Button size="large">Schedule a Demo</Button>
          </Link>
        }
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
      <WhyMigrate
        heading="Why Migrate to the Atlassian Cloud?"
        description="From strategy to execution, our team of experts will provide the utmost
        guidance and smooth delivery through your data migration journey."
        data={cloudOptions}
        largeGap={true}
      />
      <ChooseAlluvium
        choose="Why Plan Your Migration With Alluvium?"
        strategy="From strategy to execution, our team of experts will provide the utmost guidance and smooth delivery through your data migration journey."
      />
      <div className={`container-fluid ${styles.seamlessMigration}`}>
        <GetStarted
          heading="Seamlessly migrate your data with Alluvium – Get started now!"
          text={false}
          variant="primary"
          button1={
            <Link href="/support/contact#schedule-a-call">
              <Button size="large">Schedule a Free Consult</Button>
            </Link>
          }
        />
      </div>
      <MigrationProcess />
      <CaseStudies />
      <FaQuestions />
    </Layout>
  );
};

export default CloudMigration;
