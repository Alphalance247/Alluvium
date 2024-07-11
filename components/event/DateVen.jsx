import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/eventblog.module.scss";

export default function () {
  return (
    <div className={`${styles.customxs}`}>
      <div className={`${styles.featured}`}>
      
      <div className="row">
    <div className="col">
        <label>Date</label>
      <input type="date" className={`form-control ${styles.underlineinput}`} />
    </div>
    <div className="col">
    <label>Venue</label>
      <input type="text" className={`form-control ${styles.underlineinput}`} />
    </div>
  </div>
      
      </div>

      <div className={`${styles.latestevents}`}>
        <text>Latest Events</text>
      </div>
    </div>
  );
}
