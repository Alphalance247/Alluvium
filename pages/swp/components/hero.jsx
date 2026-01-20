import Button from "components/atlassian-service-reuse/Button";
import styles from "../../../styles/AlluviumRedesign2025/swp/swp.module.scss";
import Image from "next/image";

const SwpHero = () => {
  return (
    <section className={styles.swp_hero}>
      <div className={styles.hero__image__bg}>
        <Image
          src="/assets/SWP/backgroundimage.png"
          width={1450}
          height={798}
          alt="bg image"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.top_container}>
          <p className={styles.hero__event}>
            Event | November 17-19, 2025 | The Minster Building
          </p>
          <h1 className={styles.hero__title}>
            Meet the Alluvium team at the 2026 SWP London conference
          </h1>
        </div>
        <div className={styles.sub_container}>
          <p className={styles.hero__description}>
            Lorem ipsum dolor sit amet consectetur. Facilisis dolor consequat ut
            donec tempor ullamcorper lacus. Odio congue habitant purus morbi
            duis. Amet ornare ultrices diam gravida .{" "}
          </p>
          <Button size="mediumL">Meet the Team</Button>
        </div>
      </div>
      <div className={styles.hero__image}>
        <Image src="/assets/SWP/image.png" width={1392} height={500} alt="" />
      </div>
    </section>
  );
};

export default SwpHero;
