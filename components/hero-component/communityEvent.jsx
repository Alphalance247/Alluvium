import styles from "../../styles/hero-carousel.module.scss";
import Link from "next/link";

const CommunityEvent = () => {
  return (
    <div className={`${styles.localEvent}`}>
      <div style={{ paddingBottom: "3rem" }}>
        <img
          src="/assets/hero/grouping1.png"
          width={900}
          alt=""
          style={{ margin: "auto" }}
          className={`${styles.imagrespon}`}
        />
      </div>
      <div className={styles.speakersSec}>
        <div>
          <img
            src="/assets/hero/speakgif.svg"
            alt="speakgif"
            style={{ margin: "auto" }}
          />
        </div>
        <div style={{ marginTop: "2rem" }}>
          <img
            src="/assets/hero/speakergrp.png"
            width={660}
            height={350}
            alt="speakers"
            className={`${styles.speakrespon}`}
            style={{ margin: "auto" }}
          />
        </div>
        <div className={styles.paraG}>
          <p>Sat, 13th July</p>
          <p>10am-11am WAT</p>
          <p>Zoom</p>
        </div>
        <div>
          <Link href="https://support.portal.alluvium.net/servicedesk/customer/portal/58/group/175/create/683">
            <button>Register now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommunityEvent;
