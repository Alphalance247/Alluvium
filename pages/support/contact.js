import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "components/layout";
import SupportSubmenu from "../../components/supportSubmenu";
import styles from "../../styles/contactpage.module.scss";
import { productData } from "../../data";
import "bootstrap/dist/css/bootstrap.min.css";
import CalendlyWidget from "components/calendlyWidget";

export default function Contact({ products }) {
  return (
    <Layout>
      <div className={styles.contactPage}>
        <Head>
          <title>Contact | Alluvium</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Alluvium is an Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers complete data migration in half the time for half the cost."
          />
          <meta
            name="keywords"
            content="Alluvium, alluvium, team alluvium, atlassian products migration lab, migration, about alluvium, alluvians, cloud counter, Migration Experts, Software Consulting atlassian, confluence, jira"
          />
        </Head>
        <section className={styles.hero}>
          <div className={styles.us}>
            <h1>Get In</h1>
            <h1> Touch with Us</h1>
          </div>
        </section>
        <section className="container-fluid">
          <div className={styles.main}>
            <h2 className="text-center text-capitalize">Get in touch for</h2>
            <div
              className="row justify-content-md-around justify-content-between my-5"
              style={{ rowGap: "3rem" }}
            >
              <div className="col-md-5 col-lg-4 text-center align-self-end">
                <Image
                  src="/assets/contact/demo.svg"
                  width={73.59}
                  height={115.97}
                  priority
                  loading="eager"
                />
                <div className="container-fluid">
                  <h3 className="text-capitalize">Request a demo</h3>
                  <p>Request a demonstration of our products</p>
                </div>
              </div>
              <div className="col-md-5 col-lg-4 text-center align-self-end">
                {/* <Image src='' width={73.59} height={115.97} priority loading='eager' /> */}
                <div className="container-fluid">
                  <h3 className="text-capitalize">Product Advice</h3>
                  <p>
                    Confused between products? Contact and tell us your needs.
                  </p>
                </div>
              </div>
              <div className="col-md-5 col-lg-4 text-center align-self-md-end">
                <Image
                  src="/assets/contact/support.svg"
                  width={64.89}
                  height={67.83}
                  priority
                  loading="eager"
                />
                <div className="container-fluid">
                  <h3 className="text-capitalize">Customer Support</h3>
                  <p>Contact for support regarding your order or service.</p>
                </div>
              </div>
              <div className="col-md-5 col-lg-4 text-center">
                <Image
                  src="/assets/contact/location.svg"
                  width={51.8}
                  height={54.15}
                  priority
                  loading="eager"
                />
                <div className="container-fluid">
                  <h3 className="text-capitalize">Find us at:</h3>
                  <p>Kemp House 160, City Road London, EC1V 2NX</p>
                </div>
              </div>
              <div className="col-md-5 col-lg-4 text-center">
                <Image
                  src="/assets/contact/call.svg"
                  width={51.8}
                  height={54.15}
                  priority
                  loading="eager"
                />
                <div className="container-fluid">
                  <h3 className="text-capitalize">Give us a ring at:</h3>
                  <a href="tel:+442035762028">+442035762028</a>
                </div>
              </div>
              <div className="col-md-5 col-lg-4 text-center">
                <Image
                  src="/assets/contact/mail.svg"
                  width={51.8}
                  height={54.15}
                  priority
                  loading="eager"
                />
                <div className="container-fluid">
                  <h3 className="text-capitalize">Drop an email to:</h3>
                  <a
                    href="mailto:contact@alluvium.net"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    contact@alluvium.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="schedule-a-call" className="container-fluid my-5">
          <CalendlyWidget />
        </section>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      products: productData,
    },
  };
};
