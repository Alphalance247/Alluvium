import React from "react";
import ServicesCardReuse from "../ReuseComponents/ServicesCardReuse";
import {
  scaleOptions,
  scaleOptions1,
  scaleOptions2,
} from "constants/agile-at-scale";
import styles from "../../../styles/AlluviumRedesign2025/agile-at-scale/ScaleServices.module.scss";

const ScaleServices = () => {
  return (
    <>
      <div className={styles.tablet}>
        <ServicesCardReuse
          data={scaleOptions1.slice(0, 2)}
          imageAvailable={false}
          containerStyle={styles.mainDiv1}
        />
        <ServicesCardReuse
          data={scaleOptions2.slice(0, 2)}
          imageAvailable={true}
          containerStyle={styles.mainDiv2}
        />
        <ServicesCardReuse
          data={scaleOptions1.slice(2, 4)}
          imageAvailable={false}
          containerStyle={styles.mainDiv1}
        />
        <ServicesCardReuse
          data={scaleOptions2.slice(2, 4)}
          imageAvailable={true}
          containerStyle={styles.mainDiv2}
        />
      </div>

      <div className={styles.mobile}>
        <ServicesCardReuse
          data={scaleOptions}
          imageAvailable={true}
        // containerStyle={styles.}
        />
      </div>
    </>
  );
};

export default ScaleServices;
