import styles from "../../../styles/cloud-connect-2/cloudconnect.module.scss";
import SectionHeader from "components/cloud-connect-2/SectionHeader";
import ContactInformation from "components/ticket-contact/contactInformation";
import Layout from "components/cloud-connect-2/Layout";
import Head from "next/head";

const ContactDetails = () => {
  return (
    <Layout>
      <Head>
        <title>Contact Details | Cloud Connect 2024</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`container ${styles.sponsor_hero}`}>
        <SectionHeader heading="Contact Details" />
      </div>
      <ContactInformation />
    </Layout>
  );
};

export default ContactDetails;
