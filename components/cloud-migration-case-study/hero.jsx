import Image from "next/image";
import styles from "../../styles/cloud-migration-case-study/migartionmain.module.scss";

const HeroCloud = () => {
  const data = [
    {
      score: "358%",
      dexcription: "Return on investment (ROI)",
    },
    {
      score: "$27.62M",
      dexcription: "Net present value (NPV)",
    },
    {
      score: "1.5 hrs",
      dexcription: "Developer time saved",
    },
  ];

  return (
    <section className={`container-fluid ${styles.hero__cloud}`}>
      <div className={`"container mx-auto" ${styles.hero__cloud__sub}`}>
        <div className={styles.cloud__content}>
          <p className={styles.trusted_solution}>
            Alluvium are Trusted Solution Partner of Atlassian
          </p>
          <h1 className={styles.boost__product}>
            Boosting Productivity with Jira Data Center to Cloud Migration
          </h1>
          <p className={styles.migrating__jira}>
            Migrating from Jira Data Center to Cloud increased productivity by
            20%. With Jira’s ability to unify complex toolsets into streamlined
            DevOps workflows, teams overcame agile and DevOps challenges. Five
            organizations reported faster delivery and enhanced team
            productivity.
          </p>

          <div className={styles.percentage__return}>
            {data.map((el, i) => {
              return (
                <div key={i}>
                  <p className={styles.percentage}>{el.score}</p>
                  <p className={styles.return}>{el.dexcription}</p>
                </div>
              );
            })}
          </div>
        </div>

        <Image
          src="/assets/Cloud-Migration-Case-Study/cloud__computing.png"
          alt=""
          width={740}
          height={580}
        />
      </div>
      <div className={styles.background__set}></div>
    </section>
  );
};

export default HeroCloud;
