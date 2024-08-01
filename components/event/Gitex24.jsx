import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/eventblog.module.scss";

export default function () {
  return (
    <div className={`container mx-auto ${styles.gitex24}`}>
      <div className={` ${styles.gitexcontentdiv}`}>
        <div>
          <div className={`${styles.gitextdiv}`}>
            <text className={` ${styles.gitext}`}>GITEX AFRICA 2024</text>
          </div>
          <div className={`${styles.supertextdiv}`}>
            <text className={` ${styles.supertext}`}>
              SUPERCHARGING A CONTINENT
            </text>
          </div>
          <div className={`${styles.detailstextdiv}`}>
            <text className={` ${styles.detailstext}`}>
              Marrakech |{" "}
              <span style={{ color: "#005B8C" }}>May 29 - May 31, 2024</span>
            </text>
          </div>
          <div className={`${styles.desctextdiv}`}>
            <p className={` ${styles.desctext}`}>
              Celebrating the groundbreaking success of Alluvium at Gitex
              Africa, the premier event hosted by Gitex Global in May 2024, in
              the city of Marrakech, Morocco. As the largest gathering for
              Africa Tech and startup showcase, it united tech companies,
              professionals, enthusiasts, and communities from all fields in a
              remarkable display of innovation. Attendees engaged themselves in
              the latest tech trends and innovations while creating substantial
              network. Alluvium's exhibition booth stood as a beacon of
              expertise, showcasing Atlassian solutions and tools and AWS
              prowess to engage visitors, generate leads, and foster valuable
              client relationships. Reflecting on the event's triumph, we
              reverence the transformative power of Africa's digital
              advancement.
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles.gitexpicturediv}`}>
        <Image
          className={` ${styles}`}
          width={528.95}
          height={521.23}
          src="/assets/event/g24img.png"
        />
      </div>
    </div>
  );
}
