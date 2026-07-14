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
                heading="Deliver exceptional HR service with Jira Service Management"
                subhead="From hiring to exit, manage every HR request on one powerful platform. Improve response times, foster collaboration, and deliver consumer-grade service to every employee."
                variant="primary"
                withLink={false}
                showParagraph={false}
                withParagragh={true}
              />
              <div className={styles.btns}>
                <Link href="/campaigns/high-velocity-hr">
                  <Button size="mediumL">Explore the Guide</Button>
                </Link>

                <Link href="/why-hire-us">
                  <Button variant="redesign" size="xxlarge">
                    Learn More About Our Offer
                  </Button>
                </Link>
              </div>
            </div>

            <div className={styles.hero__image}>
              <Image
                src="/assets/redesign-2025/home/hr-velocity.webp"
                width={400}
                height={356}
                alt="unlock high velocity enterprise management"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
