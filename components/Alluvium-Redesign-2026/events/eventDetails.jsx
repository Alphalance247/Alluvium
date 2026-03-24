import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/events/event-details.module.scss";

const Person = ({ name, role }) => (
  <div className={styles.personCard}>
    <img src="/assets/Alluvium-Redesign-2026/Events/1a.png" alt={name} />
    <div>
      <div className={styles.name}>{name}</div>
      <div className={styles.role}>{role}</div>
    </div>
  </div>
);

const EventDetail = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Column: Info */}
        <main>
          <div className={styles.badgeContainer}>
            <span>THU, MAR 26, 2026 7:00 PM WAT</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span>STARTS IN 9 DAYS</span>
          </div>

          <h1 className={styles.title}>
            Modern ITSM with Atlassian's Service Collection
          </h1>

          <div className={styles.description}>
            <p className="text-lg font-medium">
              In this free 1-hour advanced webinar, Alluvium, Atlassian
              Certified Experts demonstrate Atlassian’s full suite of ITSM
              tools.
            </p>
            <p>
              Atlassian Team'26 is back in Anaheim, CA - This unique event will
              drive into how AI, teamwork, and transformative technologies can
              maximize team impact.
            </p>

            <strong>In this session, we’ll cover:</strong>
            <ul>
              <li>The biggest shifts shaping research in 2026</li>
              <li>How researchers are stepping into strategic roles</li>
              <li>Where human judgment becomes your edge in an AI era</li>
              <li>What it takes to scale research with the right systems</li>
            </ul>
          </div>

          <div className={styles.personSection}>
            <h3>Hosts</h3>
            <div className={styles.personGrid}>
              <Person
                name="Rachel Brown"
                role="Atlassian Certified Expert and Presales Solution Engineer"
              />
              <Person
                name="Rachel Brown"
                role="Atlassian Certified Expert and Presales Solution Engineer"
              />
            </div>
          </div>

          <div className={styles.personSection}>
            <h3>Speakers</h3>
            <div className={styles.personGrid}>
              <Person
                name="Rachel Brown"
                role="Atlassian Certified Expert and Presales Solution Engineer"
              />
              <Person
                name="Rachel Brown"
                role="Atlassian Certified Expert and Presales Solution Engineer"
              />
            </div>
          </div>
        </main>

        {/* Right Column: Sticky Form */}
        <aside>
          <div className={styles.formCard}>
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
          </div>
        </aside>
      </div>
    </section>
  );
};

export default EventDetail;
