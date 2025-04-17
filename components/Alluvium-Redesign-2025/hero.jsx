import Button from "components/atlassian-service-reuse/Button";
import Image from "next/image";
import styles from "../../styles/AlluviumRedesign2025/redesign.module.scss";
import Link from "next/link";
import { Lines } from "./ReuseComponents/Lines";
import HeroHeading from "./ReuseComponents/heroHeading";
import Badges from "./ReuseComponents/badges";
import { badges } from "data";

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
                heading="Unlock High Velocity Enterprise Management"
                subhead="Atlassian bridges the gap between Development and IT with Jira Service Management, empowering teams to work faster and adapt quickly to change."
                variant="primary"
                withLink={false}
                showParagraph={false}
                withParagragh={true}
              />
              <div className={styles.btns}>
                <Link href="/contact-us">
                  <Button size="mediumL">Request a Demo</Button>
                </Link>

                <Link href="/why-hire-us">
                  <Button variant="redesign" size="xxlarge">
                    Learn More About Our Offer
                  </Button>
                </Link>
              </div>
            </div>

            <Image
              src="/assets/redesign-2025/home/high-velocity.png"
              width={450}
              height={400}
              alt="unlock high velocity enterprise management"
            />
          </div>

          <Badges variant={"default"} badgesData={badges} />

          <Lines variant="default" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
