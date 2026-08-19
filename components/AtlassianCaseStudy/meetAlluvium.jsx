import Button from "components/atlassian-service-reuse/Button";
import styles from "../../styles/Atlassian-Case-Study/meetAlluvium.module.scss";
import Image from "next/legacy/image";
import Link from "next/link";

const MeetAlluvium = () => {
  return (
    <section className={`container  mx-auto ${styles.meet__alluvium}`}>
      <div
        className={`align-items-center d-grid ${styles.meet__alluvium__encap}`}
      >
        <div className="">
          <div>
            <Image
              src="/assets/icons/alluviumpartner.svg"
              alt="alluviumpartnerlogo"
              width={338}
              height={63}
            />
          </div>
          <h4>Alluvium are Trusted Solution Partner of Atlassian</h4>
          <p>
            Alluvium is a trusted partner of Atlassian and AWS. We are experts
            in Atlassian applications, DevSecOps, ITSM Implementation and Data
            Migration
            <br />
            <br />
            We offer a comprehensive range of Atlassian services including ITSM,
            AI, JSM Implementations, Data Center Management, Cloud Solutions,
            Migrations, Support Services, Training, Holistic Site Audit and
            Governance, plus access to Atlassian Certified Experts on demand.
          </p>
          <Link href="/contact-us">
            <Button>Get in Touch</Button>
          </Link>
        </div>

        <Image
          src="/assets/icons/business-handshake.png"
          alt="business-handshake"
          width={471}
          height={573}
          style={{ boxShadow: "0px 7px 15px 0px #0000000D" }}
        />
      </div>
    </section>
  );
};

export default MeetAlluvium;
