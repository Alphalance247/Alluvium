import ServicesHero from "components/atlassian-service-reuse/servicesHero";
import Layout from "components/layout";
import styles from "../../styles/contact-us.module.scss";
import Image from "next/image";
import Button from "components/atlassian-service-reuse/Button";
import ConsutomerConsultation from "components/consutomerConsultation";
import Link from "next/link";
import ContactSection from "components/Alluvium-Redesign-2025/ContactSection";
import Badges from "components/Alluvium-Redesign-2025/ReuseComponents/badges";
import CalendlyWidget from "components/calendlyWidget";
import { Lines } from "components/Alluvium-Redesign-2025/ReuseComponents/Lines";

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
    },
    {
      country: "Stamford",
      location: "Connecticut: 680 E Main Street Ste AStamford, CT 06901 US.",
      tel: "+1 (207) 360-7252",
      url: "tel:+12073607252",
    },
    {
      country: "Orlando",
      location:
        "27345 W Sand Lake Rd, STE 210 Office 3190 Orlando, Florida  32819 US.",
      tel: "+1 (207) 360-7252",
      url: "tel:+12073607252",
    },

    {
      country: "Nairobi",
      location:
        "4th Floor, Laiboni Centre, Lenana Road, Kilimani, Nairobi, Kenya.",
      tel: "+254 742 090807",
      url: "tel:+254742090807",
    },

    // {
    //   country: "Lagos",
    //   location:
    //     "Dominion Plaza, 140/141 Lekki - Epe Expressway, Lekki, Lagos 106104, Nigeria.",
    //   // tel: "+442035762028",
    //   url: "",
    // },
  ];

  return (
    <Layout withoutForm={true}>
      {/* <ServicesHero
        contentsheading1="How Can We Help You?"
        variant="secondary"
      /> */}

      {/* <section className={`container ${styles.contact__us__card}`}>
        <div className={`${styles.contact__us}`}>
          {data.map((el, i) => {
            return (
              <div className={styles.card} id={i}>
                <Image src={el?.icon} alt="contact" width={40} height={40} />
                <p className={styles.contact__sales}>{el?.contact}</p>
                <p className={styles.contact__sales_p}>{el?.subcontent}</p>
                <Link href={el?.url}>
                  <Button variant="outline">{el?.btn}</Button>
                </Link>
              </div>
            );
          })}
        </div>
      </section> */}
      <div style={{ maxWidth: "1272px", margin: "auto" }}>
        <Lines variant={"primary"} />
      </div>
      <div className={styles.booking}>
        <div className={styles.book_a_call}>
          <div>
            <h2>Book a Meeting</h2>
            <p>
              Have questions or need assistance? We're here to help. Reach out
              to us for support, inquiries, or feedback, and our team will get
              back to you promptly.
            </p>
          </div>
          {/* className="container-fluid my-5" */}
          <section id="schedule-a-call" className={styles.widget}>
            <CalendlyWidget />
          </section>
        </div>
      </div>

      <ContactSection withLines={false} />

      <section className={`${styles.office__location}`}>
        <div className={styles.locate}>
          <h2>Our Office Locations</h2>

          <div className={styles.office}>
            {officeLocation.map((el, i) => {
              return (
                <div className={styles.location} id={i}>
                  <h5>{el?.country}</h5>
                  <p>{el?.location}</p>
                  <a href={el?.url}>{el?.tel}</a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${styles.badges}`}>
        <div className={`${styles.badges__border}`}>
          <h2>Alluvium are Trusted Solution Partner of Atlassian</h2>
          <Badges />
          {/* <div className="text-center">
            <Image
              src="/assets/icons/badges.svg"
              alt="badges"
              width={891}
              height={159}
            />
          </div> */}
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
