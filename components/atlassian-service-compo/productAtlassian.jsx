import styles from "../../styles/atlassian-services-style/atlassianlicenceservices.module.scss";
import Image from "next/image";
import { atlassianTools } from "data";

const ProductAtlassian = () => {
  return (
    <section className={`container-fluid ${styles.Productsection}`}>
      <div className={`container ${styles.productstyle}`}>
        <div className={`${styles.productfaq} text-center`}>
          <h5>OUR SERVICES</h5>
          <h3>Our Atlassian Suite of Products</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Purus dui eget felis congue
            arcu praesent proin. Nec varius orci placerat laoreet ut hendrerit
            id. Lorem ipsum dolor sit amet consectetur. Purus dui eget felis
            congue arcu praesent proin.
          </p>
        </div>

        <div className={`${styles.atlassiantool}`}>
          {atlassianTools.map((item) => {
            return (
              <div className={`${styles.atlassiansoftware}`} key={item.id}>
                <div>
                  <Image
                    src={item.imgChoose}
                    alt="jira"
                    width={64}
                    height={64}
                  />
                </div>
                <h6>{item.subhead}</h6>
                <h5>{item.headings}</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Integer vel tempor
                  fusce felis pulvinar risus tortor tempor pellentesque. Sed
                  nunc purus mauris enim suspendisse. Faucibus
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductAtlassian;
