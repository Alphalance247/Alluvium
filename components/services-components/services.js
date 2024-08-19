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

      <div className="container-fluid p-0">
        <div className={`container mx-auto ${styles.servdiv}`}>
          <div className={`${styles.servimage}`}>
            <Image
              className={` ${styles}`}
              width={542}
              height={510}
              src="/assets/home/atlassconsult.png"
            />
          </div>
          <div className={` ${styles.servmd} ${styles.servmd0}`}>
            <h1 className={`font ${styles.servhead}`}>Atlassian Consulting</h1>
            <p className={` ${styles.servp}`}>
              We offer a comprehensive range of Atlassian services including
              ITSM, automation, AI, JSM implementations, data center management,
              cloud solutions, migrations, support services, training, holistic
              site audit and governance, and access to Atlassian certified
              experts on demand.
            </p>
            <Link href="#">
              <a className={`border mr-4 ${styles.servtabs}`}>AI</a>
            </Link>
            <Link href="/atlassian-services/itsm-services">
              <a className={`border mr-4 ${styles.servtabs}`}>ITSM</a>
            </Link>
            <Link href="/atlassian-services/cloud-migration">
              <a className={`border mr-4 ${styles.servtabs}`}>Migrations</a>
            </Link>
            <Link href="/atlassian-services/cloud-migration">
              <a className={`border mr-4 ${styles.servtabs}`}>Data Center</a>
            </Link>
            <Link href="/atlassian-services/cloud-migration">
              <a className={`border mr-4 ${styles.servtabs}`}>Cloud</a>
            </Link>
            <Link href="/atlassian-services/training">
              <a className={`border mr-4 ${styles.servtabs}`}>Training</a>
            </Link>
            <Link href="#">
              <a className={`border mr-4 ${styles.servtabs}`}>
                JSM Implementations
              </a>
            </Link>
            <Link href="#">
              <a className={`border mr-4 ${styles.servtabs}`}>Automation</a>
            </Link>
            <Link href="#">
              <a className={`border mr-4 ${styles.servtabs}`}>Support</a>
            </Link>{" "}
            <br></br>
            <Link href="/support/contact#schedule-a-call">
              <a className={`btn border ${styles.sched}`}>Schedule a call</a>
            </Link>
            <Link href="/atlassian-services">
              <a className={`btn border ${styles.learnmore}`}>Learn more</a>
            </Link>
          </div>
        </div>

        <div className={`container-fluid p-0  ${styles.servaws}`}>
          <div className={`container mx-auto   ${styles.servconsult}`}>
            <div className={`${styles.servmd} ${styles.servmd1}`}>
              <h1 className={`font ${styles.servhead}`}>AWS Services</h1>
              <p className={` ${styles.servp} ${styles.awsp}`}>
                Optimize your Atlassian environment with our AWS consulting
                services. We offer managed services, infrastructure review,
                modernization, and DevOps solutions, delivered by our team of
                experienced consultants.
              </p>
              <Link href="#">
                <a className={`border mr-4 ${styles.servtabs}`}>
                  Managed Services
                </a>
              </Link>
              <Link href="#">
                <a className={`border mr-4 ${styles.servtabs}`}>
                  Infrastructure review 
                </a>
              </Link>
              <Link href="#">
                <a className={`border mr-4 ${styles.servtabs}`}>
                  Experienced Consultants
                </a>
              </Link>
              <Link href="#">
                <a className={`border mr-4 ${styles.servtabs}`}>
                  Process and Infra modernisation
                </a>
              </Link>
              <Link href="#">
                <a className={`border mr-4 ${styles.servtabs}`}>
                  DevOps and Solutions Consulting
                </a>
              </Link>{" "}
              {/* <br></br> */}
              <div style={{ marginTop: "1rem" }}>
                <Link href="/support/contact#schedule-a-call">
                  <a className={`btn border mr-4 ${styles.schedulecall}`}>
                    Speak to our consultant
                  </a>
                </Link>
              </div>
            </div>

            <div className="">
              <Image
                className={` ${styles.servimage}`}
                width={542}
                height={510}
                src="/assets/home/awsconsult.png"
              />
            </div>
          </div>
        </div>

        <div className="container-fluid p-0">
          <div className={`container mx-auto ${styles.servdiv}`}>
            <div className="">
              <Image
                className={`img-fluid ${styles.servimage}`}
                width={542}
                height={510}
                src="/assets/home/dev.png"
              />
            </div>
            <div className={`${styles.servmd} ${styles.servmd2}`}>
              <h1 className={`font ${styles.servhead}`}>
                Design and Development
              </h1>
              <p className={` ${styles.servp}`}>
                Enhance your projects with our comprehensive Design as a Service
                and cutting-edge software development. Our expert team delivers
                tailored, innovative solutions to meet your unique needs and
                drive your business forward.
              </p>
              <Link href="#">
                <a className={`border mr-4 ${styles.servtabs}`}>
                  Software Development
                </a>
              </Link>
              <Link href="#">
                <a className={`border mr-4 ${styles.servtabs}`}>
                  Design as a Service
                </a>
              </Link>
              <br />
              <Link href="#">
                <a className={`border mr-4 ${styles.servtabs}`}>
                  Software Consulting
                </a>
              </Link>
              <Link href="#">
                <a className={`border mr-4 ${styles.servtabs}`}>
                  Web Development
                </a>
              </Link>{" "}
              <br></br>
              <Link href="/support/contact#schedule-a-call">
                <a className={`btn border mr-4 ${styles.schedulecall}`}>
                  Schedule a call
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
