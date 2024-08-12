import styles from "../../styles/licence.module.scss";
import Image from "next/image";
import { cloudcounter } from "data";
import { PiCircleThin } from "react-icons/pi";
import { FaRegCircle } from "react-icons/fa";
{
  /* <PiCircleThin /> */
  //   <FaRegCircle />
}

const MigrationProcess = () => {
  return (
    <div className={`container-fluid ${styles.migration__process__alluvium}`}>
      <div className={`container m-auto ${styles.migration__process}`}>
        <h6>Alluvium Cloud Migration Process</h6>
        <div style={{ marginBottom: "2rem" }}>
          <Image
            src="/assets/licence-image/cloudprocess.png"
            alt="cloud-migration-process"
            width={1216}
            height={126}
          />
        </div>

        <div className={styles.cloud__process}>
          {cloudcounter.map((el) => {
            return (
              <div key={el.id}>
                <h6>{el.id}</h6>
                <p>{el.content}</p>
              </div>
            );
          })}
        </div>
        <p>
          Before starting your migration journey, we take the time to truly
          understand your unique Atlassian landscape. Through a comprehensive
          analysis of your current instance, we uncover your specific needs and
          pain points. This phase which takes about 14-21 days allows us to
          customize a migration strategy that seamlessly aligns with your
          business objectives.
        </p>
      </div>
    </div>
  );
};

export default MigrationProcess;
