import Button from "components/atlassian-service-reuse/Button";
import ServicesHero from "components/atlassian-service-reuse/servicesHero";
import Layout from "components/layout";
import ServerToCloud from "components/atlassian-service-reuse/serverToCloud";
import Link from "next/link";
import styles from "../../../styles/atlassian-services-style/aws-services.module.scss";
import { awsServicesPage, awsTrainingData, awsSolutions } from "data";

const AWSServices = () => {
  return (
    <Layout>
      <ServicesHero
        contentsheading1="Comprehensive AWS Solutions Tailored to Your Needs."
        contentsheading2="From data transformation to full cloud solutions, we help you leverage the power of AWS."
        button1={
          <Link href="/support/contact#schedule-a-call" passHref>
            <Button size="large">Book a schedule</Button>
          </Link>
        }
      />

      <ServerToCloud
        image2={true}
        heading="Digital transformation"
        paragraph="Embrace the future of business with our AWS-powered Digital Transformation services. We guide you through every step of your cloud journey, from migrating legacy systems to modernizing your entire infrastructure. By leveraging the power of AWS, we enable your organization to innovate at speed, optimize operations, and scale effortlessly. Whether you’re looking to enhance agility, improve customer experiences, or drive new revenue streams, our tailored solutions are designed to meet your unique needs and propel your business forward in today’s digital age."
        image2Url="/assets/licence-image/AWS certs.png"
        alt2="cloudpic"
      />

      <div className={`container-fluid ${styles.awsSolutions}`}>
        <h2>Tailored AWS Solutions for Every Business Need</h2>
        <div className={`container mx-auto ${styles.grid}`}>
          {awsSolutions.map((el, index) => {
            return (
              <div
                className={`${styles.awsSolutionCard} ${
                  el.direction === "row-reverse" ? styles.rowReverse : ""
                }`}
                key={index}
              >
                <img
                  src={el.image}
                  alt="Solution icon"
                  className={styles.image}
                />
                <div className={styles.content}>
                  <div className={styles.textContainer}>
                    <h3>{el.headings}</h3>
                    <p>{el.paragraphs}</p>
                  </div>
                  <div className={styles.buttonContainer}>
                    <Link href="/support/contact#schedule-a-call">
                      <Button variant="outline" size="large">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.awsServices}>
        <div className={`container-fluid ${styles.container}`}>
          <div className={`container mx-auto ${styles.heading}`}>
            <h2>Expert AWS Consulting to Drive Your Cloud Success</h2>

            <div className={`${styles.grid}`}>
              {awsServicesPage.map((el) => {
                return (
                  <div className={`${styles.cardContainer}`}>
                    <div>
                      <img
                        src={el.icon}
                        className={styles.icon}
                        alt="Feature icon"
                      />

                      <div className={styles.content}>
                        <h3>{el.headings}</h3>
                        <p className={styles.description}>{el.paragraphs}</p>
                      </div>
                    </div>
                    <div
                      className={el.buttonText ? styles.buttonContainer : ""}
                    >
                      {el.buttonText && (
                        <Link
                          href="/support/contact#schedule-a-call"
                          className={styles.link}
                        >
                          <Button
                            variant={el.buttonVariant}
                            size={el.buttonSize}
                          >
                            {el.buttonText}
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className={`container-fluid ${styles.awsTraining}`}>
        <div className={`container mx-auto ${styles.heading}`}>
          <h2>AWS Training & Certification</h2>
          <p>
            AWS Training and Certification provides a comprehensive learning
            path for mastering Amazon Web Services (AWS) and gaining recognition
            for your cloud expertise. Whether you're new to AWS or an
            experienced cloud professional, AWS training helps you build skills
            to effectively manage AWS services and solutions.
          </p>
        </div>

        <div className={`container mx-auto ${styles.grid}`}>
          {awsTrainingData.map((el) => {
            return (
              <div
                className={`${styles.trainingCard}
              ${el.textAlign === "center" ? styles.textCenter : ""}
              `}
              >
                <h3>{el.headings}</h3>
                <p>{el.paragraphs}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default AWSServices;
