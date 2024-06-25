import Image from "next/image";
import Link from "next/link";
import styles from "../styles/hero-carousel.module.scss";
export default function () {
  return (
    <div className={` ${styles.herobanner}`}>
      <div className={`row container mx-auto`}>
        <div className=" col-md-8">
          <div className="">
            <h1
              className={`text-white ${styles.atp}`}
            >
              We are a Trusted
            </h1>

            <h1
              className={`text-white ${styles.atp}`}
            >
              Atlassian Partner
            </h1>
              <p className={`${styles.prg}`}>
              We are ITSM, DevOps and Data Migration Experts
            </p>
            <Link href="#">
              <a
                className={`text-white mr-4 ${styles.hirebtn}`} 
                
              >
                {/* <p className={` ${styles.hiretext}`}>Why hire us as your Atlassian partner</p> */}
                Why hire us as your Atlassian partner
              </a>
            </Link>

            <Link href="https://alluvium.net/support/contact#schedule-a-call">
              <a 
                className={`${styles.callbtn} text-white mr-4 border`}
                >

                Schedule a call
              </a>
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <Image
            className={`img-fluid ${styles.customdiv}`}
            width={393.77}
            height={302}
            src="/assets/bdg.png"
          />
        </div>
      </div>
    </div>
  );
}
