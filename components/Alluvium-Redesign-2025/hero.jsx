import Button from "components/atlassian-service-reuse/Button";
import Image from "next/image";
import styles from "../../styles/AlluviumRedesign2025/redesign.module.scss";
import Link from "next/link";
import { Lines } from "./ReuseComponents/Lines";
import HeroHeading from "./ReuseComponents/heroHeading";
import Badges from "./ReuseComponents/badges";

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
                heading="Supporting Growth Innovation - "
                // subhead="Alluvium transforms teamwork and processes with Atlassian solutions, empowering collaboration and efficiency through Agile tools and expertise."
                variant="secondary"
                withLink={false}
                showParagraph={false}
                span={"$31,000+ "}
                headingcont={
                  "Atlassian AI Licenses, Implementation and Support package"
                }
                span1={"Free for Startup"}
              />
              <div className={styles.btns}>
                <Link href="#consultationForm">
                  <Button size="mediumL">Request a Demo</Button>
                </Link>

                <Link href="/startup">
                  <Button variant="redesign" size="xxlarge">
                    Learn More About Our Offer
                  </Button>
                </Link>
              </div>
            </div>

            <Image
              src="/assets/redesign-2025/image.png"
              width={494}
              height={472}
              alt="colllaborate"
              // layout="responsive"
            />
          </div>

          <Badges variant={"default"} />

          <Lines variant="default" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
