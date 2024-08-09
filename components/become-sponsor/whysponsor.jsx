import { becomeSponsor } from "data";
import { sponsorPackage } from "data";
import styles from "../../styles/cloud2.4/sponsor.module.scss";

const WhySponsor = () => {
  return (
    <section className={`container-fluid ${styles.whybecomesponsor}`}>
      <div className="container">
        <div className={styles.firstheading}>
          <div className={styles.whybecomeheading}>
            <h3>WHY BECOME A SPONSOR</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquet amet massa lorem
              diam feugiat. Tristique velit velit proin amet cras diam mi. Vel
              nunc ut feugiat quis dolor
            </p>
          </div>

          <div className={styles.whybecomeloop}>
            {becomeSponsor.map((item) => {
              return (
                <div key={item.id} className={styles.sponsorItem}>
                  <h6>{item.headings}</h6>
                  <p>{item.paragraphs}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.sponspackages}>
          <h3>SPONSORSHIP PACKAGES</h3>

          <div className={styles.packdivs}>
            {sponsorPackage.map((item) => {
              return (
                <div key={item.id} className={styles.packagesItem}>
                  <p className={styles.packagesP}>{item?.title}</p>
                  <h6>{item?.price}</h6>
                  <p>{item?.paragraphs}</p>
                  <ul>
                    <li>{item?.list1}</li>
                    <li>{item?.list2}</li>
                    <li>{item?.list3}</li>
                    <li>{item?.list4}</li>
                    {item.list5 && <li>{item?.list5}</li>}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySponsor;
