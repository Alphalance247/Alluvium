import styles from "../../styles/eventpage.module.scss";

const Register = () => {
  return (
    <div className={styles.register}>
      <h1>Registration is now open for onsite and virtual attendees</h1>
      <button className={styles.btn}>Buy Tickets</button>
    </div>
  );
};

export default Register;
