import Image from "next/image";
import styles from "../../styles/cloud-migration-case-study/migartionmain.module.scss";

const HeroCloud = ({ item }) => {
  return (
    <section className={`container-fluid ${styles.hero__cloud}`}>
      <div className={`"container mx-auto" ${styles.hero__cloud__sub}`}>
        <div className={styles.cloud__content}>
          <p className={styles.trusted_solution}>{item.aboutAlluvium}</p>
          <h1 className={styles.boost__product}>{item.caseStudyTitle}</h1>
          <p className={styles.migrating__jira}>{item.whyMigrate}</p>

          <div className={styles.percentage__return}>
            {item.analytics.map((el, i) => {
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
          src={item.imageSrc}
          alt="case__study__image"
          width={740}
          height={580}
        />
      </div>
      <div className={styles.background__set}>
        
      </div>
    </section>
  );
};

export default HeroCloud;
