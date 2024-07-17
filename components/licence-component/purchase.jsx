import styles from "../../styles/licence.module.scss";
import { purchaseOptions } from "data";

const Purchase = () => {
  return (
    <div className={`container-fluid ${styles.subdiv}`}>
      <div className={`container mx-auto ${styles.purchaseOption}`}>
        <div className={`${styles.purchaseHeading}`}>
          <h5>License Purchase Options</h5>
          <p>
            Optimize Your Atlassian Licensing with Alluvium: Tailored Solutions
            for Every Stage.
          </p>
        </div>
        <div className={`${styles.descript}`}>
          {purchaseOptions.map((el) => {
            return (
              <div
                style={{
                  display: "flex",
                  columnGap: "1.5rem",
                  alignItems: "start",
                }}
                key={el.id}
              >
                <h5>0{el.id}</h5>
                <div>
                  <h6>{el.headings}</h6>

                  <p>{el.paragraphs}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Purchase;
