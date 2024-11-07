import ServicesHero from "components/atlassian-service-reuse/servicesHero";
import Layout from "components/layout";
import styles from "../../styles/contact-us.module.scss";
import Image from "next/image";
import Button from "components/atlassian-service-reuse/Button";
import ConsutomerConsultation from "components/consutomerConsultation";
import Link from "next/link";

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
        "Speak to our sales team about plans, pricing, enterprise contracts, or request a demo.",
      btn: "Contact Support",
      url: "/contact-us/contact-sales-team",
    },
    {
      icon: "/assets/icons/contact.svg",
      contact: "Contact Support",
      subcontent:
        "Speak to our sales team about plans, pricing, enterprise contracts, or request a demo.",
      btn: "Create a Ticket",
      url: "/support/contact#schedule-a-call",
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
    <Layout>
      <ServicesHero
        contentsheading1="How Can We Help You?"
        // contentsheading2="Lorem ipsum dolor sit amet consectetur. Leo arcu eget neque tellus"
        variant="secondary"
      />

      <section className={`container ${styles.contact__us__card}`}>
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
      </section>

      <section className={`container ${styles.office__location}`}>
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
      </section>

      <section className={`container ${styles.badges}`}>
        <div className={`${styles.badges__border}`}>
          <h2>Alluvium are Trusted Solution Partner of Atlassian</h2>
          <div className="text-center">
            <Image
              src="/assets/icons/badges.svg"
              alt="badges"
              width={891}
              height={159}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
