import ServicesHero from "components/atlassian-service-reuse/servicesHero";
import Layout from "components/layout";
import styles from "../../styles/contact-us.module.scss";
import Image from "next/image";
import Button from "components/atlassian-service-reuse/Button";

const ContactUs = () => {
  const data = [
    {
      icon: "assets/icons/meet.svg",
      contact: "Contact Sales",
      subcontent:
        "Speak to our sales team about plans, pricing, enterprise contracts, or request a demo.",
    },
    {
      icon: "assets/icons/meet.svg",
      contact: "Contact Sales",
      subcontent:
        "Speak to our sales team about plans, pricing, enterprise contracts, or request a demo.",
    },
    {
      icon: "assets/icons/meet.svg",
      contact: "Contact Sales",
      subcontent:
        "Speak to our sales team about plans, pricing, enterprise contracts, or request a demo.",
    },
  ];
  return (
    <Layout>
      <ServicesHero
        contentsheading1="How Can We Help You?"
        contentsheading2="Lorem ipsum dolor sit amet consectetur. Leo arcu eget neque tellus"
      />

      <section className={styles.contact__us__card}>
        {data.map((el) => {
          return (
            <div className={styles.card}>
              <Image
                src="assets/icons/meet.svg"
                alt="contact"
                width={40}
                height={40}
              />
              <p className={styles.contact__sales}>{el.contact}</p>
              <p className={styles.contact__sales_p}>{el.subcontent}</p>
              <Button variant="outline">Book a Meeting</Button>
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export default ContactUs;
