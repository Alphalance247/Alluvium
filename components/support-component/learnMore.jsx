import FAQss from "components/atlassian-service-compo/FAQss";
import styles from "../../styles/atlassian-services-style/supports.module.scss";
import AtlassianSubHead from "components/atlassian-service-reuse/atlassianSubhead";

const LearnMore = () => {
  return (
    <section className={`container-fluid ${styles.support__learn}`}>
      <div className={`container`}>
        <AtlassianSubHead
          headings="Learn More About Atlassian Support Packages"
          strategy="Lorem ipsum dolor sit amet consectetur. Purus dui eget felis congue arcu praesent proin. Nec varius orci placerat laoreet ut hendrerit id."
        />
        <div className={`container ${styles.comprehensive__learn}`}>
          <FAQss />
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
