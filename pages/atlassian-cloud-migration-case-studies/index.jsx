import CloudMain from "components/cloud-migration-case-study/cloudMain";
import Layout from "components/layout";
import CaseStudyCard from "../../components/cloud-migration-case-study/caseStudyCard";
import HeroCloud from "components/cloud-migration-case-study/hero";

const CloudMigrationCaseStudy = () => {
  return (
    <Layout>
      <CloudMain />
      <CaseStudyCard />
      <HeroCloud />
    </Layout>
  );
};

export default CloudMigrationCaseStudy;
