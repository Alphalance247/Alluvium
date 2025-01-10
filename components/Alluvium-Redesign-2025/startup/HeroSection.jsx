import React from "react";
import HeroHeading from "../ReuseComponents/heroHeading";
import styles from "../../../styles/AlluviumRedesign2025/startup/HeroSection.module.scss";
import Link from "next/link";
import Button from "components/atlassian-service-reuse/Button";
import Image from "next/image";
import Badges from "../ReuseComponents/badges";

const HeroSection = () => {
  return (
    <section className={styles.mainContainer}>
      <main>
        <div className={styles.heroContainer}>
          <div className={styles.heroLeft}>
            <HeroHeading
              heading="Supporting Growth + Innovation"
              subhead="A $31,000 in Atlassian AI license and support.."
              variant="primary"
              withLink={true}
              showParagraph={false}
            />
            <div className={styles.btns}>
              <Link href="#">
                <Button size="mediumL">Request Demo</Button>
              </Link>
            </div>
          </div>
          <Image
            src="/assets/redesign-2025/startup/HeroBg.webp"
            width={670}
            height={495}
            alt="colllaborate"
          />
        </div>
        <Badges variant={"default"} />
      </main>
    </section>
  );
};

export default HeroSection;
