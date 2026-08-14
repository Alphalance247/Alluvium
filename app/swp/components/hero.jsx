import Button from "components/atlassian-service-reuse/Button";
import styles from "../../../styles/AlluviumRedesign2025/swp/swp.module.scss";
import Image from "next/legacy/image";

const SwpHero = () => {
  const handScrollToSection = () => {
    const section = document.getElementById("alluvium-team");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
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
            Event | March 19, 2026 | The Minster Building
          </p>
          <h1 className={styles.hero__title}>
            Meet the Alluvium team at the 2026 SWP London conference
          </h1>
        </div>
        <div className={styles.sub_container}>
          <p className={styles.hero__description}>
            On 19 March 2026, Alluvium joins Strategic Workforce Planning Summit
            London 2026 at The Brewery, London as a transformation partner,
            working with HR, Finance and business leaders to move from static
            headcount planning to truly skills‑based Strategic Workforce
            Planning.
          </p>
          <Button size="mediumL" onClick={handScrollToSection}>
            Meet the Team
          </Button>
        </div>
      </div>
      <div className={styles.hero__image}>
        <Image src="/assets/SWP/image.png" width={1392} height={500} alt="" />
      </div>
    </section>
  );
};

export default SwpHero;
