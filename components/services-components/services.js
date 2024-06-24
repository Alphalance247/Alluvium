import { ourServicesData } from "data";
import Link from "next/link";
import styles from "../../styles/services.module.scss";
import Service from "./service";
import BookingCTA from "components/Booking";
import Image from "next/image";
const Services = () => {
  return (
    <section
      className={`container-fluid p-0 ${styles.ourServices}`}
      id="services"
    >
      <div className={`container mx-auto `}>
        <div className={styles.ourServicesHeader}>
          <h2 className={styles.ourServicesT}>WHAT WE DO</h2>
          <h3 className={styles.ourServicesTitle}>Our Services</h3>
          <p className={styles.ourServicesSubtitle}>
            Unlock the full potential of your business with our comprehensive
            suite of services
          </p>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="row">
          <div className="col-md-6">
            <Image
              className={`img-fluid ${styles}`}
              width={542}
              height={510}
              src="/assets/home/atlassconsult.png"
            />
          </div>
          <div className={`col-md-6 ${styles.servmd}`}>
            <h1 className={`font ${styles.servhead}`}>Atlassian Consulting</h1>
            <p className={` ${styles.servp}`}>
              We offer a comprehensive range of Atlassian services including
              ITSM, automation, AI, JSM implementations, data center management,
              cloud solutions, migrations, support services, training, holistic
              site audit and governance, and access to Atlassian certified
              experts on demand.
            </p>
            <Link href="#">
              <a className={` btn border mr-4 ${styles.servtabs}`}>
                AI
              </a>
            </Link>
            <Link href="#">
            <a className={` btn border mr-4 ${styles.servtabs}`}>
                ITSM
              </a>
            </Link>
            <Link href="#">
            <a className={` btn border mr-4 ${styles.servtabs}`}>
                Migrations
              </a>
            </Link>
            <Link href="#">
            <a className={` btn border mr-4 ${styles.servtabs}`}>
                Data Center
              </a>
            </Link>
            <Link href="#">
            <a className={` btn border mr-4 ${styles.servtabs}`}>
                Cloud
              </a>
            </Link>
            <Link href="#">
            <a className={` btn border mr-4 ${styles.servtabs}`}>
                Training
              </a>
            </Link>
            <Link href="#">
            <a className={` btn border mr-4 ${styles.servtabs}`}>
                JSM Implementations
              </a>
            </Link>
            <Link href="#">
            <a className={` btn border mr-4 ${styles.servtabs}`}>
                Automation
              </a>
            </Link>
            <Link href="#">
            <a className={` btn border mr-4 ${styles.servtabs}`}>
                Support
              </a>
            </Link>{" "}
            <br></br>
            <Link href="/support/contact#schedule-a-call">
            <a className={` btn border mr-4 ${styles.servtabs}`}>
                Schedule a call
              </a>
            </Link>
          </div>
        </div>

        <div className="row" style={{}}>
          <div className={`col-md-6 ${styles.servmd}`}>
            <h1 style={{ fontSize: "30px" }}>AWS Consulting</h1>
            <p style={{ fontSize: "16px" }}>
              Optimize your Atlassian environment with our AWS consulting
              services. We offer managed services, infrastructure review,
              modernization, and DevOps solutions, delivered by our team of
              experienced consultants.
            </p>
            <Link href="#">
            <a className={` btn border mr-4 ${styles.servtabs}`}>
                Managed Services
              </a>
            </Link>
            <Link href="#">
            <a className={` btn border mr-4 ${styles.servtabs}`}>
                Infrastructure review
              </a>
            </Link>

            <Link href="#">
            <a className={` btn border mr-4 ${styles.servtabs}`}>
                Experienced Consultants
              </a>
            </Link>
            <Link href="#">
            <a className={` btn border mr-4 ${styles.servtabs}`}>
                Process & Service Modernisation
              </a>
            </Link>
            <Link href="#">
            <a className={` btn border mr-4 ${styles.servtabs}`}>
                DevOps and Solutions Consulting
              </a>
            </Link>
            <br></br>

            <Link href="/#consultationForm">
            <a className={` btn border mr-4 ${styles.servtabs}`}>
                Speak to our consultant
              </a>
            </Link>
          </div>
          <div className="col-md-6">
            <Image
              className={`img-fluid ${styles.customdiv}`}
              width={542}
              height={510}
              src="/assets/home/awsconsult.png"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Image
              className={`img-fluid ${styles.customdiv}`}
              width={542}
              height={510}
              src="/assets/home/dev.png"
            />
          </div>
          <div className={`col-md-6 ${styles.servmd}`}>
            <h1 style={{ fontSize: "30px" }}>Design and Dev</h1>
            <p style={{ fontSize: "16px" }}>
              Enhance your projects with our comprehensive Design as a Service
              and cutting-edge software development. Our expert team delivers
              tailored, innovative solutions to meet your unique needs and drive
              your business forward.
            </p>
            <Link href="#">
            <a className={` btn border mr-4 ${styles.servtabs}`}>
                Software Development
              </a>
            </Link>
            <Link href="#">
            <a className={` btn border mr-4 ${styles.servtabs}`}>
                Design as a Service
              </a>
            </Link>
            <Link href="#">
            <a className={` btn border mr-4 ${styles.servtabs}`}>
                Software Consulting
              </a>
            </Link>
            <Link href="#">
            <a className={` btn border mr-4 ${styles.servtabs}`}>
                Web Development
              </a>
            </Link>{" "}
            <br></br>
            <Link href="https://alluvium.net/support/contact#schedule-a-call">
            <a className={` btn border mr-4 ${styles.servtabs}`}>
                Schedule a call
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
