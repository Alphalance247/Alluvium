import styles from "../../styles/cloud-connect-2/Home/hero.module.scss";
import Link from "next/link";
import Button from "components/cloud-connect-2/Button";
import Image from "next/image";

const CloudConnectBanner = () => {
  return (
    <section className={`container-fluid ${styles.hero} ${styles.heroNew}`}>
      <div className={`${styles.heroNews} container ${styles.hero}`}>
        <div className={`${styles.hero__content} ${styles.hero__content2}`}>
          <div>
            <Image
              width={419}
              height={172}
              src="/assets/cloud-connect/images/logo.png"
              alt="logo"
            />
          </div>
          <div className={styles["hero__content-title-wrapper"]}>
            {/* <h2 className={styles["new__hero__content-title"]}> */}
            <h2 className={styles.new__hero__content_title}>
              Service Management Beyond it.
            </h2>
          </div>
          <div>
            <Link href="/cloud-connect/book-a-ticket">
              <Button size="large">Register Now</Button>
            </Link>
          </div>
        </div>

        <div className={styles.address}>
          <div className="d-sm-inline-block d-lg-flex justify-content-between gap-3 align-items-center ">
            <p className={styles.time}>November 28, 2024</p>
            <p className={styles.address__venue}>
              The Zone, Plot 9, Gbagada Industrial Scheme beside UPS, Lagos
              Nigeria
            </p>
          </div>

          <div
            className={`${styles.image__connect} position-relative`}
            style={{
              filter: "drop-shadow(0px 4px 250px rgba(255, 201, 62, 0.18))", // Yellow shadow with blur and opacity
            }}
          >
            <div className=" position-absolute">
              <Image
                width={689}
                height={447}
                src="/assets/cloud-connect/images/Shape.png"
                alt="cloudconnect"
                className={styles.image__border}
              />
            </div>
            <div className="position-absolute">
              <Image
                width={689}
                height={447}
                src="/assets/cloud-connect/images/picture.png"
                alt="cloudconnect"
                className={styles.image__border}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudConnectBanner;
