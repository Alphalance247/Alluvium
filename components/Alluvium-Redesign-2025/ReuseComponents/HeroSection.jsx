import HeroHeading from "./heroHeading";
import styles from "../../../styles/AlluviumRedesign2025/ReuseAbleComponent/hero-section.module.scss";
import Link from "next/link";
import Button from "components/atlassian-service-reuse/Button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className={styles.hero__encap}>
      <div className={styles.hero__context}>
        <div className={styles.content}>
          <HeroHeading
            heading="Streamlining Server to Atlassian Cloud Migration for an Insurance Company"
            subhead="Alluvium transforms teamwork and processes with Atlassian solutions, empowering collaboration and efficiency through Agile tools and expertise."
            variant="primary"
            withLink={true}
            showParagraph={true}
            withParagragh={false}
            subsec={"OUR SUCCESS STORIES"}
            headSection=""
          />
          <div className={styles.btns}>
            <Link href="/support/contact#schedule-a-call">
              <Button size="mediumL">Download PDF</Button>
            </Link>

            <Link href="/why-hire-us">
              <Button variant="redesign" size="xxlarge">
                Read Aloud
              </Button>
            </Link>
          </div>
        </div>
        <Image
          src="/assets/redesign-2025/case-studies/hero1.png"
          width={500}
          height={489}
          alt="colllaborate"
        />
      </div>
    </div>
  );
};

export default HeroSection;
