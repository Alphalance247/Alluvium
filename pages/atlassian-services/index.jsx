import DiscoverAtlassian from "components/atlassian-service-compo/discoverAtlassian";
import MarketPlace from "components/atlassian-service-compo/marketplace";
import ProductAtlassian from "components/atlassian-service-compo/productAtlassian";
import Layout from "components/layout";
import ChooseUs from "components/licence-component/chooseUs";
import Platinum from "components/licence-component/platinum";
import CustomerReview from "components/our-customers/customer";
import LicenceHero from "pages/atlassian-services/atlassian-licence/licencehero";
import styles from "../../styles/licence.module.scss";

const AtlassianService = () => {
  return (
    <Layout>
      <LicenceHero
        withrequest={true}
        contentsheading="ATLASSIAN SERVICES"
        contentsheading1="End-to-End Atlassian Services for Enhanced Productivity"
        contentsheading2="Lorem ipsum dolor sit amet consectetur. Purus dui eget felis congue arcu praesent proin. Nec varius orci placerat laoreet ut hendrerit id."
        buttontext="Request License"
        withSlide={true}
      />
      <DiscoverAtlassian />
      <MarketPlace />
      <ProductAtlassian />
      <Platinum
        heading="Your Atlassian Platinum Partner"
        buttoncontent="Schedule a Call"
        button1style={styles.button3}
        scheduleRequest="/support/contact#schedule-a-call"
      />
      <ChooseUs choose="Why Choose Alluvium" />
      <CustomerReview />
    </Layout>
  );
};

export default AtlassianService;
