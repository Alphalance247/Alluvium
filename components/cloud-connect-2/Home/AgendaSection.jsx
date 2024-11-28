import Link from "next/link";
import styles from "../../../styles/cloud-connect-2/Home/agendaSection.module.scss";
import Button from "../Button";
import SectionHeader from "../SectionHeader";

const AgendaSection = () => {
  const agendaItems = [
    { time: "9:00AM - 9:50AM", description: "Registration" },
    { time: "9:00AM - 9:50AM", description: "Networking, Exhibition" },
    { time: "9:50am - 10:00AM", description: "Welcome speech" },
    {
      time: "10:00am - 10:20am",
      description: "Keynote speaker",
    },
    {
      time: "10:20am - 10:40am",
      description: "Speaker 1",
    },
    {
      time: "10:40am - 11:00am",
      description: "Speaker 2",
    },
    { time: "11:00am - 11:30am", description: "Panel session 1" },
    {
      time: "11:30am - 12:00pm",
      description: "Tea Break / Networking / Exhibition",
    },
    {
      time: "11:30am - 12:00pm",
      description: "Speaker 4",
    },
    { time: "12:00pm - 12:20pm", description: "Demo (Scrum companion)" },
    { time: "12:20pm - 12:40pm", description: "Panel session 2" },
    {
      time: "12:40pm - 1:00pm",
      description: "Lunch / Networking / Exhibition",
    },
    {
      time: "1:00pm - 1:30pm",
      description: "Speaker 4",
    },
    { time: "1:30pm - 2:00pm", description: "Speaker 5" },
    { time: "2:00pm - 2:20pm", description: "Closing remarks" },
  ];

  return (
    <section className={styles.agendaSection}>
      <div className={styles.agendaContent}>
        <div className={styles.agendaHeader}>
          {/* <h2 className={styles.title}>Agenda</h2> */}
          <p className={styles.date}>Thursday, November 28th, 2024</p>
        </div>
        <div className={styles.agendaItems}>
          {agendaItems.map((item, index) => (
            <div key={index} className={styles.agendaItem}>
              <span className={styles.time}>{item.time}</span>
              <span className={styles.description}>{item.description}</span>
            </div>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          {/* <Link href="/cloud-connect">
            <Button size="large" variant="primary">
              View full agenda
            </Button>
          </Link> */}
          <Link href="/cloud-connect/book-a-ticket">
            <Button size="large">Buy Ticket</Button>
          </Link>
        </div>
      </div>
      {/* <div className={styles.sponsorSection}>
        <div className={styles.sponsorContent}>
          <p className={styles.sponsorText}>Sponsor Cloud Connect</p>
          <SectionHeader
            heading="Partner with Us to Drive Innovation at Cloud Connect"
            width="fullWidth"
            button1={
              <Link href="/cloud-connect/sponsor">
                <Button size="large" width className={styles.sponsorButton}>
                  Become a sponsor
                </Button>
              </Link>
            }
          />
        </div>
      </div> */}
    </section>
  );
};

export default AgendaSection;
