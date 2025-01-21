import Layout from "components/layout";
import styles from "../../../styles/AlluviumRedesign2025/devOps/Devops.module.scss";
import HeroSection from "components/Alluvium-Redesign-2025/devOps/HeroSection";
import SecondSection from "components/Alluvium-Redesign-2025/devOps/SecondSection";
import ServicesCardReuse from "components/Alluvium-Redesign-2025/ReuseComponents/ServicesCardReuse";
import { devOpServices, devOpsOptions } from "constants/devOps";
import DevOpsSolution from "components/Alluvium-Redesign-2025/devOps/DevOpsSolution";
import AtlassianServicesCard from "components/Alluvium-Redesign-2025/ReuseComponents/atlassianServicesCard";

const description = [
  {
    text: "Explore the range of Atlassian support services we offer to meet your needs.",
  },
];
const description2 = [
  {
    text: "Empower your business with Alluvium's comprehensive DevOps solutions. Our expert team offers a wide range of services, from consulting and implementation to cloud migration and security, to help you optimize your software development and delivery processes. Improve software quality, enhance collaboration, reduce costs, and gain a competitive advantage. Contact us today to learn more.",
  },
];
const description3 = [
  {
    text: "At Alluvium, we offer comprehensive DevOps solutions designed to meet your unique needs. Our team of experts will work closely with you to implement best practices, optimize workflows, and drive innovation.",
  },
];

const DevOps = () => {
  return (
    <Layout>
      <HeroSection />
      <SecondSection />
      <div className={styles.sectionContainer}>
        <div className={styles.innerContainer}>
          <AtlassianServicesCard
            title={
              "DevOps Brings Transformative Changes to Your Business in Multiple Ways"
            }
            description={description}
            useImage={false}
            useText={false}
            headingVariant="main"
            containerStyle={styles.containerStyle1}
            noBorderCard={"noBorderCard"}
          />
        </div>
      </div>

      <ServicesCardReuse
        data={devOpsOptions}
        useText={false}
        useImage={true}
        gridVariant={"primary"}
      />
      <div className={styles.sectionContainer}>
        <div className={styles.innerContainer}>
          <AtlassianServicesCard
            title={"Our Comprehensive DevOps solution for seamless delivery"}
            description={description2}
            useImage={false}
            useText={false}
            headingVariant="main"
            containerStyle={styles.containerStyle2}
            noBorderCard={"noBorderCard"}
          />
        </div>
      </div>

      <DevOpsSolution />

      <div className={styles.sectionContainer}>
        <div className={styles.innerContainer}>
          <AtlassianServicesCard
            title={"Our Comprehensive DevOps Service Offerings"}
            description={description3}
            useImage={false}
            useText={false}
            headingVariant="main"
            containerStyle={styles.containerStyle3}
            noBorderCard={"noBorderCard"}
          />
        </div>
      </div>

      <ServicesCardReuse data={devOpServices} useText={false} useImage={true} />
    </Layout>
  );
};

export default DevOps;
