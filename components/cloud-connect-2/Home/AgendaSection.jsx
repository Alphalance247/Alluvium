import Link from "next/link";
import styles from "../../../styles/cloud-connect-2/Home/agendaSection.module.scss";
import Button from "../Button";
import SectionHeader from "../SectionHeader";

const AgendaSection = () => {
  const agendaItems = [
    { time: "9:00AM - 9:30AM", description: "Registration & Welcome" },
    { time: "9:30AM - 2:30PM", description: "Presentation sessions" },
    { time: "2:30PM - 4:30PM", description: "Lunch & Break" },
    { time: "4:30PM - 5:30PM", description: "Networking & Exhibition" },
    { time: "5:30PM - 6:00PM", description: "Closing remarks" },
  ];

  return (
    <section className={styles.agendaSection}>
      <div className={styles.agendaContent}>
        <div className={styles.agendaHeader}>
          <h2 className={styles.title}>Agenda</h2>
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
