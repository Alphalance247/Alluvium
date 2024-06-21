import Image from "next/image";
import Link from "next/link";
import styles from "../styles/hero-carousel.module.scss";
export default function () {
  return (
    <div className={` ${styles.herobanner}`}>
      <div className={`row container mx-auto`}>
        <div className="col-md-8">
          <div className="">
            <h1
              className={`text-white ${styles.atp}`}
              style={{
                lineHeight: "30px",
              }}
            >
              We are a Trusted
            </h1>

            <h1
              className={`text-white ${styles.atp}`}
              style={{
                lineHeight: "82px",
                marginBottom: "30px",
              }}
            >
              Atlassian Partner
            </h1>
            <p
              className=""
              style={{
                fontSize: "18px",
                marginBottom: "48px",
                lineHeight: "20px",
                color: "#E7E8E9",
              }}
            >
              We are ITSM, DevOps and Data Migration Experts
            </p>
            <Link href="#">
              <a
                className="btn text-white mr-4"
                style={{ backgroundColor: "#E37915", marginRight: "10px" }}
              >
                Why hire us as your Atlassian partner
              </a>
            </Link>

            <Link href="https://alluvium.net/support/contact#schedule-a-call">
              <a className={`${styles.custombtn} btn text-white border`}>
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
