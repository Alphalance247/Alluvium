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
                heading="Empower Your Teams with Expert Atlassian Solutions"
                subhead="Alluvium transforms teamwork and processes with Atlassian solutions, empowering collaboration and efficiency through Agile tools and expertise."
                variant="primary"
                withLink={false}
                showParagraph={false}
                withParagragh={true}
                // span={"$31,000+ "}
                // headingcont={
                //   "Atlassian AI Licenses, Implementation and Support package"
                // }
                // span1={"Free for Startup"}
              />
              <div className={styles.btns}>
                <Link href="/contact-us">
                  <Button size="mediumL">Contact Us</Button>
                </Link>

                <Link href="/why-hire-us">
                  <Button variant="redesign" size="xxlarge">
                    Why Hire Us as Your Atlassian Partner
                  </Button>
                </Link>
              </div>
            </div>

            <Image
              src="/assets/redesign-2025/collaborate.png"
              width={494}
              height={600}
              alt="colllaborate"
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
