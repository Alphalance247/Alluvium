import { JiraCards } from "data";
import WhyMigrate from "components/cloud-migration-compo/whymigrate";

const SupportServices = () => {
  return (
    <WhyMigrate
      heading="Comprehensive Support Services for Every Need"
      description="Lorem ipsum dolor sit amet consectetur. Purus dui eget felis congue arcu praesent proin. Nec varius orci placerat laoreet ut hendrerit id."
      data={JiraCards}
      threeColumn={true}
    />
  );
};

export default SupportServices;
