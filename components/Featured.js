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
        <div className={styles.featured__card}>
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
