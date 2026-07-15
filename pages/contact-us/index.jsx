import Layout from "components/layout";
import styles from "../../styles/contact-us.module.scss";
import Badges from "components/Alluvium-Redesign-2025/ReuseComponents/badges";
import CalendlyWidget from "components/calendlyWidget";
import Head from "next/head";
import FormSection from "components/Alluvium-Redesign-2026/formSection";
import { badges } from "data";
import Image from "next/legacy/image";

const ContactUs = () => {
  const data = [
    {
      icon: "/assets/icons/meet.svg",
      contact: "Contact Sales",
      subcontent:
        "Speak to our sales team about plans, pricing, enterprise contracts, or request a demo.",
      btn: "Book a Meeting",
      url: "/support/contact#schedule-a-call",
    },
    {
      icon: "/assets/icons/contact.svg",
      contact: "Contact Support",
      subcontent:
        "Have a specific request? Fill out the support form, and our team will get back to you as soon as possible.",
      btn: "Contact Support",
      url: "/contact-us/contact-sales-team",
    },
    {
      icon: "/assets/icons/contact.svg",
      contact: "Create Support ticket",
      subcontent:
        "Need assistance? Reach out to our support team for help with your questions or issues",
      btn: "Create a Ticket",
      url: "https://support.portal.alluvium.net/servicedesk/customer/portals",
    },
  ];

  const officeLocation = [
    {
      country: "London",
      location: "Kemp House 160, City Road London, EC1V 2NX.",
      tel: "+442035762028",
      url: "tel:+442035762028",
      icon: "/assets/Alluvium-Redesign-2026/contact-us/london.png",
    },
    {
      country: "Stamford",
      location: "Connecticut: 680 E Main Street Ste AStamford, CT 06901 US.",
      tel: "+1 (207) 360-7252",
      url: "tel:+12073607252",
      icon: "/assets/Alluvium-Redesign-2026/contact-us/stanford.png",
    },

    {
      country: "Orlando",
      location:
        "27345 W Sand Lake Rd, STE 210 Office 3190 Orlando, Florida  32819 US.",
      tel: "+1 (567) 331-0070",
      url: "tel:+15673310070",
      icon: "/assets/Alluvium-Redesign-2026/contact-us/orlando.png",
    },

    {
      country: "Nairobi",
      location:
        "4th Floor, Laiboni Centre, Lenana Road, Kilimani, Nairobi, Kenya.",
      tel: "+254 742 090807",
      url: "tel:+254742090807",
      icon: "/assets/Alluvium-Redesign-2026/contact-us/nairobi.png",
    },
  ];

  return (
    <Layout withoutForm={true}>
      <Head>
        <title>Contact Alluvium | alluvium.net</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Speak to an Atlassian Solution Partner. Contact Alluvium in the US, UK, or Nigeria for Atlassian consulting, licensing, or cloud migration support."
        />
        <meta
          name="keywords"
          content="Contact Alluvium, Atlassian partner contact, Jira migration help, ITSM consulting, Atlassian Nigeria."
        />
      </Head>
      {/* <div style={{ maxWidth: "1272px", margin: "auto" }}>
        <Lines variant={"primary"} />
      </div> */}
      <div className={styles.booking}>
        <div className={styles.book_a_call}>
          <div className={styles.booking_content}>
            <h1>Contact us</h1>
            <p>
              High Velocity Service Management. Atlassian Cloud Migration.
              Service Collection. Our team will review your submission and
              respond within 24 hours.
            </p>
          </div>
          <div className={styles.booking_options}>
            <FormSection />
            {/* className="container-fluid my-5" */}
            <section id="schedule-a-call" className={styles.widget}>
              <CalendlyWidget />
            </section>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1270px", margin: "0 auto" }}>
        <Badges variant={"sub-default"} badgesData={badges} />
      </div>

      {/* <ContactSection withLines={false} /> */}

      <section className={`${styles.office__location}`}>
        <div className={styles.locate}>
          <div className={styles.locate__content}>
            <h2>Our Office Locations</h2>
            <p>
              You can find us in London, Stamford, Orlando, and Nairobi. We work
              across time zones to support global service operations.
            </p>
          </div>

          <div className={styles.office}>
            {officeLocation.map((el, i) => {
              return (
                <div className={styles.location} id={i}>
                  <Image
                    width={258}
                    height={191}
                    src={el?.icon || "/assets/icons/location.svg"}
                    alt=""
                  />
                  <h5>{el?.country}</h5>
                  <p>{el?.location}</p>
                  <p>Monday - Friday 9am - 6pm EST</p>
                  <a href={el?.url}>{el?.tel}</a>
                  <a href="mailto:contact@alluvium.net">contact@alluvium.net</a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* <section className={styles.discovery}>
        <div className={styles.discovery__content}>
          <h2>
            Ready to Modernize Your Service <br /> Environment?
          </h2>
          <Button>Schedule a Discovery Call</Button>
        </div>
      </section> */}

      {/* <section className={`${styles.badges}`}>
        <div className={`${styles.badges__border}`}>
          <h2>Alluvium are Trusted Solution Partner of Atlassian</h2>
          <Badges />
        </div>
      </section> */}
    </Layout>
  );
};

export default ContactUs;
