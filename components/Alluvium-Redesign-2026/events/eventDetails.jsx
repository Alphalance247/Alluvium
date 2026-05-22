import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/events/event-details.module.scss";
import LeadForm from "pages/event/itsm-solutions/form/leadform";

const Person = ({ name, role, image }) => (
  <div className={styles.personCard}>
    <img src={image} alt={name} />
    <div>
      <div className={styles.name}>{name}</div>
      <div className={styles.role}>{role}</div>
    </div>
  </div>
);

const EventDetail = ({
  dateTime = "THU, MAR 26, 2026 7:00 PM WAT",
  startsIn = "STARTS IN 9 DAYS",
  title = "Modern ITSM with Atlassian's Service Collection",
  descriptionParagraphs = [],
  coverPoints = [],
  hosts = [],
  speakers = [],
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Column: Info */}
        <main>
          <div className={styles.badgeContainer}>
            <span>{dateTime}</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span>{startsIn}</span>
          </div>

          <h1 className={styles.title}>{title}</h1>

          <div className={styles.description}>
            {descriptionParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className={index === 0 ? "text-lg font-medium" : ""}
              >
                {paragraph}
              </p>
            ))}

            {coverPoints.length > 0 && (
              <>
                <strong>In this session, we'll cover:</strong>
                <ul>
                  {coverPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div className={styles.personSection}>
            <h3>Hosts</h3>
            <div className={styles.personGrid}>
              {hosts.map((host, index) => (
                <Person
                  key={index}
                  name={host.name}
                  role={host.role}
                  image={host.image}
                />
              ))}
            </div>
          </div>

          <div className={styles.personSection}>
            <h3>Speakers</h3>
            <div className={styles.personGrid}>
              {speakers.map((speaker, index) => (
                <Person
                  key={index}
                  name={speaker.name}
                  role={speaker.role}
                  image={speaker.image}
                />
              ))}
            </div>
          </div>
        </main>

        {/* Right Column: Sticky Form */}
        <aside>
          {/* <div className={styles.formCard}>
            <h2>Register to Join</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className={styles.inputGroup}>
                <label>First name*</label>
                <input type="text" required />
              </div>
              <div className={styles.inputGroup}>
                <label>Last name*</label>
                <input type="text" required />
              </div>
              <div className={styles.inputGroup}>
                <label>Work email*</label>
                <input type="email" required />
              </div>
              <div className={styles.inputGroup}>
                <label>Company name*</label>
                <input type="text" required />
              </div>
              <div className={styles.inputGroup}>
                <label>Company Size</label>
                <select>
                  <option>Select size...</option>
                  <option>1-50</option>
                  <option>51-200</option>
                  <option>201+</option>
                </select>
              </div>

              <p className="text-[10px] text-zinc-500 mt-4 leading-tight">
                By clicking “Submit”, I agree to Alluvium’s{" "}
                <u>Terms of Service</u> and <u>Privacy policy.</u>
              </p>

              <button type="submit" className={styles.submitBtn}>
                SAVE MY SPOT
              </button>
            </form>
          </div> */}
          <LeadForm
            dataUrl={
              "https://lfmdec-zgpm.maillist-manage.com/ua/Optin?od=11287ecba0e4a5&zx=12ea52690&tD=1b6f519ef5ce49f1&sD=1b6f519ef5dc730f"
            }
          />
        </aside>
      </div>
    </section>
  );
};

export default EventDetail;
