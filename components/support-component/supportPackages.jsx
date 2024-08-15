import styles from "../../styles/atlassian-services-style/supports.module.scss";
import AtlassianSubHead from "components/atlassian-service-reuse/atlassianSubhead";

const SupportPackages = () => {
  return (
    <section className={`container-fluid ${styles.support__package}`}>
      <div className={`container ${styles.comprehensive__package}`}>
        <AtlassianSubHead
          headings="Atlassian Support Packages"
          strategy="Lorem ipsum dolor sit amet consectetur. Purus dui eget felis congue arcu praesent proin. Nec varius orci placerat laoreet ut hendrerit id."
        />
      </div>
    </section>
  );
};

export default SupportPackages;
