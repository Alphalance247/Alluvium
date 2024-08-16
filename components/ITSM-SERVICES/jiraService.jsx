import AtlassianSubHead from "components/atlassian-service-reuse/atlassianSubhead";
import styles from "../../styles/atlassian-services-style/jiramanagement.module.scss";

const JiraService = () => {
  return (
    <section className={`container-fluid ${styles.jira__power}`}>
      <div className="container">
        <AtlassianSubHead
          headings="The power of Jira Service Management"
          strategy="Identify the power of Jira Service Management to support your IT support processes and create the best customer support experience."
        />
      </div>
    </section>
  );
};

export default JiraService;
