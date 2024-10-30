import Link from "next/link";
import styles from "../../styles/atlassian-services-style/atlassianlicenceservices.module.scss";
import { discoverAtlassiansServ } from "data";
import { GoArrowRight } from "react-icons/go";
import useSticky from "components/customhooks/UseSticky";

const DiscoverAtlassian = () => {
  const { isSticky, sectionRef } = useSticky();

  return (
    <section className={`container-fluid ${styles.atlassiandiscover}`}>
      <div className={`container ${styles.services}`}>
        <div
          className={`${styles.discoverfaq} ${isSticky ? styles.sticky : ""}`}
        >
          <h5>OUR SERVICES</h5>
          <h3>Discover Our Atlassian Services</h3>
          <p>
            Our team of Atlassian certified experts is ready to help you tackle
            any of your Atlassian challenges.
          </p>
          <Link href="/support/contact#schedule-a-call">
            <button className={styles.button1}>Schedule a Call</button>
          </Link>
        </div>
        <div ref={sectionRef} className={`${styles.discoverdropdown}`}>
          {discoverAtlassiansServ.map((item, i) => (
            <div key={item?.id}>
              <Link href={"/atlassian-services/" + item?.servicepage} passHref>
                <div className={`${styles.questionsSection}`}>
                  <p className={`${styles.idstyle}`}>0{item?.id}</p>
                  <div className={`${styles.questcontent}`}>
                    <div className={styles.arrowsec}>
                      <h5>{item?.heading}</h5>
                      <GoArrowRight className={styles.arrowRightStyle} />
                    </div>
                    <p>{item?.questions}</p>
                    <hr className={` ${styles.horizon}`} />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverAtlassian;
