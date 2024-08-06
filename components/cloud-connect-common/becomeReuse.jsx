import styles from "../../styles/cloud2.4/sponsor.module.scss";

const BecomeReuse = ({ heading, paragraph }) => {
  return (
    <div className={styles.BecomeReuseStyle}>
      <h3>{heading}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

export default BecomeReuse;
