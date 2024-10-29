import styles from "../../styles/atlassian-services-style/supports.module.scss";
import AtlassianSubHead from "components/atlassian-service-reuse/atlassianSubhead";
import ReasonsCard from "components/atlassian-service-reuse/ReasonsCard";

const StandOut = () => {
  return (
    <section className={`container-fluid ${styles.stand__out}`}>
      <div className={`container ${styles.comprehensive__standout}`}>
        <AtlassianSubHead
          headings="What Makes Us Stand Out"
          strategy="Lorem ipsum dolor sit amet consectetur. Purus dui eget felis congue arcu praesent proin. Nec varius orci placerat laoreet ut hendrerit id."
        />
      </div>

      {/* You can use the ReasonsCard here, mapping through the data */}
    </section>
  );
};

export default StandOut;
