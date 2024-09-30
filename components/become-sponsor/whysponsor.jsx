import { becomeSponsor } from "data";
import { sponsorPackage } from "data";
import styles from "../../styles/cloud2.4/sponsor.module.scss";
import Packages from "components/cloud-connect-2/Packages";

const WhySponsor = () => {
  return (
    <>
      <section
        className={`container-fluid ${styles.whybecomesponsor}`}
        style={{ background: "#009bc0" }}
      >
        <div className="container">
          <div className={styles.firstheading}>
            <div className={styles.whybecomeheading}>
              <h3>WHY BECOME A SPONSOR</h3>
              <p>
                Be a sponsor at Alluvium’s Cloud Connect event. Invest in
                Service excellence.
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
        </div>
      </section>

      <section
        className={`container-fluid ${styles.whybecomesponsor}`}
        style={{ background: "#082433" }}
      >
        <Packages
          sponsorPackage={sponsorPackage}
          heading="SPONSORSHIP PACKAGES"
        />
      </section>
    </>
  );
};

export default WhySponsor;
