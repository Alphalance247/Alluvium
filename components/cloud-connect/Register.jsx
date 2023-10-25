import styles from "../../styles/eventpage.module.scss";
import Link from "next/link";

const Register = () => {
  return (
    <div className={styles.register}>
      <h1>Registration is now open for onsite and virtual attendees</h1>
      <Link href={'/event/register'}>
        <a className={styles.btn}>Register</a>
      </Link>
    </div>
  );
};

export default Register;
