import styles from "../../../styles/cloudconnect.module.scss";
import Header from "components/cloud-connect-2/Header";
import Footer from "components/cloud-connect-2/Footer";
import SectionHeader from "components/cloud-connect-2/SectionHeader";
import ContactInformation from "components/ticket-contact/contactInformation";

const ContactDetails = () => {
  return (
    <main className={styles.cloudConnectHome}>
      <Header />
      <div className={`container ${styles.sponsor_hero}`}>
        <SectionHeader heading="Contact Details" />
      </div>
      <ContactInformation />
      <Footer />
    </main>
  );
};

export default ContactDetails;
