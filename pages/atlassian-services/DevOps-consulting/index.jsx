import Layout from "components/layout";
import ServicesHero from "components/atlassian-service-reuse/servicesHero";
import Link from "next/link";
import Button from "components/atlassian-service-reuse/Button";
import AtlassianSubHead from "components/atlassian-service-reuse/atlassianSubhead";
import Image from "next/image";
import styles from "../../../styles/atlassian-services-style/aws.module.scss";
import ChooseAlluvium from "components/atlassian-service-compo/chooseAlluvium";
import { transformativeChanges } from "data";
import ServerToCloud from "components/atlassian-service-reuse/serverToCloud";
import GetStarted from "components/atlassian-service-reuse/getStarted";
import WhyMigrate from "components/cloud-migration-compo/whymigrate";
import { DevOpsCard } from "data";
import { chooseUsAlluvium } from "data";

const DevOps = () => {
  return (
    <Layout>
      <ServicesHero
        contentsheading=""
        contentsheading1="Accelerate Innovation with Seamless DevOps Solutions"
        contentsheading2="DevOps has reformed the way software is developed, delivered, and maintained. It fosters collaboration, efficiency, and continuous improvement by bridging the gap between development and operations teams"
        withSlide={false}
        button1={
          <Link href="/support/contact#schedule-a-call">
            <Button size="large">Get in Touch</Button>
          </Link>
        }
      />

      <section className={styles.aws__operation}>
        <AtlassianSubHead
          headings="A Modern Approach to Software Development and Operations"
          strategy="At Alluvium, we understand that in today's fast-paced business environment, software development and delivery need to be efficient and effective. Our DevOps solutions are designed to streamline your processes, improve collaboration, and accelerate innovation."
        />
        <div className="text-center">
          <Image
            src="/assets/licence-image/awsimage.svg"
            alt="aws image"
            width={563}
            height={267}
          />
        </div>
      </section>

      <ChooseAlluvium
        choose="DevOps Brings Transformative Changes to Your Business in Multiple Ways"
        strategy="Lorem ipsum dolor sit amet consectetur. Purus dui eget felis congue arcu praesent proin. Nec varius orci placerat laoreet ut hendrerit id."
        chooseUsAlluvium={transformativeChanges}
        backgroundVariant="primary"
        variant="primary"
      />

      <ServerToCloud
        paragraph="Empower your business with Alluvium's comprehensive DevOps solutions. Our expert team offers a wide range of services, from consulting and implementation to cloud migration and security, to help you optimize your software development and delivery processes. Improve software quality, enhance collaboration, reduce costs, and gain a competitive advantage. Contact us today to learn more."
        heading="Comprehensive DevOps Solutions for Seamless Delivery"
        showWithImage={false}
        variant="newdefaults"
        display="newdefaults"
      />

      <div className={`container-fluid ${styles.seamlessMigration}`}>
        <GetStarted
          heading="Transform your business with our tailored DevOps solutions."
          showText={false}
          button1={
            <Link href="/support/contact#schedule-a-call">
              <Button size="large">Schedule a Call</Button>
            </Link>
          }
          variant="secondary"
        />
      </div>

      <WhyMigrate
        heading="Our Comprehensive DevOps Service Offerings"
        description="At Alluvium, we offer comprehensive DevOps solutions designed to meet your unique needs. Our team of experts will work closely with you to implement best practices, optimize workflows, and drive innovation."
        data={DevOpsCard}
      />

      <ChooseAlluvium
        choose="Why Choose Us"
        strategy="From strategy to execution, our team of experts will provide the utmost guidance and smooth delivery through your data migration journey."
        chooseUsAlluvium={chooseUsAlluvium}
      />
    </Layout>
  );
};

export default DevOps;
