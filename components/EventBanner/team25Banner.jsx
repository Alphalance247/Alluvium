import Image from "next/image";
import styles from "../../styles/team-25-banner.module.scss";

const Team25Banner = () => {
  return (
    <section className={styles.banner__style}>
      <Image
        height={446}
        width={1265}
        src="/assets/redesign-2025/banner.png"
        alt=""
        layout="responsive"
      />
    </section>
  );
};

export default Team25Banner;
