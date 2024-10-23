import TicketDetails from "components/ticket-contact/ticketDetails";
import styles from "../../styles/cloud-connect-2/cloudconnect.module.scss";
import SectionHeader from "components/cloud-connect-2/SectionHeader";
import Head from "next/head";
import Layout from "components/cloud-connect-2/Layout";

const BookTicket = () => {
  return (
    <Layout>
      <Head>
        <title>Book A Ticket | Cloud Connect 2024</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`container ${styles.sponsor_hero}`}>
        <SectionHeader
          heading="get your ticket"
          description="Sales ends on the 31st of October, 2024"
        />
      </div>

      <TicketDetails />
    </Layout>
  );
};

export default BookTicket;
