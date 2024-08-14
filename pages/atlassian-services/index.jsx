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
import ServicesHero from "components/atlassian-service-reuse/servicesHero";
import Button from "components/atlassian-service-reuse/Button";
import Link from "next/link";

const AtlassianService = () => {
  return (
    <Layout>
      <ServicesHero
        contentsheading="ATLASSIAN SERVICES"
        contentsheading1="Customized Atlassian Services for Enhanced Productivity"
        contentsheading2="Implement or optimize your Atlassian apps through our Atlassian products and services."
        withSlide={true}
        button1={
          <Link href="/atlassian-services/atlassian-licence/licence-request">
            <Button size="large">Schedule a Call</Button>
          </Link>
        }
        button2={
          <Link href="/atlassian-services/atlassian-licence/licence-request">
            <Button size="large" variant="tertiary" className="mx-3">
              Request Site Audit
            </Button>
          </Link>
        }
      />
      {/* <LicenceHero
        withrequest={true}
        contentsheading="ATLASSIAN SERVICES"
        contentsheading1="Customized Atlassian Services for Enhanced Productivity"
        contentsheading2="Implement or optimize your Atlassian apps through our Atlassian products and services."
        buttontext="Schedule a Call"
        withSlide={true}
      /> */}
      <DiscoverAtlassian />
      <MarketPlace />
      <ProductAtlassian />
      <Platinum
        heading="Your Atlassian Partner and Solution Expert"
        buttoncontent="Schedule a Call"
        button1style={styles.button3}
        scheduleRequest="/support/contact#schedule-a-call"
      />
      <ChooseAlluvium
        choose="Why Choose Us"
        strategy="From strategy to execution, our team of experts will provide the utmost guidance and smooth delivery through your data migration journey."
      />
      <CustomerReview />
      <FaQuestions />
    </Layout>
  );
};

export default AtlassianService;
