import Image from "next/image";
import styles from "../../../styles/AlluviumRedesign2025/whitepaper/whitepaper.module.scss";
import Link from "next/link";

const MainWhitepaperHero = () => {
  return (
    <div className={styles?.main__wrpapper}>
      <section className={styles.mainWhitepaperHero}>
        <div className={styles.mainWhitepaperHeroInner}>
          <header className={styles.mainWhitepaperHeader}>
            <p className={styles.mainWhitepaperEyebrow}>White papers</p>
            <p className={styles.mainWhitepaperIntro}>
              Lorem ipsum dolor sit amet consectetur. Felis magna ridiculus amet
              vestibulum tristique id. Elementum senectus lorem gravida ultrices
              eu. Metus semper in pharetra auctor nibh aliquet pulvinar id.
            </p>
          </header>
        </div>
      </section>

      <div className={styles.mainWhitepaperCardWrap}>
        <Link href={"/whitepaper/regulatory-supremacy-and-competitive-edge"}>
          <article className={styles.mainWhitepaperCard}>
            <div className={styles.mainWhitepaperImage}>
              <Image
                src="/assets/redesign-2025/whitepaper/white.png"
                alt="Building Responsible AI Systems for Real-World Impact"
                width={577}
                height={588}
              />
            </div>

            <div className={styles.mainWhitepaperCopy}>
              <p className={styles.mainWhitepaperTag}>Whitepaper</p>
              <h2 className={styles.mainWhitepaperTitle}>
                Regulatory Supremacy
                <br />
                and Competitive Edge
                <br />
                {/* Impact */}
              </h2>

              <p className={styles.mainWhitepaperMeta}>
                <span className={styles.mainWhitepaperAuthor}>
                  By Taiwo Ojo
                </span>
                <span className={styles.mainWhitepaperMetaBullet}>•</span>
                <span className={styles.mainWhitepaperDate}>
                  November 13, 2025
                </span>
              </p>
            </div>
          </article>
        </Link>
      </div>
    </div>
  );
};

export default MainWhitepaperHero;
