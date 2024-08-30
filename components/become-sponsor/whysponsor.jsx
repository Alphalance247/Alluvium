import { becomeSponsor } from "data";
import { sponsorPackage } from "data";
import styles from "../../styles/cloud2.4/sponsor.module.scss";
import Button from "components/cloud-connect-2/Button";

const WhySponsor = () => {
  const handleScrollToView = () => {
    document
      .getElementById("sponsor-form-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };
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
        <div className={`container ${styles.sponspackages}`}>
          <h3>SPONSORSHIP PACKAGES</h3>

          <div className={styles.packdivs}>
            {sponsorPackage.map((item) => {
              return (
                <div key={item.id} className={styles.packagesItem}>
                  <p className={styles.packagesP}>{item?.title}</p>
                  <h6>{item?.price}</h6>
                  {/* <p>{item?.paragraphs}</p> */}
                  <ul className={styles.package__list}>
                    <li>{item?.list1}</li>
                    <li>{item?.list2}</li>
                    <li>{item?.list3}</li>
                    <li>{item?.list4}</li>
                    {item.list5 && <li>{item?.list5}</li>}
                  </ul>
                  <Button variant="outline" onClick={handleScrollToView}>
                    Get Started
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhySponsor;
