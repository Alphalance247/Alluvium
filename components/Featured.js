import Image from "next/image";
import Link from "next/link";
import styles from "../styles/hero-carousel.module.scss";
import Button from "./atlassian-service-reuse/Button";

export default function () {
  const data = [
    {
      // img: "/assets/home/Image.svg",
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
      img: "/assets/home/Image1.svg",
      title: "JSM/ITSM Implementation",
      subtitle: "",
      btn: "",
      alt: "jsm-implementation",
      url: "/atlassian-services/itsm-services",
    },
    {
      img: "/assets/home/Image2.svg",
      title: "Cloud & Data Migration",
      subtitle: "",
      btn: "",
      alt: "cloud-services",
      url: "/atlassian-services/cloud-migration",
    },
  ];
  return (
    <div className={`${styles.customxs}`}>
      <div className={`container mx-auto ${styles.featured}`}>
        <h3 className={`${styles.featuredsec}`}>CASE STUDIES</h3>
        <div className="d-md-flex gap-3">
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
                    <p className={` ${styles.ftitle}`}>OUR SERVICES</p>
                    <p className={` ${styles.fcontent}`}>{el.title}</p>
                    <Button variant="outline">Learn More</Button>
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
