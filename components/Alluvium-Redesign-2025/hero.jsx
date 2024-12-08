import Button from "components/atlassian-service-reuse/Button";
import Image from "next/image";
import styles from "../../styles/AlluviumRedesign2025/redesign.module.scss";
import { badges } from "data";
import Link from "next/link";

const Hero = () => {
  return (
    <section style={{ background: "#fcfcfc" }}>
      <div className={`${styles.hero__section}`}>
        <div className={styles.diagonal__encap}>
          <div
            style={{ borderTop: "1px solid #f0f0f0", marginBottom: "4rem" }}
          ></div>
          <div className={styles.diagonal}>
            <Image
              src="/assets/redesign-2025/diagonal.png"
              alt="diagonal"
              width={100}
              height={385}
              // layout="responsive"
            />
          </div>
        </div>

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

          <div
            style={{
              borderRight: "1px solid #f0f0f0",
              marginBottom: "-0.3rem",
            }}
          >
            <Image
              src="/assets/redesign-2025/Lines.png"
              width={1700}
              height={99}
              layout="responsive"
              alt=""
            />
          </div>
        </div>

        <div className={styles.diagonal__encap1}>
          <div
            style={{ borderTop: "1px solid #f0f0f0", marginBottom: "4rem" }}
          ></div>
          <div className={styles.diagonal}>
            <Image
              src="/assets/redesign-2025/diagonal.png"
              alt="diagonal"
              width={100}
              height={385}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
