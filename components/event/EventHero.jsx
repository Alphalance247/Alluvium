import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/eventblog.module.scss";
export default function () {
  return (
    <>
      <div className={` ${styles.herobanner}`}>
        <div className={` ${styles.upcomingparent}`}>
          <div className={` ${styles.upcoming}`}>
            <text className={` ${styles.herotext}`}>Upcoming Event</text>
          </div>
        </div>
        <div className={` ${styles.heroimg}`}>
          <div>
            <Image
              className={` ${styles.customdiv}`}
              width={539}
              height={227.43}
              src="/assets/event/ccimg.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
