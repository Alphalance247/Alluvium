import Image from "next/legacy/image";
import styles from "../../styles/cloud-connect-2/Home/whyAttend.module.scss";

const AttendCloud = ({ data }) => {
  return (
    <div className={styles.whyAttend__grid}>
      {data.map((item, index) => (
        <div className={styles.card} key={index}>
          <Image
            src={item.icon}
            alt="icons"
            width={48}
            height={48}
            className={styles.card__icon}
          />
          <h3 className={styles.card__title}>{item.title}</h3>
          <p className={styles.card__description}>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AttendCloud;
