import styles from "../../styles/team.module.scss";
import Image from "next/image";
import CountryCode from "./countryInput";

const EventDetails = () => {
  return (
    <section className={styles.Event}>
      <div className={styles.EventTheme}>
        <h2>What's in store at Team '24</h2>
        <div>
          <h5>Empower your teams by connecting tools and data</h5>
          <p>
            Learn about Atlassian's flexible solutions that keep dev teams in
            the flow, unlock high-velocity IT, and modernizes work at your
            company. Walk away with a clear ROI on your Atlassia products, and
            know your teams are ahead of the curve.
          </p>
        </div>
        <div>
          <h5>Explore product innovations and see what's new</h5>
          <p>
            Find out how our latest product updates and features will prepare
            you, and your team for the future. Explore AI as your newest
            teammate and accelerate organizational transformation. Discover how
            our secure, enterprise-grade platform can modernize your team's
            workflows, enhance your collaboration, and help you make data-driven
            decisions with confidence.
          </p>
        </div>
        <div>
          <h5>Enhance your skills and elevate your team</h5>
          <p>
            Connect with industry peers and learn from the best. Talk to experts
            on team health, dev experience, service delivery, and collaborative
            work management on how to evolve your own team, and your entire
            organization.
          </p>
        </div>
      </div>
      <div className={styles.imagesPosition}>
        <div className={styles.positioning1}>
          <Image
            src="/assets/team2024/bluerect.png"
            alt="event"
            width={467}
            height={407}
          />
        </div>
        <div className={styles.positioning2}>
          <Image
            src="/assets/team2024/event.png"
            alt="event"
            width={467}
            height={450}
          />
        </div>
        <div className={styles.positioning3}>
          <Image
            src="/assets/team2024/orangerect.png"
            alt="event"
            width={467}
            height={407}
          />
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
