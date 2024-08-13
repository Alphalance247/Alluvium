import DiscoverAtlassian from "components/atlassian-service-compo/discoverAtlassian";
import MarketPlace from "components/atlassian-service-compo/marketplace";
import ProductAtlassian from "components/atlassian-service-compo/productAtlassian";
import Layout from "components/layout";
import ChooseUs from "components/licence-component/chooseUs";
import Platinum from "components/licence-component/platinum";
import CustomerReview from "components/our-customers/customer";
import LicenceHero from "pages/atlassian-services/atlassian-licence/licencehero";
import styles from "../../styles/licence.module.scss";
import ChooseAlluvium from "components/atlassian-service-compo/chooseAlluvium";
import FaQuestions from "components/licence-component/faQuestion";

const AtlassianService = () => {
  return (
    <Layout>
      <LicenceHero
        withrequest={true}
        contentsheading="ATLASSIAN SERVICES"
        contentsheading1="Customized Atlassian Services for Enhanced Productivity"
        contentsheading2="Implement or optimize your Atlassian apps through our Atlassian products and services."
        buttontext="Schedule a Call"
        withSlide={true}
      />
      <DiscoverAtlassian />
      <MarketPlace />
      <ProductAtlassian />
      <Platinum
        heading="Your Atlassian Partner and Solution Expert"
        buttoncontent="Schedule a Call"
        button1style={styles.button3}
        scheduleRequest="/support/contact#schedule-a-call"
      />
      <ChooseAlluvium choose="Why Choose Alluvium" pargraphContent={true} />
      <CustomerReview />
      <FaQuestions />
    </Layout>
  );
};

export default AtlassianService;
