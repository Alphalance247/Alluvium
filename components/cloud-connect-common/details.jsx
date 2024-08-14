import styles from "../../styles/cloud2.4/general.module.scss";

const DetailsContact = ({ content, pad = true }) => {
  return (
    <>
      <p className={`${styles.eventTicket} ${pad && "px-4"} `}>{content}</p>
    </>
  );
};

export default DetailsContact;
