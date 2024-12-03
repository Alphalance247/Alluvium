import styles from "../../styles/AlluviumRedesign2025/redesign.module.scss";

const Heading = ({ title, heading, subhead }) => {
  return (
    <div className={styles.services__heading}>
      <p className={styles.how__we__help}>{title}</p>
      <h2>{heading}</h2>
      <p className={styles.discover__business}>{subhead}</p>
    </div>
  );
};

export default Heading;
