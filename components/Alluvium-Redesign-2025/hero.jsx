import Button from "components/atlassian-service-reuse/Button";
import Image from "next/image";
import styles from "../../styles/AlluviumRedesign2025/redesign.module.scss";

const Hero = () => {
  return (
    <section className={`container-fluid ${styles.hero__section}`}>
      <div className={styles.sub__hero}>
        <div className={styles.hero__context}>
          <div className={styles.content}>
            <h1>
              Streamline and Scale <span>with Atlassian Experts</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Dictum mollis aliquam quis
              tincidunt mauris orci pharetra. Morbi odio quam ut diam sagittis
              turpis habitant malesuada purus. Dictum faucibus elementum
              sollicitudin{" "}
            </p>
            <div className="d-flex gap-3">
              <Button>Contact Us</Button>
              <Button variant="redesign">
                Why hire us as your Atlassian Partner
              </Button>
            </div>
          </div>

          <Image
            src="/assets/redesign-2025/collaborate.png"
            width={469}
            height={598}
            alt="colllaborate"
          />
        </div>
        <div className={`${styles.cert__section} `}>
          <p>Empower your team with Atlassian certified expertise</p>
          <div className="d-flex align-center gap-3">
            <Image
              src="/assets/redesign-2025/Solution partner.svg"
              width={214}
              height={67}
              alt="solution partner"
            />
            <Image
              src="/assets/redesign-2025/Certs.svg"
              width={211}
              height={60}
              alt="marketplace partner"
            />
            <Image
              src="/assets/redesign-2025/Cert.svg"
              width={230}
              height={88}
              alt="Training partner"
            />

            <Image
              src="/assets/redesign-2025/AWS Certs.svg"
              width={84}
              height={78}
              alt="Aws partner"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
