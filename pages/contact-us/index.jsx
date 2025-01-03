import ServicesHero from "components/atlassian-service-reuse/servicesHero";
import Layout from "components/layout";
import styles from "../../styles/contact-us.module.scss";
import Image from "next/image";
import Button from "components/atlassian-service-reuse/Button";
import ConsutomerConsultation from "components/consutomerConsultation";
import Link from "next/link";
import ContactSection from "components/Alluvium-Redesign-2025/ContactSection";
import Badges from "components/Alluvium-Redesign-2025/ReuseComponents/badges";

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
    },
    {
      country: "America",
      location: "Connecticut: 680 E Main Street Ste AStamford, CT 06901 US.",
      tel: "+442035762028",
    },
    {
      country: "America",
      location:
        "27345 W Sand Lake Rd, STE 210 Office 3190 Orlando, Florida  32819 US..",
      tel: "+442035762028",
    },
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
      <ContactSection />

      <section className={`${styles.office__location}`}>
        <div className={styles.locate}>
          <h2>Our Office Locations</h2>

          <div className={styles.office}>
            {officeLocation.map((el, i) => {
              return (
                <div className={styles.location} id={i}>
                  <h5>{el?.country}</h5>
                  <p>{el?.location}</p>
                  <a href="tel:+442035762028">{el?.tel}</a>
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
