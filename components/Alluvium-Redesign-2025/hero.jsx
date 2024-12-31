import Button from "components/atlassian-service-reuse/Button";
import Image from "next/image";
import styles from "../../styles/AlluviumRedesign2025/redesign.module.scss";
import { badges } from "data";
import Link from "next/link";
import { Lines } from "./ReuseComponents/Lines";
import HeroHeading from "./ReuseComponents/heroHeading";

const Hero = () => {
  return (
    <section style={{ background: "#fcfcfc" }}>
      <div className={`${styles.hero__section}`}>
        <div className={styles.sub__hero}>
          <div className={styles.hero__context}>
            <div className={styles.content}>
              <HeroHeading
                update="Alluvium Supports the Stanford Chambers of Commerce"
                updateSub="NEW UPDATE"
                updateSign={true}
                heading="Empower Your Teams with Expert Atlassian Solutions"
                subhead="Alluvium transforms teamwork and processes with Atlassian solutions, empowering collaboration and efficiency through Agile tools and expertise."
                variant="primary"
                withLink={true}
                showParagraph={false}
              />
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
      </div>
    </section>
  );
};

export default Hero;
