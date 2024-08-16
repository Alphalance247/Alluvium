import AtlassianSubHead from "components/atlassian-service-reuse/atlassianSubhead";
import styles from "../../styles/atlassian-services-style/jiramanagement.module.scss";
import WhyMigrate from "components/cloud-migration-compo/whymigrate";
import { JiraCards } from "data";

const JiraService = () => {
  return (
    <WhyMigrate
      heading="The power of Jira Service Management"
      description="Identify the power of Jira Service Management to support your IT support processes and create the best customer support experience."
      data={JiraCards}
      threeColumn={true}
    />
  );
};

export default JiraService;
