import styles from "../../styles/atlassian-services-style/jiramanagement.module.scss";
import AtlassianSubHead from "components/atlassian-service-reuse/atlassianSubhead";

const JiraTools = () => {
  return (
    <section className={`container-fluid ${styles.jira__tools}`}>
      <div className="container">
        <AtlassianSubHead
          headings="Jira Service Management"
          strategy="Transform your IT service operations into a streamlined and efficient powerhouse. Our team brings extensive experience and technical expertise to every project, ensuring a seamless integration of JSM into your existing workflows."
        />
      </div>
    </section>
  );
};

export default JiraTools;
