import Layout from "components/layout";
import styles from "../../../styles/licence.module.scss";
import Exceptional from "components/licence-component/exceptional";
import WhyMigrate from "components/cloud-migration-compo/whymigrate";
import { trainingPageCards } from "data";
import GetStarted from "components/atlassian-service-reuse/getStarted";
import Link from "next/link";
import Button from "components/atlassian-service-reuse/Button";
import ServicesHero from "components/atlassian-service-reuse/servicesHero";

const Training = () => {
  return (
    <Layout>
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
        heading="Expert Atlassian Training Tailored for Your Success"
        paragraphs={[
          "More than being a licensed Atlassian training partner, we have a proven track record of expertise and smooth deliveries. We’ll provide comprehensive Atlassian training customized to suit your personal, business, and budget needs. ",
          "Our Experienced Atlassian Consultants will make it a point of duty to equip you with Atlassian customized solutions. Regardless of your team size, we will ensure you fully leverage the benefits of Atlassian tools. By listening to your needs and customizing your training program, we equip your team with the precise skills required for success.",
        ]}
        image="/assets/services/training-partner.png"
      />
      <WhyMigrate
        heading="Our Training Programs"
        description="Identify the power of Jira Service Management to support your IT support processes and create the best customer support experience."
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
