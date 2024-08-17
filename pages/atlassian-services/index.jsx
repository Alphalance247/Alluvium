import DiscoverAtlassian from "components/atlassian-service-compo/discoverAtlassian";
import MarketPlace from "components/atlassian-service-compo/marketplace";
import ProductAtlassian from "components/atlassian-service-compo/productAtlassian";
import Layout from "components/layout";
import CustomerReview from "components/our-customers/customer";
import ChooseAlluvium from "components/atlassian-service-compo/chooseAlluvium";
import FaQuestions from "components/licence-component/faQuestion";
import ServicesHero from "components/atlassian-service-reuse/servicesHero";
import Button from "components/atlassian-service-reuse/Button";
import Link from "next/link";
import GetStarted from "components/atlassian-service-reuse/getStarted";

const AtlassianService = () => {
  return (
    <Layout>
      <ServicesHero
        contentsheading="ATLASSIAN SERVICES"
        contentsheading1="Customized Atlassian Services for Enhanced Productivity"
        contentsheading2="Implement or optimize your Atlassian apps through our Atlassian products and services."
        withSlide={true}
        button1={
          <Link href="/support/contact#schedule-a-call">
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

      <DiscoverAtlassian />
      <MarketPlace />
      <ProductAtlassian />
      <GetStarted
        heading="Your Atlassian Partner and Solution Expert"
        text="Let`s discuss your unique needs and challenges, and we`ll develop a customized solution tailored specifically for your use case."
        button1={
          <Link href="/support/contact#schedule-a-call">
            <Button size="large" className="mx-4">
              Schedule a Call
            </Button>
          </Link>
        }
        button2={
          <Link href="/support/contact#schedule-a-call">
            <Button size="large" variant="outline">
              Schedule a Call
            </Button>
          </Link>
        }
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
