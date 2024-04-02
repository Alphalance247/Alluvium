import styles from "../../styles/team.module.scss";
import Image from "next/image";
import CountryCode from "./countryInput";

const EventDetails = () => {
  return (
    <section className={styles.Event}>
      <div className={styles.EventTheme}>
        <h2>What’s in store at Booth 53?</h2>
        <div>
          <h5>Experience the Alluvium Difference</h5>
          <p>
            At Booth No. 53, we're bringing the difference to you! Prepare to be
            dazzled by our exclusive goodies, including traditional gele, fila,
            coasters, and more. As you soak up the beauty, expertise, and pure
            fun, you'll also take home souvenirs that will keep the magic of
            Alluvium alive even after Team '24 ends.
          </p>
        </div>
        <div>
          <h5>Connect with a Network of Experts</h5>
          <p>
            Get to rub shoulders with our network of experts. Let’s engage
            ourselves in captivating conversations and learn together. We’ll
            dive deep into on-point topics such as team health, dev experience,
            service delivery, and collaborative work management. 
          </p>
        </div>
        <div>
          <h5>Join the Alluvium Community</h5>
          <p>
            By registering for your choice of souvenir, you become an integral
            part of the Alluvium community. Open doors to endless opportunities
            for growth, collaboration, and innovation. Connect with like-minded
            individuals, exchange ideas, and create new possibilities for your
            organization.
          </p>
        </div>
      </div>
      <div className={styles.imagesPosition}>
        <div className={styles.positioning1}>
          <Image
            src="/assets/team2024/PrevTeam.png"
            alt="event"
            width={450}
            height={450}
          />
        </div>
        <div className={styles.positioning2}>
          <Image
            src="/assets/team2024/prevshap.png"
            alt="event"
            width={300}
            height={520}
          />
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
