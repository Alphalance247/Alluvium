import React from "react";
import styles from "../../../styles/AlluviumRedesign2025/atlassian-license/Herosection.module.scss";
import Button from "components/atlassian-service-reuse/Button";
import Link from "next/link";
import HeroHeading from "../ReuseComponents/heroHeading";

const HeroSection = () => {
  return (
    <>
      <section className={styles.mainContainer}>
        <main>
          <div className={styles.hero__head}>
            <HeroHeading
              variant="primary"
              withLink={true}
              heading="Streamlined Atlassian License Management"
              subhead="Maximize your Atlassian license investment by gaining dedicated expert advice and support for managing your licenses."
              subsec={"ATLASSIAN LICENSE MANAGEMENT"}
            />
            <div className={styles.btns}>
              <Link href="/atlassian-services/atlassian-licence/licence-request">
                <Button size="medium">Request License Quote</Button>
              </Link>

              <Link href="/atlassian-services/atlassian-licence/licence-request">
                <Button variant="redesign" size="medium">
                  Get a Free Atlassian Audit
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default HeroSection;
