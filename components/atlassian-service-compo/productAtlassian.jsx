import styles from "../../styles/atlassian-services-style/atlassianlicenceservices.module.scss";
import Image from "next/legacy/image";
import { atlassianTools } from "data";

const ProductAtlassian = () => {
  return (
    <section className={`${styles.Productsection}`}>
      <div className={`${styles.productstyle}`}>
        {/* <div className={`${styles.productfaq} text-center`}>
          <h5>ATLASSIAN PRODUCTS</h5>
          <h3>Our Atlassian Suite of Products</h3>
          <p>
            See the overview below of the product suite of Atlassian apps we
            support as an Atlassian Partner
          </p>
        </div> */}

        <div className={`${styles.atlassiantool}`}>
          {atlassianTools.map((item) => {
            return (
              <div className={`${styles.atlassiansoftware}`} key={item?.id}>
                <div>
                  <Image
                    src={item?.imgChoose}
                    alt="jira"
                    width={48}
                    height={48}
                  />
                </div>
                <h5>{item?.headings}</h5>
                <p>{item?.paragraphs}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductAtlassian;
