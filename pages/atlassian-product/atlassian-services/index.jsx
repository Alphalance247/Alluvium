import DiscoverAtlassian from "components/atlassian-service-compo/discoverAtlassian";
import MarketPlace from "components/atlassian-service-compo/marketplace";
import ProductAtlassian from "components/atlassian-service-compo/productAtlassian";
import Layout from "components/layout";
import LicenceHero from "pages/atlassian-licence/licence-request/licencehero";
const AtlassianService = () => {
  return (
    <Layout>
      <LicenceHero
        withrequest={true}
        contentsheading="ATLASSIAN SERVICES"
        contentsheading1="End-to-End Atlassian Services for Enhanced Productivity"
        contentsheading2="Lorem ipsum dolor sit amet consectetur. Purus dui eget felis congue arcu praesent proin. Nec varius orci placerat laoreet ut hendrerit id."
        buttontext="Request License"
      />
      <DiscoverAtlassian />
      <MarketPlace />
      <ProductAtlassian />
    </Layout>
  );
};

export default AtlassianService;
