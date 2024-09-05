import { JiraCards } from "data";
import WhyMigrate from "components/cloud-migration-compo/whymigrate";

const SupportServices = () => {
  return (
    <WhyMigrate
      heading="Dedicated Support for Every Use Case"
      description="Explore the range of Atlassian support services we offer to meet your needs."
      data={JiraCards}
      threeColumn={true}
    />
  );
};

export default SupportServices;
