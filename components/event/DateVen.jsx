import styles from "../../styles/eventblog.module.scss";

export default function () {
  return (
    <div className={`container-fluid ${styles.customxs}`}>
      {/* <div className={`container m-auto ${styles.featuredHero}`}>
        <div className="row">
          <div className="col">
            <label>Date</label>
            <input
              type="date"
              className={`form-control ${styles.underlineinput}`}
            />
          </div>
          <div className="col">
            <label>Venue</label>
            <input
              type="text"
              className={`form-control ${styles.underlineinput}`}
            />
          </div>
        </div>
      </div> */}

      <div className={`${styles.latestevents}`}>
        <p>Latest Events</p>
      </div>
    </div>
  );
}
