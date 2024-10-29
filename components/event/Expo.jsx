import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/eventblog.module.scss";

export default function () {
  return (
    <div className={`container mx-auto ${styles.gitex24}`}>
      <div className={` ${styles.gitexcontentdiv}`}>
        <div>
          <div className={`${styles.gitextdiv}`}>
            <text className={` ${styles.gitext}`}>LAGOS TECH STARTUP EXPO</text>
          </div>
          <div className={`${styles.supertextdiv}`}>
            <text className={` ${styles.supertext}`}>
              Innovation, Collaboration and Growth
            </text>
          </div>
          <div className={`${styles.detailstextdiv}`}>
            <text className={` ${styles.detailstext}`}>
              Lagos <span style={{ color: "#005B8C" }}>Sept 15th, 2022</span>
            </text>
          </div>
          <div className={`${styles.desctextdiv}`}>
            <p className={` ${styles.desctext}`}>
              Alluvium dominated the stage, presenting the transformative
              prowess of Atlassian solutions on May 10, 2023, at the innovative
              Lagos Tech Start-up Expo, Africa's premier gathering of
              entrepreneurs and tech enthusiasts. Visitors were enthralled by
              well-ordered collaboration and efficient project management. The
              Alluvium team, armed with expertise and passion, engaged visitors
              with unmatched demonstrations, unveiling the untapped potential of
              Atlassian tools for startups. Our booth became a lively space
              where ideas collided, partnerships formed, and inspiration blazed.
              The event became an energetic hub of knowledge exchange and
              meaningful connections, cementing Alluvium's position as a
              catalyst for startup success.
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles.gitexpicturediv}`}>
        <Image
          className={` ${styles}`}
          width={528.95}
          height={521.23}
          src="/assets/event/expoimg.png"
        />
      </div>
    </div>
  );
}
