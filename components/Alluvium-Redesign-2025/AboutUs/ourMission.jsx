import styles from "../../../styles/AlluviumRedesign2025/AboutUs/about-us.module.scss";

const OurMission = () => {
  return (
    <section className={styles.alluium__vision}>
      <div className={styles.mission}>
        <div className={styles.overlay}></div>

        <div className={styles.mission__content}>
          <p>OUR MISSION</p>
          <h6>
            Our mission is to provide expert consulting and managed services for
            <span>
              {" "}
              seamless digital transformation and a competitive edge.
            </span>
          </h6>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
