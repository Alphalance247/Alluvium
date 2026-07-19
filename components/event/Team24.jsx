import Image from "next/legacy/image";
import Link from "next/link";
import styles from "../../styles/eventblog.module.scss";

export default function () {
  return (
    <div className={`container mx-auto ${styles.gitex24}`}>
      <div className={` ${styles.gitexcontentdiv}`}>
        <div>
          <div className={`${styles.gitextdiv}`}>
            <text className={` ${styles.gitext}`}>ATLASSIAN TEAM '24</text>
          </div>
          <div className={`${styles.supertextdiv}`}>
            <text className={` ${styles.supertext}`}>Team work</text>
          </div>
          <div className={`${styles.detailstextdiv}`}>
            <text className={` ${styles.detailstext}`}>
              Las vegas{" "}
              <span style={{ color: "#005B8C" }}>April 30 - May 2, 2024</span>{" "}
            </text>
          </div>
          <div className={`${styles.desctextdiv}`}>
            <p className={` ${styles.desctext}`}>
              Alluvium experienced the pinnacle of teamwork and innovation at
              the premier Team '24 event hosted by Atlassian from April 30 to
              May 2, 2024, in Las Vegas, USA. We witnessed the largest gathering
              of Atlassian partners, community members, tech professionals, and
              enthusiasts. As an esteemed Atlassian Solution Partner, Alluvium
              took the spotlight, showcasing our expertise in harnessing the
              strength of Atlassian solutions and tools. Our exhibition booth
              became a hub of innovation and meaningful connections, networking
              opportunities were abound as industry leaders connected, sharing
              insights and building partnerships. Our exhibition booth dazzled
              attendees as we captivated them with the prestigious
              African-themed souvenirs, including gele, fila, and more, adding a
              touch of cultural richness to our display. Missed the opportunity
              to engage with us? Connect with us on our social media platforms
              and stay tuned for upcoming updates.
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles.gitexpicturediv}`}>
        <Image
          className={` ${styles}`}
          width={528.95}
          height={521.23}
          src="/assets/event/t24img.png"
        />
      </div>
    </div>
  );
}
