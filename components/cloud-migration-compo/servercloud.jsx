import styles from "../../styles/licence.module.scss";
import Image from "next/image";

const ServerCloud = () => {
  return (
    <section className={`container ${styles.servercloudstyles}`}>
      <div>
        <h5>Atlassian Server to Cloud Migration</h5>
        <p>
          From strategy to execution, our team of experts will provide the
          utmost guidance and smooth delivery throughout your data migration
          journey. We’ll help your team prepare for Cloud or Data Center
          migration by scrutinizing your systems and focusing on the estimation
          process and timeframe during business hours. Moving forward, we'll
          conduct an in-depth analysis of the finances and technical aspects of
          your project and evaluate any probable risks. We ultimately get the
          job done and smoothly delivered—no dent, no stain. Just sit back and
          watch us bring your migration dream to life.
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
