import Layout from "components/layout";
import React from "react";
import LicenceHero from "../atlassian-licence/licencehero";
import ServerToCloud from "components/atlassian-service-reuse/serverToCloud";
import WhyMigrate from "components/cloud-migration-compo/whymigrate";
import ChooseAlluvium from "components/atlassian-service-compo/chooseAlluvium";
import { consultingPageCards } from "data";

const Consulting = () => {
  return (
    <Layout>
      <LicenceHero
        withrequest={false}
        contentsheading="ATLASSIAN CONSULTANCY & STRATEGY"
        contentsheading1="Strategic Atlassian Consultancy for Optimal Results"
        contentsheading2="Are you seeking Atlassian expertise to implement ITSM, optimize your current setup, migrate your data to Atlassian Cloud, or enhance your existing Atlassian configuration? Let us help you tackle your teams' challenges."
        buttontext="Book a schedule"
        withSlide={false}
      />
      <ServerToCloud
        image2={true}
        heading="Empowering Your Success with Expert Atlassian Guidance"
        paragraph="Unlock the full potential of Atlassian tools with our expert consulting services. Whether you're implementing new solutions, optimizing workflows, or scaling for growth, we tailor our approach to meet your unique business needs. Our certified Atlassian experts work closely with you to ensure your tools drive efficiency and support your long-term goals. From strategy to execution, we're here to help you achieve measurable results and maximize your investment."
        image2Url="/assets/licence-image/cloudpic.svg"
        alt2="cloudpic"
      />
      <WhyMigrate
        heading="Tailored Atlassian Solutions for Every Business Need"
        description=""
        data={consultingPageCards}
      />
      <ChooseAlluvium
        choose="Why Plan Your Migration With Alluvium?"
        strategy="From strategy to execution, our team of experts will provide the utmost guidance and smooth delivery through your data migration journey."
      />
    </Layout>
  );
};

export default Consulting;
