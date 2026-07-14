import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/events/upcoming-webinars.module.scss";
import Image from "next/image";
import Link from "next/link";
const webinars = [
  {
    id: 1,
    title: "Dashboard Advantage: What You Do Not Get With Email",
    date: "WED, 10TH JUNE, 2026 1:00 PM WAT",
    link: "dashboard-advantage-what-you-do-not-get-with-email",
    thumbnailType: "exploring-atlassian’s-csm-telephony",
    host: "Ayako Inagawa",
    guest: "Ayodele Akinwale",
    bg: "#60a5fa", // blue-400
    img: "/assets/Alluvium-Redesign-2026/Events/Yusuf banner.jpg",
    width: 600,
    height: 285,
  },
  {
    id: 2,
    title: "Exploring Atlassian’s CSM Telephony",
    date: "TUE, May 26, 2026 1:00 PM WAT",
    link: "exploring-atlassian’s-csm-telephony",
    thumbnailType: "exploring-atlassian’s-csm-telephony",
    host: "Ayako Inagawa",
    guest: "Ayodele Akinwale",
    bg: "#60a5fa", // blue-400
    img: "/assets/Alluvium-Redesign-2026/Events/csm-telephony.png",
    width: 600,
    height: 285,
  },
  // {
  //   id: 2,
  //   title: "Modern HR Operations with JSM Cloud",
  //   date: "May 24, 2024 at 7:30 PM WAT",
  //   thumbnailType: "stage",
  //   label: "MAIN STAGE",
  //   bg: "#fb923c", // orange-400
  //   img: "/assets/Alluvium-Redesign-2026/Events/webinar1.png",
  // },
  // {
  //   id: 3,
  //   title: "Service Management for High Stakes",
  //   date: "June 12, 2024 at 5:00 PM WAT",
  //   thumbnailType: "portrait",
  //   host: "Ayako Inagawa",
  //   guest: "Ayodele Akinwale",
  //   bg: "#60a5fa",
  //   img: "/assets/Alluvium-Redesign-2026/Events/webinar.png",
  // },
];

const WebinarCard = ({ webinar }) => (
  <Link href={`/event/${webinar?.link}`}>
    <div className={styles.card}>
      <div>
        <Image
          width={webinar.width}
          height={webinar.height}
          src={
            webinar.img || "/assets/Alluvium-Redesign-2026/Events/webinar.png"
          }
          alt={webinar.title}
        />
      </div>

      <div className={styles.cardBody}>
        <div>
          <h3 className={styles.webinarTitle}>{webinar.title}</h3>
          <p className={styles.timestamp}>{webinar.date}</p>
        </div>
        <button className={styles.registerBtn}>
          Register Now <span>→</span>
        </button>
      </div>
    </div>
  </Link>
);

const UpcomingWebinars = ({ heading, subtitle }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.titleMain}>{heading || "Upcoming Webinars"}</h2>
          <p className={styles.subtitle}>
            {subtitle ||
              "Join upcoming live sessions and learn directly from experts in real time."}
          </p>
        </header>

        <div className={styles.webinarGrid}>
          {webinars.map((w) => (
            <WebinarCard key={w.id} webinar={w} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingWebinars;
