import Image from "next/image";
import Link from "next/link";
import styles from "../styles/hero-carousel.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";

export default function () {
  const data = [
    {
      img: "/assets/home/yale.png",
      title:
        "How Yale School of Management excels in higher education with Atlassian",
      subtitle:
        "Meeting student expectations by standardizing on a single platform",
      btn: "",
      alt: "atlassian-licence",
      url: "/atlassian-case-studies",
    },
    {
      img: "/assets/Cloud-Migration-Case-Study/bhcs.png",
      title:
        "California’s Health Department saved millions with Atlassian Cloud Enterprise",
      subtitle:
        "California’s Health Department saved millions with Atlassian Cloud Enterprise",
      btn: "",
      alt: "atlassian-cloud-migration-case-studies image",
      url: "/atlassian-cloud-migration-case-studies",
    },
    {
      img: "/assets/Cloud-Migration-Case-Study/twitter.png",
      title: "How  Twitter Satisfies High Demand Through Jira Service Desk",
      subtitle:
        "Meeting student expectations by standardizing on a single platform",
      btn: "",
      alt: "cloud-services",
      url: "/atlassian-case-studies",
    },
  ];
  return (
    <div className={`${styles.customxs}`}>
      <div className={`container mx-auto ${styles.featured}`}>
        {/* <h3 className={`${styles.featuredsec}`}>CASE STUDIES</h3> */}
        <div className="d-md-flex gap-4">
          {data.map((el) => {
            return (
              <Link href={el.url} passHref>
                <div className={` ${styles.points}`}>
                  <div>
                    <Image
                      width={363}
                      height={226}
                      src={el.img}
                      alt={el.alt}
                      layout="responsive"
                    />
                  </div>
                  <div className="">
                    <p className={` ${styles.fcontent}`}>{el?.title}</p>
                    {/* <p className={` ${styles.ftitle}`}>{el?.subtitle}</p> */}
                    <button>
                      Read More{" "}
                      <span>
                        <FaArrowRightLong />
                      </span>
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

{
  /* <Link href="/atlassian-services/itsm-services" passHref>
            <div
              className={`col-md-4 d-flex flex-column align-items-center ${styles.points}`}
            >
              <div>
                <Image
                  className={`img-fluid ${styles.fimages}`}
                  width={363}
                  height={226}
                  src="/assets/home/Image1.svg"
                  alt="jsm-implementation"
                />
              </div>
              <div className="ml-3 mt-2">
                <p className={` ${styles.ftitle}`}>Our Services</p>
                <p className={` ${styles.fcontent}`}>JSM/ITSM Implementation</p>
              </div>
            </div>
          </Link>

          <Link href="/atlassian-services/cloud-migration" passHref>
            <div
              className={`col-md-4 d-flex flex-column align-items-start ${styles.points}`}
            >
              <div>
                <Image
                  className={`img-fluid ${styles.fimages}`}
                  width={363}
                  height={226}
                  src="/assets/home/image2.svg"
                  alt="cloud-services"
                />
              </div>
              <div className="ml-3 mt-2">
                <p className={` ${styles.ftitle}`}>Our Services</p>
                <p className={` ${styles.fcontent}`}>Cloud & Data Migration</p>
              </div>
            </div>
          </Link> */
}
