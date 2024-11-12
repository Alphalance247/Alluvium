import Layout from "components/layout";
import styles from "../../../styles/licence.module.scss";
import Exceptional from "components/licence-component/exceptional";
import WhyMigrate from "components/cloud-migration-compo/whymigrate";
import { trainingPageCards } from "data";
import GetStarted from "components/atlassian-service-reuse/getStarted";
import Link from "next/link";
import Button from "components/atlassian-service-reuse/Button";
import ServicesHero from "components/atlassian-service-reuse/servicesHero";
import Head from "next/head";

const Training = () => {
  return (
    <Layout>
      <Head>
        <title>Atlassian-Training | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Alluvium is an Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers complete data migration in half the time for half the cost."
        />
        <meta
          name="keywords"
          content="Atlassian training, jira atlassian training, confluence atlassian training, bamboo atlassian training, atlassian training certification, atlassian training partner, atlassian admin training, atlassian access training, jira training and certification, atlassian jira align training, atlassian jira administrator training, atlassian jira and confluence training, atlassian bitbucket training, atlassian bamboo training, jira training basics"
        />
      </Head>
      <ServicesHero
        contentsheading1="Atlassian Training"
        contentsheading2="Upgrade your Atlassian tool skills and master the best practises for your daily work by getting trained by our certified Atlassian trainers."
        withSlide={false}
        button1={
          <Link href="/support/contact#schedule-a-call">
            <Button size="large">Get in Touch</Button>
          </Link>
        }
      />
      <Exceptional
        heading="Specialized Training to Master the Atlassian Tooling"
        paragraphs={[
          "More than being a licensed Atlassian training partner, we have a proven track record of expertise and smooth deliveries. We’ll provide comprehensive Atlassian training customized to suit your personal, business, and budget needs. ",
          "Our Experienced Atlassian Consultants will make it a point of duty to equip you with Atlassian customized solutions. Regardless of your team size, we will ensure you fully leverage the benefits of Atlassian tools. By listening to your needs and customizing your training program, we equip your team with the precise skills required for success.",
        ]}
        image="/assets/services/training-partner.png"
      />
      <WhyMigrate
        heading="Our Training Programs"
        description="Explore our Atlassian training options to identify which one fits your needs best."
        data={trainingPageCards}
        freeconsult={true}
      />
      <div className={`container-fluid ${styles.seamlessMigration}`}>
        <GetStarted
          heading="Book a Free Training Consultation With Our Experts Today."
          text={false}
          variant="primary"
          button1={
            <Link href="/support/contact#schedule-a-call" passHref>
              <Button size="large">Schedule a Call</Button>
            </Link>
          }
        />
      </div>
    </Layout>
  );
};

export default Training;
