import Image from "next/image";
import styles from "../../styles/licence.module.scss";

const Exceptional = () => {
  return (
    <div className="container-fluid  " style={{ background: "#f9fafb" }}>
      <div className={` container mx-auto ${styles.exception}`}>
        <div>
          <Image
            src="/assets/licence-image/Certs.svg"
            alt="certs"
            width={227}
            height={113}
          />
        </div>

        <div>
          <p className={`${styles.manage}`}>LICENSE MANAGEMENT</p>
          <h5>
            Exceptional Customer Support Ensuring Prompt and Effective
            Assistance
          </h5>
          <p className={`${styles.lorem}`}>
            Lorem ipsum dolor sit amet consectetur. Cras metus imperdiet cras
            suspendisse mi libero pulvinar diam magnis. Turpis ultrices purus
            risus a. Magna integer eget nunc non. At ultrices enim tortor varius
            suspendisse in eget.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Exceptional;
