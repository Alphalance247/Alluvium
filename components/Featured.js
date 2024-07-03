import Image from "next/image";
import Link from "next/link";
import styles from "../styles/hero-carousel.module.scss";

export default function () {
  const hadndleScrollToView = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`${styles.customxs}`}>
      <div className={`${styles.featured}`}>
        <div className="row container mx-auto">
          <h3 className={`${styles.featuredsec}`}>FEATURED SECTION</h3>
          <Link href="/blog" passHref>
            <div
              className={`col-md-4 d-flex align-items-center ${styles.point}`}
            >
              <div>
                <Image
                  className={`img-fluid ${styles.fimages}`}
                  width={176}
                  height={101}
                  src="/assets/serv.png"
                />
              </div>
              <div className="ml-2 mt-2">
                <p className={` ${styles.ftitle}`}>OUR SERVICES</p>
                <p className={` ${styles.fcontent}`}>
                  See how Alluvium Can Help You
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="https://sites.ziftsolutions.com/atlassian.ziftsolutions.com/8a9983108fc086ab018fc109022335b8"
            passHref
          >
            <div
              className={`col-md-4 d-flex align-items-center ${styles.point}`}
            >
              <div>
                <Image
                  className={`img-fluid ${styles.serv}`}
                  width={176}
                  height={101}
                  src="/assets/camp.png"
                />
              </div>
              <div className="ml-2 mt-2">
                <p
                  className=""
                  style={{
                    color: "#009BC0",
                    fontSize: "10px",
                    fontWeight: "bold",
                    marginTop: "10px",
                    marginLeft: "10px",
                  }}
                >
                  CAMPAIGN
                </p>
                <p className={` ${styles.fcontent}`}>
                  {" "}
                  Enhance Your Jira Management Skills
                </p>
              </div>
            </div>
          </Link>

          <div
            onClick={() => hadndleScrollToView("case-studies")}
            className={`col-md-4 d-flex align-items-center ${styles.point}`}
          >
            <div>
              <Image
                className={`img-fluid ${styles.fimages}`}
                width={176}
                height={101}
                src="/assets/case.png"
              />
            </div>
            <div className="ml-3 mt-2">
              <p className={` ${styles.ftitle}`}>CASE STUDIES</p>
              <p className={` ${styles.fcontent}`}>
                Explore More of Our Transformative Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
