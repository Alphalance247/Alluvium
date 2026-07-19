"use client";
import Layout from "components/layout";
import styles from "../../../styles/contact-us.module.scss";
import ConsutomerConsultation from "components/consutomerConsultation";

const SalesTeam = () => {
  return (
    <Layout withoutForm={true}>
      <section className={`container-fluid ${styles.contact_sales_team}`}>
        <div className={`container mx-auto ${styles.contact__sales}`}>
          <div>
            <h2>Contact Our Sales Team</h2>
            <p>
              Drop us a message with your contact info, and we’ll get back to
              you as soon as possible—usually within the same day!
            </p>

            <ul>
              <li>
                Receive dedicated assistance designed around your unique needs.
              </li>
              <li>
                Collaborate with a team committed to driving your goals forward.
              </li>
              <li>
                Our team is here to support you promptly, so you’re never left
                waiting
              </li>
              <li>
                We tackle complex challenges with tailored, innovative
                approaches.
              </li>
            </ul>
          </div>

          <ConsutomerConsultation variant="primary" />
        </div>
      </section>
    </Layout>
  );
};
export default SalesTeam;
