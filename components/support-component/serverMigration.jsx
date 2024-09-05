import AtlassianSubHead from "components/atlassian-service-reuse/atlassianSubhead";
import styles from "../../styles/atlassian-services-style/supports.module.scss";

const ServerMigration = () => {
  return (
    <section className={`container-fluid ${styles.support__style}`}>
      <div className={`container- ${styles.cloud__support}`}>
        <AtlassianSubHead
          headings="About our Atlassian support"
          strategy="We offer dedicated Atlassian support to help you solve your Atlassian challenges. Our support is delivered by our certified Atlassian consultants who are happy to help you with functional and technical questions regarding Atlassian apps and 3rd party Marketplace apps."
        />
      </div>
    </section>
  );
};

export default ServerMigration;
