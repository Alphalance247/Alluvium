import Link from "next/link";
import styles from "../../../styles/cloud-connect-2/Home/agendaSection.module.scss";
import Button from "../Button";
import SectionHeader from "../SectionHeader";

const AgendaSection = () => {
  const agendaItems = [
    { time: "9:00AM - 9:50AM", description: "Registration" },
    { time: "9:50am - 10:00AM", description: "Welcome speech" },
    { time: "10:00am - 10:30am", description: "Keynote speaker" },
    { time: "10:30am - 11:00am", description: "Speaker 1" },
    { time: "11:00am - 11:30am", description: "Panel session 1" },
    { time: "11:30am - 12:00pm", description: "Networking" },
    { time: "12:00pm - 12:30pm", description: "Speaker 2" },
    { time: "12:30pm - 1:00pm", description: "Demo" },
    { time: "1:00pm - 1:30pm", description: "Speaker 3" },
    { time: "1:30pm - 2:00pm", description: "Lunch break" },
    { time: "2:00pm - 2:30pm", description: "Panel session 2" },
    { time: "2:30pm - 3:00pm", description: "Speaker 4" },
    { time: "3:00pm - 3:30pm", description: "Speaker 5" },
    { time: "3:30pm - 4:00pm", description: "Closing remarks" },
    { time: "4:00pm - 6:00pm", description: "Networking, exhibition" },
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
