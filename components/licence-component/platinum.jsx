import styles from "../../styles/licence.module.scss";
import Link from "next/link";

const Platinum = ({
  heading,
  buttoncontent,
  button1style,
  scheduleRequest,
}) => {
  return (
    <div className={`container-fluid ${styles.platinumPlan}`}>
      <div className={`container mx-auto`}>
        <div className={` ${styles.partnerPlan}`}>
          <h5>{heading}</h5>
          <p>
            Let's discuss your unique needs and challenges, and we'll develop a
            customized solution tailored specifically for your use case.
          </p>
          <div>
            <Link href={scheduleRequest}>
              <button className={styles.button1}>{buttoncontent}</button>
            </Link>
            {/* styles.button2 */}
            <button className={button1style}>Request Site Audit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platinum;
