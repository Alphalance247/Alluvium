import SponsorsForm from "components/become-sponsor/sponsorsForm";
import WhySponsor from "components/become-sponsor/whysponsor";
import Partners from "components/cloud-connect-common/partners";
import Header from "components/cloud-connect-2/Header";
import Footer from "components/cloud-connect-2/Footer";
import styles from "../../styles/cloudconnect.module.scss";
import SectionHeader from "components/cloud-connect-2/SectionHeader";
import Button from "components/cloud-connect-2/Button";

const BecomeASponsor = () => {
  return (
    <main className={styles.cloudConnectHome}>
      <Header />
      <div className={`container ${styles.sponsor_hero}`}>
        <SectionHeader
          heading="Become a Sponsor"
          description="Unlock unparalleled opportunities by becoming a sponsor at Cloud Connect. Gain exclusive access to a highly engaged audience of industry leaders, innovators, and decision-makers. Elevate your brand, generate high-quality leads, and position your company at the forefront of cloud technology."
          button1={
            <Button
              size="large"
              variant="default"
              className={styles.brochure__button}
            >
              Download Brochure
            </Button>
          }
          button2={
            <Button size="large" variant="default">
              Apply
            </Button>
          }
          width="large"
          size="normal"
          variant="default"
        />
      </div>
      <Partners />
      <WhySponsor />
      <SponsorsForm />
      <Footer />
    </main>
  );
};

export default BecomeASponsor;
