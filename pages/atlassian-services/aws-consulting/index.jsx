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

const AwsConsulting = () => {
  return (
    <Layout>
      <ServicesHero
        contentsheading=""
        contentsheading1="Accelerate Innovation with Seamless DevOps Solutions"
        contentsheading2="Lorem ipsum dolor sit amet consectetur. Auctor placerat est fusce vestibulum ac at augue diam malesuada. Dui at semper eget dolor cras ipsum viverra. "
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
          strategy="Lorem ipsum dolor sit amet consectetur. Neque ornare velit in bibendum. Euismod tellus platea integer sed ante commodo morbi scelerisque proin. A dictumst arcu nunc morbi elit vitae sagittis curabitur. Pulvinar ut habitant ut aliquam orci vulputate congue ante. Congue sit amet sagittis adipiscing et id nulla massa. Quam vulputate accumsan nisl faucibus suspendisse vulputate gravida netus. Lorem faucibus tempus rhoncus blandit."
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
        paragraph="Lorem ipsum dolor sit amet consectetur. Nisl pretium quam nullam ut integer. Sit maecenas eu dignissim sollicitudin est varius. Donec dolor dapibus auctor condimentum vel nunc. Risus non amet purus sem consectetur. Enim vitae quis laoreet cursus amet mollis sagittis sit. Quisque varius cursus in erat praesent eget enim. A cras sed cras morbi. Sed a elit eget eu senectus in. Iaculis duis senectus nisl massa sed nunc tristique nibh."
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
        description="Lorem ipsum dolor sit amet consectetur. Interdum enim condimentum malesuada proin tortor porta nisi."
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

export default AwsConsulting;
