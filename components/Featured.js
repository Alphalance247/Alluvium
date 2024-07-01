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
          <h3 className={`${styles.featuredsec} text-xl font-bold`}>
            FEATURED SECTION
          </h3>
          <div
            className="col-md-4 d-flex align-items-center cursor-pointer"
            onClick={() => hadndleScrollToView("services")}
            style={{ cursor: "pointer" }}
          >
            <div>
              <Image
                className={`img-fluid ${styles.serv}`}
                width={176}
                height={101}
                src="/assets/serv.png"
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
                OUR SERVICES
              </p>
              <p
                className=""
                style={{
                  fontSize: "10px",
                  fontWeight: "bold",
                  marginTop: "-10px",
                  marginLeft: "10px",
                }}
              >
                {" "}
                See how Alluvium Can Help You
              </p>
            </div>
          </div>

          <Link href="/blog" passHref>
            <div
              className="col-md-4 d-flex align-items-center"
              style={{ cursor: "pointer" }}
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
                <p
                  className=""
                  style={{
                    fontSize: "10px",
                    fontWeight: "bold",
                    marginTop: "-10px",
                    marginLeft: "10px",
                  }}
                >
                  {" "}
                  Enhance Your Jira Management Skills
                </p>
              </div>
            </div>
          </Link>

          <div
            className="col-md-4 d-flex align-items-center"
            onClick={() => hadndleScrollToView("case-studies")}
            style={{ cursor: "pointer" }}
          >
            <div>
              <Image
                className={`img-fluid ${styles.serv}`}
                width={176}
                height={101}
                src="/assets/case.png"
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
                CASE STUDIES
              </p>
              <p
                className=""
                style={{
                  fontSize: "10px",
                  fontWeight: "bold",
                  marginTop: "-10px",
                  marginLeft: "10px",
                }}
              >
                {" "}
                Explore More of Our Transformative Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
