import HeroHeading from "./heroHeading";
import styles from "../../../styles/AlluviumRedesign2025/ReuseAbleComponent/hero-section.module.scss";
import Link from "next/link";
import Button from "components/atlassian-service-reuse/Button";
import Image from "next/legacy/image";
import { MdOutlineFileDownload } from "react-icons/md";
import { HiMiniSpeakerWave } from "react-icons/hi2";

const HeroSection = ({ caseStudy }) => {
  return (
    <div className={styles.hero__encap}>
      <div className={styles.hero__context}>
        <div className={styles.content}>
          <HeroHeading
            heading={caseStudy?.details?.caseStudyTitle}
            subhead="Alluvium transforms teamwork and processes with Atlassian solutions, empowering collaboration and efficiency through Agile tools and expertise."
            variant="primary"
            withLink={true}
            showParagraph={true}
            withParagragh={false}
            subsec={"OUR SUCCESS STORIES"}
            headSection=""
          />
          <div className={styles.btns}>
            <Link href={caseStudy?.downloadLink}>
              <Button
                size="mediumL"
                withIcon={true}
                icon={
                  <MdOutlineFileDownload
                    style={{
                      fontSize: "20px",
                      marginRight: "0.5rem",
                      marginTop: "-0.3rem",
                    }}
                  />
                }
              >
                Download PDF
              </Button>
            </Link>

            {/* <Link href="/">
              <Button
                variant="redesign"
                size="xxlarge"
                withIcon={true}
                icon={
                  <HiMiniSpeakerWave
                    style={{
                      fontSize: "20px",
                      marginRight: "0.5rem",
                      marginTop: "-0.3rem",
                    }}
                  />
                }
              >
                Read Aloud
              </Button>
            </Link> */}
          </div>
        </div>
        <Image
          src={caseStudy?.clientLogo}
          width={500}
          height={489}
          alt="colllaborate"
        />
      </div>
    </div>
  );
};

export default HeroSection;
