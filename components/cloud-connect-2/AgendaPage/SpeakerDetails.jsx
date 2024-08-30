import styles from "../../../styles/cloud-connect-2/Agenda/agenda.module.scss";

const SpeakerDetails = ({ speakerImage, speakerName, speakerTitle }) => {
  return (
    <div className={styles.speakerDetails}>
      <img
        src={speakerImage}
        alt={speakerName}
        className={styles.speakerImage}
      />
      <div className={styles.speakerInfo}>
        <span className={styles.speakerType}>Keynote Speaker</span>
        <h3 className={styles.speakerName}>{speakerName}</h3>
        <p className={styles.speakerTitle}>{speakerTitle}</p>
      </div>
    </div>
  );
};

export default SpeakerDetails;
