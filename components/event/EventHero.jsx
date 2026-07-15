import Image from "next/legacy/image";
import Link from "next/link";
import styles from "../../styles/eventblog.module.scss";
export default function () {
  return (
    <div className={`container-fluid p-0 ${styles.herobanner}`}>
      <div className={`container m-auto`}>
        <div className={` ${styles.upcomingparent}`}>
          <div className={` ${styles.upcoming}`}>
            <text className={` ${styles.herotext}`}>Upcoming Event</text>
          </div>
        </div>
        <div className={` ${styles.heroimg}`}>
          <div>
            <Image
              className={` ${styles.customdiv}`}
              width={600}
              height={227}
              src="/assets/cloud-connect/images/logo.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
