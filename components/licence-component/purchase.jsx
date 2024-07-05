import styles from "../../styles/licence.module.scss";
import { purchaseOptions } from "data";

const Purchase = () => {
  return (
    <div className={`container-fluid ${styles.subdiv}`}>
      <div className={`container mx-auto ${styles.purchaseOption}`}>
        <div className={`${styles.purchaseHeading}`}>
          <h5>License Purchase Options</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur. Purus dui eget felis congue
            arcu praesent proin. Nec varius orci placerat laoreet ut hendrerit
            id.
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
