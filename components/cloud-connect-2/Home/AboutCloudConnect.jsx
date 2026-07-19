import SectionHeader from "../SectionHeader";
import Button from "../Button";
import styles from "../../../styles/cloud-connect-2/Home/aboutCloudConnect.module.scss";
import Image from "next/legacy/image";
import Link from "next/link";

const images = [
  {
    imageSrc: "/assets/cloud-connect/images/AboutCC1.jpg",
    alt: "About Cloud Connect image 1",
  },
  {
    imageSrc: "/assets/cloud-connect/images/cloud8.jpg",
    alt: "About Cloud Connect image 2",
  },
  {
    imageSrc: "/assets/cloud-connect/images/AboutCC3.jpg",
    alt: "About Cloud Connect image 3",
  },
  {
    imageSrc: "/assets/cloud-connect/images/AboutCC4.jpg",
    alt: "About Cloud Connect image 4",
  },
];

const stats = [
  { value: "500+", category: "Attendees" },
  { value: "100+", category: "Startups" },
  { value: "50+", category: "Exhibitors" },
  { value: "4hr", category: "Workshops" },
  { value: "10+", category: "Sessions" },
];

const AboutCloudConnect = () => {
  return (
    <section className={styles["about-cloud-connect"]}>
      <div className={styles["about-cloud-connect__content"]}>
        <SectionHeader
          size="large"
          heading="What is cloud connect?"
          description="Cloud Connect focuses on leveraging cloud technologies to streamline processes, enhance efficiency, and drive sustainable growth in every aspect of an organization. It goes beyond the traditional IT-centric Service Management to detailing and enfolding current and holistic view of business operations."
          button1={
            <Link href="/cloud-connect/book-a-ticket">
              <Button size="large">Buy Tickets</Button>
            </Link>
          }
        />
      </div>

      <div className={styles["about-cloud-connect__images"]}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles["about-cloud-connect__image-container"]}
          >
            <Image
              src={image.imageSrc}
              alt={image.alt}
              width={1024}
              height={780}
              className={styles["about-cloud-connect__image"]}
            />
          </div>
        ))}
      </div>

      {/* <div className={styles["about-cloud-connect__stats"]}>
        {stats.map((stat, index) => (
          <div key={index} className={styles["about-cloud-connect__stat-item"]}>
            <p className={styles["about-cloud-connect__stat-value"]}>
              {stat.value}
            </p>
            <span className={styles["about-cloud-connect__stat-category"]}>
              {stat.category}
            </span>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default AboutCloudConnect;
