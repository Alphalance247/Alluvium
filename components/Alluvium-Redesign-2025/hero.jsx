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
                heading="Shadow AI: Unveiling the Hidden Risk"
                subhead="AI is evolving, but is your organization prepared for the unseen risks? Join us for expert discussions, live demos, and actionable insights."
                variant="primary"
                withLink={false}
                showParagraph={false}
                // span={"$31,000+ "}
                // headingcont={
                //   "Atlassian AI Licenses, Implementation and Support package"
                // }
                // span1={"Free for Startup"}
              />
              <div className={styles.btns}>
                <Link href="/event/shadow-AI-the-silent-disruptor-in-business">
                  <Button size="mediumL">Register Now</Button>
                </Link>

                <Link href="/blogs/shadow-AI:-the-hidden-threat-lurking-in-your-organization">
                  <Button variant="redesign" size="xxlarge">
                    Discover More
                  </Button>
                </Link>
              </div>
            </div>

            <Image
              src="/assets/redesign-2025/shadow-ai.png"
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
