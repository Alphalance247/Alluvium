import styles from "../../styles/licence.module.scss";
import { cloudOptions } from "data";

const WhyMigrate = () => {
  return (
    <div className={`container-fluid ${styles.migration}`}>
      <div className={`container mx-auto ${styles.atlassianCloud}`}>
        <div className={`${styles.cloudheading}`}>
          <h5>Why Migrate to the Atlassian Cloud?</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur. Purus dui eget felis congue
            arcu praesent proin. Nec varius orci placerat laoreet ut hendrerit
            id.
          </p>
        </div>
        <div className={`${styles.cloudcontent}`}>
          {cloudOptions.map((el) => {
            return (
              <div key={el.id}>
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

export default WhyMigrate;
