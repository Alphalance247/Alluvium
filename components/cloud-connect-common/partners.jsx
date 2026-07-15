import styles from "../../styles/cloud2.4/general.module.scss";
import Image from "next/legacy/image";
import { cloudatad24 } from "data";

const Partners = ({ showheadSponsor = false }) => {
  return (
    <section className={`container-fluid ${styles.partnersStyle}`}>
      <div className={`container `}>
        <h3 className={styles.partnersHeading}>OUR SPONSORS & PARTNERS</h3>
        {showheadSponsor && (
          <>
            <p>Head Sponsor</p>
            <div style={{ textAlign: "center" }}>
              <Image
                src="/assets/connect2.4/alluviumllg.svg"
                alt="headsponsor"
                width={134}
                height={30}
              />
            </div>
          </>
        )}

        <div className={styles.sponsorsimgs}>
          {cloudatad24.map((item) => (
            <div key={item.id} className="text-center">
              <Image
                src={item?.icon}
                width={item.widths}
                height={item.heigh}
                alt="partners"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
