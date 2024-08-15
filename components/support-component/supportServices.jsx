import styles from "../../styles/atlassian-services-style/supports.module.scss";
import AtlassianSubHead from "components/atlassian-service-reuse/atlassianSubhead";

const SupportServices = () => {
  return (
    <section className={`container-fluid ${styles.support__service}`}>
      <div className={`container ${styles.comprehensive__service}`}>
        <AtlassianSubHead
          headings="Comprehensive Support Services for Every Need"
          strategy="Lorem ipsum dolor sit amet consectetur. Purus dui eget felis congue arcu praesent proin. Nec varius orci placerat laoreet ut hendrerit id."
        />
      </div>
    </section>
  );
};

export default SupportServices;
