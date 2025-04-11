import HeroHeading from "../ReuseComponents/heroHeading";
import styles from "../../../styles/AlluviumRedesign2025/Atlassian-Services/atlassianservices.module.scss";
import ProductAtlassian from "components/atlassian-service-compo/productAtlassian";

const AtlassianSuite = () => {
  return (
    <section className={styles.atlassian__suite}>
      <div className={styles.suite}>
        <div className={styles.suite__heading}>
          <div className={styles.heading}>
            <HeroHeading
              withLink={true}
              subsec={"ATLASSIAN PRODUCTS"}
              heading={"Our Atlassian Suite of Products"}
              headSection=""
              variant={"secondary"}
              variantMargingFix="second"
            />
          </div>
          <p className={styles.paragraph}>
            See the overview below of the product suite of Atlassian apps we
            support as an Atlassian Partner
          </p>
        </div>

        <ProductAtlassian />
      </div>
    </section>
  );
};

export default AtlassianSuite;
