import styles from "../../styles/licence.module.scss";
import Link from "next/link";

const Platinum = () => {
  return (
    <div className={`container-fluid ${styles.platinumPlan}`}>
      <div className={`container mx-auto`}>
        <div className={` ${styles.partnerPlan}`}>
          <h5>Your Atlassian Partner and Solutions Expert</h5>
          <p>
            Let's discuss your unique needs and challenges, and we'll develop a
            customized solution tailored specifically for your use case.
          </p>
          <div>
            <Link href="/atlassian-licence/licence-request">
              <button className={styles.button1}>Request License</button>
            </Link>
            <button className={styles.button2}>Request Site Audit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platinum;
