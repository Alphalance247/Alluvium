import Image from "next/image";
import Link from "next/link";
import styles from "../styles/hero-carousel.module.scss";
export default function () {
  return (
    <div className={` ${styles.herobanner}`}>
      <div className={`${styles.atbanner} container mx-auto`}>
        <div className="">
          <div className="">
            <h1 className={`text-white ${styles.atp}`}>
              We are a Trusted Atlassian Partner
            </h1>
            <p className={`${styles.prg}`}>
              We are ITSM, DevOps and Data Migration Experts
            </p>
            <div className={`${styles.atbtn}`}>
              <div>
                <Link href="/why-hire-us">
                  <a className={`text-white mr-4 ${styles.hirebtn}`}>
                    {/* <p className={` ${styles.hiretext}`}>Why hire us as your Atlassian partner</p> */}
                    Why hire us as your Atlassian partner
                  </a>
                </Link>
              </div>

              <div>
                <Link href="https://alluvium.net/support/contact#schedule-a-call">
                  <a className={`${styles.callbtn} text-white mr-4 border`}>
                    Schedule a call
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={` img-fluid ${styles.customimg}`}>
          <Image
            className={` img-fluid ${styles.customdiv}`}
            width={393.77}
            height={302}
            src="/assets/bdg.png"
            alt="atlassian-badges"
          />
        </div>
      </div>
    </div>
  );
}
