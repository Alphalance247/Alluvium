import PackageCard from "components/atlassian-service-reuse/PackageCard";
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

        <div className={styles.support__package__details}>
          <PackageCard
            packageName="Silver"
            hoursUse="Up to 80 support hours monthly"
            price="$600"
          />
          <PackageCard
            packageName="Gold"
            hoursUse="Up to 80 support hours monthly"
            price="$1500"
          />
          <PackageCard
            packageName="Platinum"
            hoursUse="Up to 80 support hours monthly"
            price="$2500"
          />
          <PackageCard
            packageName="Unlimited"
            hoursUse="Up to 80 support hours monthly"
            price="$3500"
          />
        </div>
      </div>
    </section>
  );
};

export default SupportPackages;
