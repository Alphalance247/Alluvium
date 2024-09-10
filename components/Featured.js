import Image from "next/image";
import Link from "next/link";
import styles from "../styles/hero-carousel.module.scss";

export default function () {
  // const handleScrollToView = () => {
  //   document
  //     .getElementById("case-studies")
  //     ?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <div className={`${styles.customxs}`}>
      <div className={`${styles.featured}`}>
        <div className="row container mx-auto">
          <h3 className={`${styles.featuredsec}`}>FEATURED SECTION</h3>
          <Link href="/atlassian-services/atlassian-licence" passHref>
            <div
              className={`col-md-4 d-flex align-items-center ${styles.points}`}
            >
              <div>
                <Image
                  className={`img-fluid ${styles.fimages}`}
                  width={176}
                  height={101}
                  src="/assets/home/Image.svg"
                />
              </div>
              <div className="ml-2 mt-2">
                <p className={` ${styles.ftitle}`}>OUR SERVICES</p>
                <p className={` ${styles.fcontent}`}>
                  Atlassian Licence Management
                </p>
              </div>
            </div>
          </Link>

          <Link href="/atlassian-services/itsm-services" passHref>
            {/* https://sites.ziftsolutions.com/atlassian.ziftsolutions.com/8a9983108fc086ab018fc109022335b8 */}
            <div
              className={`col-md-4 d-flex align-items-center ${styles.points}`}
            >
              <div>
                <Image
                  className={`img-fluid ${styles.fimages}`}
                  width={176}
                  height={101}
                  src="/assets/home/Image1.svg"
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
              className={`col-md-4 d-flex align-items-center ${styles.points}`}
            >
              <div>
                <Image
                  className={`img-fluid ${styles.fimages}`}
                  width={176}
                  height={101}
                  src="/assets/home/Image2.svg"
                />
              </div>
              <div className="ml-3 mt-2">
                <p className={` ${styles.ftitle}`}>Our Services</p>
                <p className={` ${styles.fcontent}`}>Cloud & Data Migration</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
