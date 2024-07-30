import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/eventblog.module.scss";

const Connect = () => {
  return (
    <div className={`container mx-auto ${styles.gitex24}`}>
      <div className={` ${styles.gitexcontentdiv}`}>
        <div>
          <div className={`${styles.gitextdiv}`}>
            <text className={` ${styles.gitext}`}>CLOUD CONNECT ‘23</text>
          </div>
          <div className={`${styles.supertextdiv}`}>
            <text className={` ${styles.supertext}`}>ÏTSM | DEVOPS | AI</text>
          </div>
          <div className={`${styles.detailstextdiv}`}>
            <text className={` ${styles.detailstext}`}>
              Ekiti | Nov 30th, 2023
            </text>
          </div>
          <div className={`${styles.desctextdiv}`}>
            <p className={` ${styles.desctext}`}>
              Cloud Connect, the inaugural event hosted by Alluvium on November
              30, 2023, in Ado Ekiti, has left an indelible mark on Ekiti's tech
              landscape. As the largest gathering of tech enthusiasts and cloud
              engineers, Cloud Connect engaged and inspired attendees to make
              meaningful connections and widen their full potential in the
              fast-paced world of cloud technology. Although the event has
              concluded, its impact will continue to resonate, driving Ekiti's
              tech ecosystem forward. Stay tuned for juicy updates on Cloud
              Connect '24 and be part of the next wave of innovation with
              Alluvium.
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles.gitexpicturediv}`}>
        <Image
          className={`${styles}`}
          width={528.95}
          height={521.23}
          src="/assets/event/cc23img.png"
        />
      </div>
    </div>
  );
};

export default Connect;
