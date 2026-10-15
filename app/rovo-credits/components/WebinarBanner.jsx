import { WEBINAR } from "../data";

export default function WebinarBanner() {
  return (
    <div className="webinar-banner">
      <span>
        <b>{WEBINAR.bannerLead}</b> {WEBINAR.bannerBlurb}{" "}
        <a href={WEBINAR.registerUrl} target="_blank" rel="noopener noreferrer" className="webinar-banner-link">
          Register
        </a>
      </span>
    </div>
  );
}
