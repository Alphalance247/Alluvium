import styles from "../../styles/cloud2.4/general.module.scss";

const DetailsContact = ({ content }) => {
  return (
    <>
      <p className={`${styles.eventTicket}`}>{content}</p>
    </>
  );
};

export default DetailsContact;
