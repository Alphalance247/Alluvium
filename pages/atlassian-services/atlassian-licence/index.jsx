import Layout from "components/layout";
import Exceptional from "components/licence-component/exceptional";
import DepOption from "../../../components/licence-component/depOption";
import Purchase from "components/licence-component/purchase";
import GetStarted from "components/atlassian-service-reuse/getStarted";
import Button from "components/atlassian-service-reuse/Button";
import Link from "next/link";
import ServicesHero from "components/atlassian-service-reuse/servicesHero";
import ChooseAlluvium from "components/atlassian-service-compo/chooseAlluvium";
import { chooseUsAlluvium } from "data";

const AtlassianLicence = () => {
  return (
    <Layout>
      <ServicesHero
        contentsheading="ATLASSIAN LICENSE MANAGEMENT"
        contentsheading1="Streamlined Atlassian License Management"
        contentsheading2="Maximize your Atlassian license investment by gaining dedicated
            expert advice and support for managing your licenses."
        withSlide={false}
        button1={
          <Link href="/atlassian-services/atlassian-licence/licence-request">
            <Button size="large" className="mx-4 my-4">
              Request License Quote
            </Button>
          </Link>
        }
        button2={
          <Link href="/atlassian-services/atlassian-licence/licence-request">
            <Button size="large" variant="tertiary">
              Get a Free Atlassian Audit
            </Button>
          </Link>
        }
      />
      <Exceptional
        categoryTitle="LICENSE MANAGEMENT"
        heading="Expert Advice and Support for Streamlined Atlassian License
            Management"
        paragraphs={[
          "Are you seeking an Atlassian partner to assist with purchasing Atlassian and Marketplace apps? Maximize your license investment by letting Alluvium manage your licenses.",
          "As a certified Atlassian partner, we are committed to helping you get the most out of your Atlassian investment, offering greater  transparency and simplicity in the licensing process.",
        ]}
        image="/assets/licence-image/Certs.svg"
      />

      <DepOption />

      <GetStarted
        heading="Your Atlassian Partner and Solutions Expert"
        text="Let`s discuss your unique needs and challenges, and we`ll develop a customized solution tailored specifically for your use case."
        button1={
          <Link href="/atlassian-services/atlassian-licence/licence-request">
            <Button size="large" className="mx-4 my-4">
              Request License Quote
            </Button>
          </Link>
        }
        button2={
          <Link href="/atlassian-services/atlassian-licence/licence-request">
            <Button size="large" variant="tertiary">
              Get a Free Atlassian Audit
            </Button>
          </Link>
        }
      />
      <Purchase />
      <ChooseAlluvium
        choose="Why Choose Alluvium"
        chooseUsAlluvium={chooseUsAlluvium}
      />
    </Layout>
  );
};

export default AtlassianLicence;
