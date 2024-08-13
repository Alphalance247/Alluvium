import TicketDetails from "components/ticket-contact/ticketDetails";
import Header from "components/cloud-connect-2/Header";
import Footer from "components/cloud-connect-2/Footer";
import styles from "../../styles/cloudconnect.module.scss";
import SectionHeader from "components/cloud-connect-2/SectionHeader";

const BookTicket = () => {
  return (
    <main className={styles.cloudConnectHome}>
      <Header />
      <div className={`container ${styles.sponsor_hero}`}>
        <SectionHeader
          heading="get your ticket"
          description="Sales ends on the 31st of October, 2024"
        />
      </div>
      <TicketDetails />
      <Footer />
    </main>
  );
};

export default BookTicket;
