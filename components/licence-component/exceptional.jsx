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
            Expert Advice and Support for Streamlined Atlassian License
            Management
          </h5>
          <p className={`${styles.lorem}`}>
            Are you seeking an Atlassian partner to assist with purchasing
            Atlassian and Marketplace apps? Maximize your license investment by
            letting Alluvium manage your licenses. <br />
            <br /> As a certified Atlassian partner, we are committed to helping
            you get the most out of your Atlassian investment, offering greater
            transparency and simplicity in the licensing process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Exceptional;
