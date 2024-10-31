import styles from "../../styles/Atlassian-Case-Study/advantages.module.scss";

const Advantages = () => {
  const data = [
    {
      percentage: "44%",
      feedback: "greater efficiency",
    },
    {
      percentage: "66%",
      feedback: "reduction in time to resolution",
    },
    {
      percentage: "70%",
      feedback: "fewer major IT incidents",
    },
    {
      percentage: "140%",
      feedback: "increase in customer satisfaction",
    },
  ];
  return (
    <section className={`container ${styles.advantage__section} mx-auto`}>
      <div>
        <p className={`${styles.success}`}>
          The Atlassian Advantage: Success by the Numbers
        </p>
      </div>
      <div className={`${styles.percentage__feedback}`}>
        {data.map((el, i) => {
          return (
            <div key={i} className={`${styles.percentage__horizontal}`}>
              <p className={styles.percentage}>{el.percentage}</p>
              <p className={styles.feedback}>{el.feedback}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Advantages;
