import Link from "next/link";
import styles from "../../../styles/cloud-connect-2/Home/aboutAlluvium.module.scss";
import Button from "../Button";

const AboutAlluvium = () => {
  const listItems = [
    "Understanding your unique needs and challenges.",
    "Leveraging our extensive service management expertise.",
    "Providing innovative solutions for your business.",
    "Whether you're just starting your service management journey or looking to take it to the next level, Alluvium is here to guide you every step of the way.",
  ];

  return (
    <section className={styles.aboutAlluvium}>
      <div className={styles.content}>
        <img
          src="/assets/cloud-connect/images/Alluvium Logo.png"
          alt="Alluvium Logo"
          className={styles.logo}
        />
        <p className={styles.description}>
          About Alluvium:
          <br />
          At Alluvium, we're passionate about we have a passion for helping
          businesses achieve the essence of service management. We are a team of
          experts dedicated to providing you with the tools and strategies you
          need to optimize service delivery across your entire organization.
        </p>
        <p className={styles.description}>
          Our mission is to empower you to deliver exceptional service, every
          time. We achieve this by:
        </p>
        <ul className={styles.list}>
          {listItems.map((item, index) => (
            <li key={index} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
        <a href="/" target="_blank">
          <Button size="large" className={styles.button}>
            Learn More About Us
          </Button>
        </a>
      </div>
      <div className={styles.imageWrapper}>
        <img
          src="/assets/cloud-connect/images/AboutAlluvium.png"
          alt="About Alluvium"
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default AboutAlluvium;
