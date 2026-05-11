import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/events/upcoming-event.module.scss";

const eventsData = [
  {
    id: 2,
    date: "September 15th, 2024",
    title: "TEAM '26 | Anaheim, California",
    description:
      "Atlassian Team'26 is back in Anaheim, CA - This unique event will drive into how AI, teamwork, and transformative technologies can maximize team impact. It's the perfect opportunity to network, gain exclusive insights from peers and industry experts.",
    image: "/assets/Alluvium-Redesign-2026/Events/team26.png",
    link: "https://events.atlassian.com/team",
  },
];

const UpcomingEvents = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <h2 className={styles.titleMain}>Upcoming Events</h2>
        </header>

        <div className={styles.eventList}>
          {eventsData.map((event, index) => (
            <div
              key={event.id}
              className={`${styles.eventRow} ${index % 2 !== 0 ? styles.reverse : ""}`}
            >
              {/* Text Side */}
              <div className={styles.eventContent}>
                <div className={styles.textContent}>
                  <p className={styles.date}>{event.date}</p>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  <p className={styles.description}>{event.description}</p>
                </div>

                <a href={event.link} target="_blank" rel="noopener noreferrer">
                  <button className={styles.btn}>Get Your Ticket</button>
                </a>
              </div>

              {/* Image Side */}
              <div className={styles.imageWrapper}>
                <img src={event.image} alt={event.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
