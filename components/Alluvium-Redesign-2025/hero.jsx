import Button from "components/atlassian-service-reuse/Button";
import Image from "next/image";
import styles from "../../styles/AlluviumRedesign2025/redesign.module.scss";
import { badges } from "data";
import Link from "next/link";
import { Lines } from "./ReuseComponents/Lines";

const Hero = () => {
  return (
    <section style={{ background: "#fcfcfc" }}>
      <div className={`${styles.hero__section}`}>
        {/* <div className={styles.hero__left}>
          <div className={styles.hero_top_border}></div>
          <div className={styles.diagonal__encap}></div>
        </div> */}

        <div className={styles.sub__hero}>
          <div className={styles.hero__context}>
            <div className={styles.content}>
              <Link href="/">
                <p className={styles.new__update}>
                  <span className={styles.span1}>
                    {" "}
                    <Image
                      src="/assets/redesign-2025/Dots.svg"
                      width={10}
                      height={10}
                      alt="dot"
                    />{" "}
                    NEW UPDATE
                  </span>
                  Alluvium Joins the Stanford Chambers of Commerce{" "}
                  <span className={styles.span2}>{" > "}</span>
                </p>
              </Link>

              <h1>Empower Your Teams with Expert Atlassian Solutions</h1>
              <p className={styles.paragraph__transform}>
                Alluvium transforms teamwork and processes with Atlassian
                solutions, empowering collaboration and efficiency through Agile
                tools and expertise.
              </p>
              <div className={styles.btns}>
                <Link href="/support/contact#schedule-a-call">
                  <Button size="mediumL">Contact Us</Button>
                </Link>

                <Link href="/why-hire-us">
                  <Button variant="redesign" size="xxlarge">
                    Why hire us as your Atlassian Partner
                  </Button>
                </Link>
              </div>
            </div>

            <Image
              src="/assets/redesign-2025/collaborate.png"
              width={500}
              height={598}
              alt="colllaborate"
              // layout="responsive"
            />
          </div>
          <div className={`${styles.cert__section}`}>
            {badges.map((item, i) => {
              return (
                <Image
                  src={item?.img}
                  width={item?.width}
                  height={item?.height}
                  alt={item?.alt}
                  key={i}
                />
              );
            })}
          </div>

          <Lines variant="default" />
        </div>

        {/* <div className={styles.hero__right}>
          <div className={styles.hero_top_border}></div>
          <div className={styles.diagonal__encap1}></div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
