import styles from "../../styles/participant.module.scss";

const Table = () => {
  return (
    <div className={styles.container}>
      <h1>Interested participant details</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Country of Residence</th>
            <th>Email</th>
            <th>How are you attending</th>
            <th>Email Updates</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Azeez</td>
            <td>Moshood</td>
            <td>+2348140686688</td>
            <td>Nigeria</td>
            <td>al.moshood017@gmail.com</td>
            <td>online</td>
            <td>yes</td>
          </tr>
          <tr>
            <td>Azeez</td>
            <td>Moshood</td>
            <td>+2348140686688</td>
            <td>Nigeria</td>
            <td>al.moshood017@gmail.com</td>
            <td>online</td>
            <td>yes</td>
          </tr>
          <tr>
            <td>Azeez</td>
            <td>Moshood</td>
            <td>+2348140686688</td>
            <td>Nigeria</td>
            <td>al.moshood017@gmail.com</td>
            <td>online</td>
            <td>yes</td>
          </tr>
          <tr>
            <td>Azeez</td>
            <td>Moshood</td>
            <td>+2348140686688</td>
            <td>Nigeria</td>
            <td>al.moshood017@gmail.com</td>
            <td>online</td>
            <td>yes</td>
          </tr>
          <tr>
            <td>Azeez</td>
            <td>Moshood</td>
            <td>+2348140686688</td>
            <td>Nigeria</td>
            <td>al.moshood017@gmail.com</td>
            <td>online</td>
            <td>yes</td>
          </tr>
          <tr>
            <td>Azeez</td>
            <td>Moshood</td>
            <td>+2348140686688</td>
            <td>Nigeria</td>
            <td>al.moshood017@gmail.com</td>
            <td>online</td>
            <td>yes</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
