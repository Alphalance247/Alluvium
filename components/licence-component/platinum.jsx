import styles from "../../styles/licence.module.scss";

const Platinum = () => {
  return (
    <div className={`container-fluid ${styles.platinumPlan}`}>
      <div className={`container mx-auto`}>
        <div className={` ${styles.partnerPlan}`}>
          <h5>Your Atlassian Platinum Partner</h5>
          <p>
            We start by understanding your unique needs and pain points so you
            get a bespoke solution built for Perfection Software and your use
            cases.
          </p>
          <div>
            <button className={styles.button1}>Request License</button>
            <button className={styles.button2}>Request Site Audit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platinum;
