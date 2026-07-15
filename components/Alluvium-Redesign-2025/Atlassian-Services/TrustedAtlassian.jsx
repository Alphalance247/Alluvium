import Image from "next/legacy/image";
import { badges } from "data";
import styles from "../../../styles/AlluviumRedesign2025/Atlassian-Services/atlassianservices.module.scss";

const TrustedAtlassian = () => {
  const badgesPart = badges.slice(0, 3);
  return (
    <section className={styles.trusted__atlassian}>
      <div className={styles.trusted}>
        <h3>YOUR TRUSTED ATLASSIAN PARTNERS</h3>
        {badgesPart.map((item, i) => {
          return (
            <div
              className={`${styles.imageContainer} ${
                i === badgesPart.length - 1
                  ? styles.withNoBorder
                  : styles.withBorder
              }`}
            >
              <Image
                src={item?.img}
                width={item?.width}
                height={item?.height}
                alt={item?.alt}
                key={i}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrustedAtlassian;
