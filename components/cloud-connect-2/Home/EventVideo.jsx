import styles from "../../../styles/cloudconnect.module.scss";

const EventVideo = () => {
  return (
    <section className={styles["event-video"]}>
      <div className={styles["event-video__content"]}>
        <h2 className={styles["event-video__title"]}>Evolving Excellence</h2>
        <p className={styles["event-video__subtitle"]}>
          Inside Cloud Connect: Watch the 2024 Event Highlight
        </p>
      </div>
      <div className={styles["event-video__video-container"]}>
        <iframe
          className={styles["event-video__iframe"]}
          src="https://www.youtube-nocookie.com/embed/Na6P_kLI2FE?si=rf-sk4KzoIN5rRia&amp;controls=0"
          title="Cloud connect video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

export default EventVideo;
