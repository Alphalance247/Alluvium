import Image from "next/image";
import Link from "next/link";
import styles from "../styles/hero-carousel.module.scss";
export default function () {
    return (
        <>
<div className={` ${styles.herobanner}`}>
        <div className={`row container mx-auto`}>
          <div className="col-md-8">
            <div className="" style={{ paddingTop: "" }}>
              <h1
                className={`text-white ${styles.atp}`}
                style={{
                  // fontSize: "72px",
                  lineHeight: "30px",
                  
                }}
              >
                We are a Trusted
              </h1>

              <h1
                className={`text-white ${styles.atp}`}
                style={{
                  // fontSize: "72px",
                  lineHeight: "82px",
                  marginBottom: "30px",
                }}
              >
                Atlassian Partner
              </h1>
              <p
                className=""
                style={{ fontSize: "18px", marginBottom: "20px", lineHeight: "20px", color: "#E7E8E9"}}
              >
              We are ITSM, DevOps and Data Migration Experts
              </p>
              <Link href="https://sites.ziftsolutions.com/atlassian.ziftsolutions.com/8a9983108fc086ab018fc109022335b8">
                <a
                  className="btn text-white mr-4"
                  style={{ backgroundColor: "#E37915", marginRight:"10px" }}
                >
                  Why hire us as your Atlassian partner
                </a>
              </Link>

              <Link href="https://sites.ziftsolutions.com/atlassian.ziftsolutions.com/8a9983108fc086ab018fc109022335b8">
                <a
                  className={`${styles.custombtn} btn text-white border`}
                  style={{ }}
                >
                  Schedule a call
                </a>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-4">
          <Image className={`img-fluid ${styles.customdiv}`} width={393.77} height={302} src="/assets/bdg.png" />
          </div>
        </div>
      </div>
        </>
    )
}