import Layout from "components/layout";
import HeroSection from "components/Alluvium-Redesign-2025/agile-at-scale/HeroSection";
import SecondSection from "components/Alluvium-Redesign-2025/agile-at-scale/SecondSection";
import styles from "../../../styles/AlluviumRedesign2025/agile-at-scale/AgileAtScale.module.scss";
import AtlassianServicesCard from "components/Alluvium-Redesign-2025/ReuseComponents/atlassianServicesCard";
import ThirdSection from "components/Alluvium-Redesign-2025/agile-at-scale/ThirdSection";
import ServicesCardReuse from "components/Alluvium-Redesign-2025/ReuseComponents/ServicesCardReuse";
import { agileOptions } from "constants/agile-at-scale";
import JiraAlign from "components/Alluvium-Redesign-2025/agile-at-scale/JiraAlign";
import ScaleServices from "components/Alluvium-Redesign-2025/agile-at-scale/ScaleServices";

const description = [
  {
    text: "Our Agile at Scale services are designed to help organizations implement and optimize agile practices across large teams and departments. We offer a range of services,",
  },
];

const AgileAtScale = () => {
  return (
    <Layout>
      <HeroSection />
      <SecondSection />
      <div className={styles.sectionContainer}>
        <div className={styles.innerContainer}>
          <AtlassianServicesCard
            title={"Our Comprehensive Agile at Scale Services"}
            description={description}
            useImage={false}
            useText={false}
            headingVariant="main"
            containerStyle={styles.containerStyle1}
            noBorderCard={"noBorderCard"}
          />
        </div>
      </div>
      <ScaleServices />
      <ThirdSection />
      <JiraAlign />
      <div className={styles.sectionContainer}>
        <div className={styles.innerContainer}>
          <AtlassianServicesCard
            title={"Why Agile at Scale Matters to Your Organization"}
            useImage={false}
            useText={false}
            headingVariant="main"
            containerStyle={styles.containerStyle2}
            noBorderCard={"noBorderCard"}
          />
        </div>
      </div>
      <ServicesCardReuse
        data={agileOptions}
        useText={false}
        useImage={true}
        gridVariant={"primary"}
      />
    </Layout>
  );
};

export default AgileAtScale;
