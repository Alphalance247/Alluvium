import Head from "next/head";
import VolunterForm from "components/volunteering/volunterrForm";
import styles from "../../styles/cloud-connect-2/cloudconnect.module.scss";
import SectionHeader from "components/cloud-connect-2/SectionHeader";
import Layout from "components/cloud-connect-2/Layout";
import BecomeReuse from "components/cloud-connect-common/becomeReuse";

const Volunteer = () => {
  return (
    <Layout>
      <Head>
        <title>Contact Details | Cloud Connect 2024</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`container ${styles.sponsor_hero}`}>
        <SectionHeader
          heading="VOLUNTEER REGISTRATION"
          description="Are you passionate about service excellence and its impact across all departments? Join our volunteer team at Cloud Connect and be part of an innovative event focused on Service Management beyond IT."
        />
      </div>

      <VolunterForm />
    </Layout>
  );
};

export default Volunteer;
