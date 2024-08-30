import styles from "../../styles/cloud2.4/sponsor.module.scss";

const BecomeReuse = ({ heading, paragraph }) => {
  return (
    <div className={styles.BecomeReuseStyle}>
      <h2>{heading}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export default BecomeReuse;
