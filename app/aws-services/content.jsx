"use client";
import Layout from "components/layout";
import styles from "../../styles//atlassian-services-style/aws-services.module.scss";
import AtlassianServicesHero from "components/Alluvium-Redesign-2025/ReuseComponents/atlassianServicesHero";
import { Lines } from "components/Alluvium-Redesign-2025/ReuseComponents/Lines";
import Exceptional from "components/licence-component/exceptional";
import TailoredSolution from "components/Alluvium-Redesign-2025/aws-solutions/TailoredSolution";
import AwsExpert from "components/Alluvium-Redesign-2025/aws-solutions/AwsExpert";
import AwsTraining from "components/Alluvium-Redesign-2025/aws-solutions/AwsTraining";
import Head from "next/head";

const Content = () => {
  return (
    <Layout>
      <div style={{ background: "#fcfcfc" }}>
        <div style={{ maxWidth: "1272px", margin: "auto" }}>
          <Lines variant={"secondary"} />
        </div>
      </div>
      <AtlassianServicesHero
        withLink={true}
        subsec={"AWS"}
        heading={"Cloud Hosting & Infrastructure by Alluvium."}
        subhead={
          "Alluvium provides AWS hosting, infrastructure management, and DevOps automation to help businesses deploy and scale securely across cloud environments"
        }
        buttonText={"Schedule a Call"}
        url={"/contact-us"}
      />
      <Exceptional
        heading="Digital Transformation"
        paragraphs={[
          "Embrace the future of business with our AWS-powered Digital Transformation services. We guide you through every step of your cloud journey, from migrating legacy systems to modernizing your entire infrastructure. By leveraging the power of AWS, we enable your organization to innovate at speed, optimize operations, and scale effortlessly. Whether you’re looking to enhance agility, improve customer experiences, or drive new revenue streams, our tailored solutions are designed to meet your unique needs and propel your business forward in today’s digital age.",
        ]}
        image="/assets/redesign-2025/aws/awslogo.png"
        redesignStyle={true}
        variantPadding="default"
        width={416}
        height={416}
      />

      <div className={styles.tailored}>
        <div className={styles.sub__tailored}>
          <h3>Tailored AWS Solutions for Every Business Need</h3>
        </div>
      </div>

      <TailoredSolution />

      <div className={styles.tailored__consulting}>
        <div className={styles.sub__tailored__consulting}>
          <h3>Expert AWS Consulting to Drive Your Cloud Success</h3>
        </div>
      </div>

      <AwsExpert />
      <AwsTraining />
    </Layout>
  );
};

export default Content;
