import React from "react";
import HeroHeading from "../ReuseComponents/heroHeading";
import styles from "../../../styles/AlluviumRedesign2025/projectReel/heroSection.module.scss";
import Link from "next/link";
import Button from "components/atlassian-service-reuse/Button";
import Image from "next/image";
import { Lines } from "../ReuseComponents/Lines";

const HeroSection = () => {
  return (
    <section className={styles.mainContainer}>
      <main>
        <div className={styles.heroContainer}>
          <div className={styles.containerBg}>
            <HeroHeading
              heading="Agile Transformation with Atlassian Expertise"
              subhead="We help organizations streamline processes, ensure compliance, and migrate seamlessly to Atlassian tools. From Agile adoption to cloud migrations, our solutions drive efficiency and innovation."
              variant="primary"
              updateVariant="only_update"
              withLink={true}
              showParagraph={true}
              subsec={"OUR PROJECT REELS"}
              headSection={""}
            />
            <div>
              <div className={styles.btns}>
                <Link href="/support/contact#schedule-a-call">
                  <Button size="mediumL">Contact Us</Button>
                </Link>

                <Link href="#">
                  <Button variant="redesign" size="xxlarge">
                    View Our Case Studies
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <Image
            src="/assets/redesign-2025/project_reel_hero.webp"
            width={591}
            height={734}
            alt="colllaborate"
            // layout="responsive"
          />
        </div>
        <Lines variant={"secondary"} />
      </main>
    </section>
  );
};

export default HeroSection;
