import { ourServicesData } from "data";
import Link from "next/link";
import styles from "../../styles/services.module.scss";
import Service from "./service";
import BookingCTA from "components/Booking";
import Image from "next/image";
const Services = () => {
  const ourServices = ourServicesData;
  return (
    <section
      className={`container-fluid p-0 ${styles.ourServices}`}
      id="services"
    >
      <div className={`container mx-auto `}>
        <div className={styles.ourServicesHeader}>
          <h2>What We Do</h2>
          <h3 className={styles.ourServicesTitle}>Our Services</h3>
          <p className={styles.ourServicesSubtitle}>
            Unlock the full potential of your business with our comprehensive
            suite of services
          </p>
        </div>
      </div>


        <div className="container mx-auto">
        <div className="row">
          <div className="col-md-6" style={{}}>
          <Image className={`img-fluid ${styles}`} width={542} height={510} src="/assets/home/atlassconsult.png" />
          </div>
          <div className={`col-md-6 ${styles.servmd}`}>
            <h1 style={{fontSize:"30px"}}>Atlassian Consulting</h1>
            <p style={{fontSize:"16px"}}>
            We offer a comprehensive range of Atlassian services including ITSM, automation, AI, JSM implementations, data center management, cloud solutions, migrations, support services, training, holistic site audit and governance, and access to Atlassian certified experts on demand.
            </p>
            <Link href="#">
                <a
                  className="btn border mr-4"
                  style={{ color: "#000", marginRight:"10px", fontSize:"15px", fontWeight:"normal" }}
                >
                 AI
                </a>
              </Link>
              <Link href="#">
                <a
                  className="btn border mr-4"
                  style={{ color: "#000", marginRight:"10px", fontSize:"15px", fontWeight:"normal" }}
                >
                  ITSM
                </a>
              </Link>

              <Link href="#">
                <a
                  className="btn border mr-4"
                  style={{ color: "#000", marginRight:"10px", fontSize:"15px", fontWeight:"normal" }}
                >
                  Migrations
                </a>
              </Link>
              <Link href="#">
                <a
                  className="btn border mr-4"
                  style={{ color: "#000", marginRight:"10px", fontSize:"15px", fontWeight:"normal" }}
                >
                  Data Center
                </a>
              </Link>
              <Link href="#">
                <a
                  className="btn border mr-4"
                  style={{ color: "#000", marginRight:"10px", fontSize:"15px", fontWeight:"normal" }}
                >
                  Cloud
                </a>
              </Link>
              <Link href="#">
                <a
                  className="btn border mr-4"
                  style={{ color: "#000", marginRight:"10px", fontSize:"15px", fontWeight:"normal" }}
                >
                  Training
                </a>
              </Link>
              <Link href="#">
                <a
                  className="btn border mr-4"
                  style={{ color: "#000", marginRight:"10px", fontSize:"15px", fontWeight:"normal" }}
                >
                  JSM Implementations
                </a>
              </Link>

              <Link href="#">
                <a
                  className="btn border mr-4"
                  style={{ color: "#000", marginRight:"10px", fontSize:"15px", fontWeight:"normal" }}
                >
                  Automation
                </a>
              </Link>

              <Link href="#">
                <a
                  className="btn border mr-4"
                  style={{ color: "#000", marginRight:"10px", fontSize:"15px", fontWeight:"normal" }}
                >
                  Support
                </a>
              </Link> <br></br>

              <Link href="#">
                <a
                  className="btn border mr-4"
                  style={{ color: "#E37915", marginRight:"10px", fontSize:"16px" }}
                >
                  Schedule a call
                </a>
              </Link>
          </div>
        </div>



        <div className="row" style={{}}>
        <div className={`col-md-6 ${styles.servmd}`}>
            <h1 style={{fontSize:"30px"}}>AWS Consulting</h1>
            <p style={{fontSize:"16px"}}>
            Optimize your Atlassian environment with our AWS consulting services. We offer managed services, infrastructure review, modernization, and DevOps solutions, delivered by our team of experienced consultants.
            </p>
            <Link href="#">
                <a
                  className="btn border mr-4"
                  style={{ color: "#000", marginRight:"10px", fontSize:"15px", fontWeight:"normal" }}
                >
                 Managed Services
                </a>
              </Link>
              <Link href="#">
                <a
                  className="btn border mr-4"
                  style={{ color: "#000", marginRight:"10px", fontSize:"15px", fontWeight:"normal" }}
                >
                  Infrastructure review
                </a>
              </Link>

              <Link href="#">
                <a
                  className="btn border mr-4"
                  style={{ color: "#000", marginRight:"10px", fontSize:"13px", fontWeight:"normal" }}
                >
                  Experienced Consultants
                </a>
              </Link>
              <Link href="#">
                <a
                  className="btn border mr-4"
                  style={{ color: "#000", marginRight:"10px", fontSize:"13px", fontWeight:"normal" }}
                >
                  Process & Service Modernisation
                </a>
              </Link>
              <Link href="#">
                <a
                  className="btn border mr-4"
                  style={{ color: "#000", marginRight:"10px", fontSize:"15px", fontWeight:"normal" }}
                >
                 DevOps and Solutions Consulting
                </a>
              </Link>
               <br></br>

              <Link href="#">
                <a
                  className="btn border mr-4"
                  style={{ color: "#E37915", marginRight:"10px", fontSize:"16px" }}
                >
                  Speak to our consultant
                </a>
              </Link>
          </div>
          <div className="col-md-6">
          <Image className={`img-fluid ${styles.customdiv}`} width={542} height={510} src="/assets/home/awsconsult.png" />
          </div>
        </div>




        <div className="row">
          <div className="col-md-6">
          <Image className={`img-fluid ${styles.customdiv}`} width={542} height={510} src="/assets/home/dev.png" />
          </div>
          <div className={`col-md-6 ${styles.servmd}`}>
            <h1 style={{fontSize:"30px"}}>Design and Dev</h1>
            <p style={{fontSize:"16px"}}>
            Lorem ipsum dolor sit amet consectetur. Diam tincidunt vel turpis pretium lorem quam vulputate a pellentesque. Lorem ipsum dolor sit amet consectetur. Diam tincidunt vel turpis pretium lorem quam 
            </p>
            <Link href="#">
                <a
                  className="btn border mr-4"
                  style={{ color: "#000", marginRight:"10px", fontSize: "14px", fontSize:"15px", fontWeight:"normal" }}
                >
                 Software Development
                </a>
              </Link>
              <Link href="#">
                <a
                  className="btn border mr-4"
                  style={{ color: "#000", marginRight:"10px", fontSize: "14px", fontSize:"15px", fontWeight:"normal" }}
                >
                  Design as a Service
                </a>
              </Link>
              

              <Link href="#">
                <a
                  className="btn border mr-4"
                  style={{ color: "#000", marginRight:"10px", fontSize:"15px", fontWeight:"normal" }}
                >
                  Software Consulting
                </a>
              </Link>
              <Link href="#">
                <a
                  className="btn border mr-4"
                  style={{ color: "#000", marginRight:"10px", fontSize:"15px", fontWeight:"normal" }}
                >
                  Web Development
                </a>
              </Link> <br></br>

              <Link href="#">
                <a
                  className="btn border mr-4"
                  style={{ color: "#E37915", marginRight:"10px", fontSize:"16px" }}
                >
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
