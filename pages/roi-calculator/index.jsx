import Layout from "components/layout";
import LeadForm from "components/leadform";

const RoiCalculator = () => {
  return (
    <Layout>
      <LeadForm
        dataUrl={"https://site-api.alluvium.net/utilities/roi-calculator/"}
      />
    </Layout>
  );
};

export default RoiCalculator;
