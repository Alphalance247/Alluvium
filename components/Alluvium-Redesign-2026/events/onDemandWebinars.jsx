import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/events/upcoming-webinars.module.scss";
import Image from "next/legacy/image";

const webinars = [
  {
    id: 1,
    title: "Jira Service Management Fundamentals",
    date: "May 24, 2024 at 7:30 PM WAT",
    thumbnailType: "portrait",
    host: "Ayako Inagawa",
    guest: "Ayodele Akinwale",
    bg: "#60a5fa", // blue-400
    img: "/assets/Alluvium-Redesign-2026/Events/webinar1.png",
  },
  {
    id: 2,
    title: "Modern HR Operations with JSM Cloud",
    date: "May 24, 2024 at 7:30 PM WAT",
    thumbnailType: "stage",
    label: "MAIN STAGE",
    bg: "#fb923c", // orange-400
    img: "/assets/Alluvium-Redesign-2026/Events/webinar1.png",
  },
  {
    id: 3,
    title: "Service Management for High Stakes",
    date: "June 12, 2024 at 5:00 PM WAT",
    thumbnailType: "portrait",
    host: "Ayako Inagawa",
    guest: "Ayodele Akinwale",
    bg: "#60a5fa",
    img: "/assets/Alluvium-Redesign-2026/Events/webinar.png",
  },
];

const WebinarCard = ({ webinar }) => (
  <div className={styles.card}>
    <div>
      {/* {webinar.thumbnailType === "portrait" ? (
        <div className="p-4 w-full h-full flex flex-col justify-between">
          <span className="text-[10px] uppercase font-bold opacity-80">
            Hosted by {webinar.host}
          </span>
          <span className="text-xl font-bold leading-tight">
            Operating when stakes are high
          </span>
          <span className="text-[10px] uppercase font-bold opacity-80 self-end">
            with {webinar.guest}
          </span>
        </div>
      ) : (
        <div className="flex flex-col items-end justify-center w-full px-6">
          <span className="text-3xl font-black italic tracking-tighter text-black opacity-30">
            {webinar.label}
          </span>
          <span className="text-3xl font-black italic tracking-tighter text-black leading-none">
            {webinar.label}
          </span>
        </div>
      )} */}
      <Image
        width={357}
        height={195}
        src={webinar.img || "/assets/Alluvium-Redesign-2026/Events/webinar.png"}
        alt="webinar thumbnail"
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
);

const OnDemandWebinars = () => {
  return (
    <section className={styles.section1}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.titleMain}>On-demand webinars </h2>
          <p className={styles.subtitle}>
            Explore a library of recorded webinars available whenever you are.
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

export default OnDemandWebinars;
