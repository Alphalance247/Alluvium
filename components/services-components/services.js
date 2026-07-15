import { ourServicesData } from "data";
import Link from "next/link";
import styles from "../../styles/services.module.scss";
import Service from "./service";
import BookingCTA from "components/Booking";
import Image from "next/legacy/image";
const Services = () => {
  return (
    <section
      className={`container-fluid p-0 ${styles.ourServices}`}
      id="services"
    >
      <div className={`container mx-auto `}>
        <div className={styles.ourServicesHeader}>
          <p className={styles.ourServicesT}>WHAT WE DO</p>
          <h2 className={styles.ourServicesTitle}>Our Services</h2>
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
              alt="atlassian-consult"
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
            <Link
              href="/atlassian-services/atlassian-licence"
              className={`border mr-4 ${styles.servtabs}`}>
              
                Licence Management
              
            </Link>
            <Link
              href="/atlassian-services/cloud-migration"
              className={`border mr-4 ${styles.servtabs}`}>
              Migrations
            </Link>
            <Link
              href="/atlassian-services/consulting"
              className={`border mr-4 ${styles.servtabs}`}>
              
                Consulting & Strategy
              
            </Link>
            <Link
              href="/atlassian-services/training"
              className={`border mr-4 ${styles.servtabs}`}>
              Training
            </Link>
            <Link
              href="/atlassian-services/itsm-services"
              className={`border mr-4 ${styles.servtabs}`}>
              
                JSM Implementations
              
            </Link>
            <Link
              href="/atlassian-services/support"
              className={`border mr-4 ${styles.servtabs}`}>
              Support
            </Link>

            <br></br>
            <Link
              href="/support/contact#schedule-a-call"
              className={`btn border ${styles.sched}`}>
              Schedule a call
            </Link>
            <Link href="/atlassian-services" className={`btn border ${styles.learnmore}`}>
              Learn More
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

              {/* <br></br> */}
              <div style={{ marginTop: "1rem" }}>
                <Link
                  href="/support/contact#schedule-a-call"
                  className={`btn border ${styles.sched}`}>
                  
                    Schedule a call
                  
                </Link>

                <Link href="/aws-services" className={`btn border mr-4 ${styles.learnmore}`}>
                  
                    Learn More
                  
                </Link>
              </div>
            </div>

            <div className="">
              <Image
                className={` ${styles.servimage}`}
                width={542}
                height={510}
                src="/assets/home/awsconsult.png"
                alt="aws-consultancy"
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
                alt="software-development"
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
              <div style={{ marginTop: "1rem" }}>
                <Link
                  href="/support/contact#schedule-a-call"
                  className={`btn border ${styles.sched}`}>
                  
                    Schedule a call
                  
                </Link>

                <Link
                  href="/software-development"
                  className={`btn border mr-4 ${styles.learnmore}`}>
                  
                    Learn More
                  
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
