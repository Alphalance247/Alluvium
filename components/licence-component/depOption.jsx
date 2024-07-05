import styles from "../../styles/licence.module.scss";

const DepOption = () => {
  return (
    <div className={`container mx-auto ${styles.devoptional}`}>
      <div>
        <h5>Atlassian License Deployment Options</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur. Purus dui eget felis congue
          arcu praesent proin. Nec varius orci placerat laoreet ut hendrerit id.
        </p>
      </div>
      <div className={`${styles.optionwrap}`}>
        <div className={`${styles.divop}`}>
          <h6>Data Center</h6>
          <p>
            The Data Center option is recommended for larger organizations with
            250 or more users, for whom the availability and speed of Atlassian
            products is critical. <br /> <br /> The main difference to the
            Single Server option is the high availability and speed. Your
            systems will run distributed on several servers simultaneously.{" "}
            <br />
            <br /> This allows software updates or even maintenance work on
            individual machines during operation. Otherwise, you can use all the
            advantages of the Single Server option extended by some additional
            features like project archiving (i.e., Jira) or read-only mode
            (i.e., Confluence).
          </p>
        </div>
        <div className={`${styles.divop}`}>
          <h6>Atlassian Cloud</h6>
          <p>
            With Atlassian’s Cloud solution, you do not need to set up and
            maintain your own infrastructure. The systems, including all data,
            are managed on Atlassian’s servers. The Cloud solution is
            immediately ready for use and thus enables a quick introduction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DepOption;
