import Layout from "components/layout";
import Exceptional from "components/licence-component/exceptional";
import DepOption from "../../../components/licence-component/depOption";
import Platinum from "../../../components/licence-component/platinum";
import Purchase from "components/licence-component/purchase";
import ChooseUs from "components/licence-component/chooseUs";
import LicenceHero from "./licencehero";
import styles from "../../../styles/licence.module.scss";

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
      <Exceptional
        heading="Expert Advice and Support for Streamlined Atlassian License
            Management"
        paragraphs={[
          "Are you seeking an Atlassian partner to assist with purchasing Atlassian and Marketplace apps? Maximize your license investment by letting Alluvium manage your licenses.",
          "As a certified Atlassian partner, we are committed to helping you get the most out of your Atlassian investment, offering greater  transparency and simplicity in the licensing process.",
        ]}
        image= "/assets/licence-image/Certs.svg"
      />
      <DepOption />
      <Platinum
        heading="Your Atlassian Partner and Solutions Expert"
        buttoncontent="Request License"
        button1style={styles.button2}
        scheduleRequest="/atlassian-services/atlassian-licence/licence-request"
      />
      <Purchase />
      <ChooseUs choose="Why Choose Alluvium" />
    </Layout>
  );
};

export default AtlassianLicence;
