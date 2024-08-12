import styles from "../../styles/licence.module.scss";
import { cloudOptions } from "data";

const WhyMigrate = () => {
  return (
    <div className={`container-fluid ${styles.migration}`}>
      <div className={`container mx-auto ${styles.atlassianCloud}`}>
        <div className={`${styles.cloudheading}`}>
          <h5>Why Migrate to the Atlassian Cloud?</h5>
          <p>
            From strategy to execution, our team of experts will provide the
            utmost guidance and smooth delivery through your data migration
            journey.
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
