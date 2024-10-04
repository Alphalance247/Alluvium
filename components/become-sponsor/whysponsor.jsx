import { becomeSponsor } from "data";
import { sponsorPackage } from "data";
import styles from "../../styles/cloud2.4/sponsor.module.scss";
import Packages from "components/cloud-connect-2/Packages";
import BecomeReuse from "components/cloud-connect-common/becomeReuse";

const WhySponsor = () => {
  const getStarted = [
    {
      title: "Fill Form",
      details:
        "Provide the necessary information in the fields below to begin the process.",
    },
    {
      title: "Make Payment",
      details:
        "After submitting the form, follow the instructions to complete the payment.",
    },
    {
      title: "Get Confirmation",
      details:
        "Once your payment is processed, you will receive a confirmation via email.",
    },
  ];
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

      <section className={styles.get__started}>
        <div className="container mx-auto">
          {/* <BecomeReuse heading="How to get started" /> */}
          <div className={styles.get__started__info}>
            {getStarted.map((item, i) => {
              return (
                <div key={i}>
                  <h4>0{1 + i}</h4>
                  <p className={styles.title__style}>{item.title}</p>
                  <p className={styles.details__style}>{item.details}</p>
                </div>
              );
            })}
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
