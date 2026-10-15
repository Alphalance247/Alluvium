import { WEBINAR } from "../data";

export default function WebinarEventCard() {
  return (
    <section className="webinar-card">
      <div className="webinar-card-tag">
        <span className="dot" aria-hidden="true" />
        {WEBINAR.tag}
      </div>
      <div className="webinar-card-body">
        <div className="date-badge">
          <span className="d">{WEBINAR.day}</span>
          <span className="n">{WEBINAR.dateNum}</span>
          <span className="m">{WEBINAR.month}</span>
        </div>
        <div className="webinar-card-copy">
          <h2>{WEBINAR.title}</h2>
          <p>{WEBINAR.when}</p>
        </div>
        <a className="btn" href={WEBINAR.registerUrl} target="_blank" rel="noopener noreferrer">
          Register now
        </a>
      </div>
    </section>
  );
}
