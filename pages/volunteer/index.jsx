import VolunterForm from "components/volunteering/volunterrForm";
import Header from "components/cloud-connect-2/Header";
import Footer from "components/cloud-connect-2/Footer";
import styles from "../../styles/cloudconnect.module.scss";
import SectionHeader from "components/cloud-connect-2/SectionHeader";

const Volunteer = () => {
  return (
    <main className={styles.cloudConnectHome}>
      <Header />
      <div className={`container ${styles.sponsor_hero}`}>
        <SectionHeader
          heading="VOLUNTEER REGISTRATION"
          description="Are you passionate about service excellence and its impact across all departments? Join our volunteer team at Cloud Connect and be part of an innovative event focused on Service Management beyond IT."
        />
      </div>
      <VolunterForm />

      <Footer />
    </main>
  );
};

export default Volunteer;
