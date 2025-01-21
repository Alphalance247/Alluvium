import Image from "next/image";
import styles from "../../../styles/AlluviumRedesign2025/Atlassian-Services/atlassianservices.module.scss";
import HeroHeading from "../ReuseComponents/heroHeading";
import Link from "next/link";
import Button from "components/atlassian-service-reuse/Button";
import { Lines } from "../ReuseComponents/Lines";

const HeroSection = () => {
  return (
    <section style={{ background: "#fcfcfc" }}>
      <div className={`${styles.hero__section}`}>
        <div className={styles.sub__hero}>
          <div className={styles.hero__context}>
            <div className={styles.content}>
              <HeroHeading
                heading="Customized Atlassian Services for Enhanced Productivity"
                subhead="Implement or optimize your Atlassian apps through our Atlassian products and services."
                variant="primary"
                withLink={true}
                showParagraph={true}
                subsec={"ATLASSIAN SERVICES"}
                headSection=""
              />
              <div className={styles.btns}>
                <Link href="/support/contact#schedule-a-call">
                  <Button size="mediumL">Schedule a Call</Button>
                </Link>

                <Link href="/why-hire-us">
                  <Button variant="redesign" size="xxlarge">
                    Get a Free Atlassian Audit
                  </Button>
                </Link>
              </div>
            </div>

            <Image
              src="/assets/redesign-2025/atlassianservices/Images.png"
              width={500}
              height={598}
              alt="colllaborate"
            />
          </div>

          <Lines variant="default" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
