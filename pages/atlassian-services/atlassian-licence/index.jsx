import Layout from "components/layout";
import Exceptional from "components/licence-component/exceptional";
import DepOption from "../../../components/licence-component/depOption";
import Purchase from "components/licence-component/purchase";
import ChooseUs from "components/licence-component/chooseUs";
import LicenceHero from "./licencehero";
import GetStarted from "components/atlassian-service-reuse/getStarted";
import Button from "components/atlassian-service-reuse/Button";
import Link from "next/link";

const AtlassianLicence = () => {
  return (
    <Layout>
      <LicenceHero
        withrequest={true}
        contentsheading="ATLASSIAN LICENSE MANAGEMENT"
        contentsheading1="Streamlined Atlassian License Management"
        contentsheading2="Maximize your Atlassian license investment by gaining dedicated
            expert advice and support for managing your licenses."
        buttontext="Request License"
        withSlide={false}
      />
      <Exceptional />
      <DepOption />

      <GetStarted
        heading="Your Atlassian Partner and Solutions Expert"
        text="Let`s discuss your unique needs and challenges, and we`ll develop a customized solution tailored specifically for your use case."
        button1={
          <Link href="atlassian-services/atlassian-licence/licence-request">
            <Button size="large" className="mx-4">
              Request License
            </Button>
          </Link>
        }
        button2={
          <Link href="atlassian-services/atlassian-licence/licence-request">
            <Button size="large" variant="tertiary">
              Request Site Audit
            </Button>
          </Link>
        }
      />
      <Purchase />
      <ChooseUs choose="Why Choose Alluvium" />
    </Layout>
  );
};

export default AtlassianLicence;
