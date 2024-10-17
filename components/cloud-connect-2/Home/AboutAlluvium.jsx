import Link from "next/link";
import styles from "../../../styles/cloud-connect-2/Home/aboutAlluvium.module.scss";
import Button from "../Button";
import Image from "next/image";

const AboutAlluvium = () => {
  const listItems = [
    "Understanding your unique needs and peculiar challenges.",
    "Leveraging our extensive Service Management expertise.",
    "Providing innovative solutions for your business.",
  ];

  return (
    <section className={styles.aboutAlluvium}>
      <div className={styles.content}>
        <Image
          src="/assets/cloud-connect/images/Alluvium Logo.png"
          alt="Alluvium Logo"
          className={styles.logo}
          width={56}
          height={56}
        />
        <p className={styles.description}>
          We are a team of dedicated experts providing tools and strategies
          needed to optimize Service Delivery in all aspects of an organization.
          Our mission is to empower you to deliver exceptional service, every
          time, as we passionately help businesses achieve the essence of
          Service Management. We do this by:
        </p>

        <ul className={styles.list}>
          {listItems.map((item, index) => (
            <li key={index} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
        <p className={styles.description}>
          Just starting your Service Management journey or need upgrading?
          Alluvium guides you every step of the way.
        </p>
        <a href="/" target="_blank">
          <Button size="large" className={styles.button}>
            Learn More About Us
          </Button>
        </a>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src="/assets/cloud-connect/images/AboutAlluvium.png"
          alt="About Alluvium"
          className={styles.image}
          width={484}
          height={506}
        />
      </div>
    </section>
  );
};

export default AboutAlluvium;
