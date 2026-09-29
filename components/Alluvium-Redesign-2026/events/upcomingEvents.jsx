import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/events/upcoming-event.module.scss";
import Container from "../common/container";
import EventCard from "./EventCard";

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
    // <div className="w-full bg-secondary-900">
    //   <Container>
    //     <div>
    //       <h4 className="text-[30px] font-bold font-merriweather text-tertiary-200 pb-12">
    //         Explore other events
    //       </h4>
    //     </div>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    //       {eventsData.map((e) => {
    //         return (
    //           <EventCard
    //             title={e.title}
    //             key={e.id}
    //             imgUrl={e.img}
    //             link={e.link}
    //             date={e.date}
    //             variant="dark"
    //           />
    //         );
    //       })}
    //     </div>
    //   </Container>
    // </div>
  );
};

export default UpcomingEvents;
