import styles from "../../styles/licence.module.scss";
import Image from "next/image";

const ServerCloud = () => {
  return (
    <section className={`container ${styles.servercloudstyles}`}>
      <div>
        <h5>Atlassian Server to Cloud Migration</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
          vehicula dui sit amet ligula cursus. dolor sit amet dolor adipiscing.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Duis sit vehicula dui sit
          amet ligula cursus. dolor sit amet dolor adipiscing. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Duis sit vehicula dui sit amet ligula
        </p>
      </div>

      <div>
        <Image
          src="/assets/licence-image/cloudpic.svg"
          alt="cloudpic"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default ServerCloud;
