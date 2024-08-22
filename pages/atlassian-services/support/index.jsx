import ServicesHero from "components/atlassian-service-reuse/servicesHero";
import Layout from "components/layout";
import ServerMigration from "components/support-component/serverMigration";
import Link from "next/link";
import Button from "components/atlassian-service-reuse/Button";
import SupportPackages from "components/support-component/supportPackages";
import SupportServices from "components/support-component/supportServices";
import LearnMore from "components/support-component/learnMore";
import ChooseAlluvium from "components/atlassian-service-compo/chooseAlluvium";
import { chooseUsAlluvium } from "data";

const Support = () => {
  return (
    <Layout>
      <ServicesHero
        contentsheading="ATLASSIAN SUPPORT"
        contentsheading1="Expert Atlassian Support "
        contentsheading2="Lorem ipsum dolor sit amet consectetur. Purus dui eget felis congue arcu praesent proin. Nec varius orci placerat laoreet ut hendrerit id."
        withSlide={false}
        button1={
          <Link href="/support/contact#schedule-a-call">
            <Button size="large">Book a Call</Button>
          </Link>
        }
      />
      <ServerMigration />
      <SupportServices />
      <SupportPackages />
      <LearnMore />
      <ChooseAlluvium
        choose="What Makes Us Stand Out"
        strategy="From strategy to execution, our team of experts will provide the utmost guidance and smooth delivery through your data migration journey."
        chooseUsAlluvium={chooseUsAlluvium}
      />
    </Layout>
  );
};

export default Support;
