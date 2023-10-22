import styles from "../../styles/eventpage.module.scss";

const Schedule = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.aboutPage}>About</h1>

      <div className={styles.about}>
        <div className={styles.conference}>
          <h1>Conference</h1>
          <h2>Alluvium</h2>
        </div>
        <div className={styles.text}>
          This is an Atlassian Partner Event focused on remote work. It conveys
          the idea of collaboration, growth, and adaptability in the context of
          a remote and distributed work landscape. The event highlights the role
          of Atlassian in helping teams to collectively embrace the
          opportunities and challenges of remote work, striving for excellence
          in a distributed work environment.
        </div>
      </div>

      <div className={styles.schedule}>
        <div className={styles.empty}></div>
        <div className={styles.progamEvent}>
          <h2>Schedule</h2>

          <div className={styles.highlight}>
            <div className={styles.time}>
              <p className={styles.speech1}>8:00AM</p>
              <p className={styles.speech2}>8:15AM</p>
              <div className={styles.speech3}>
                <span>10:00AM</span>
              </div>
              <div className={styles.speech4}>
                <span>12:00PM</span>
              </div>

              <div className={styles.speech5}>
                <span>1:00PM</span>
              </div>
              <div className={styles.speech6}>
                <span>2:00PM</span>
              </div>
              <div className={styles.speech7}>
                <span>4:00PM</span>
              </div>
            </div>
            <div>
              <img
                className={styles.divider}
                src="/cloudImg/divider.jpg"
                height="1112px"
                width="12px"
                alt="image1"
              />
            </div>

            <div className={styles.speech}>
              <p className={styles.speech}>Welcome Address</p>
              <p className={styles.speech}>Migration Run through</p>
              <div className={styles.speech}>
                <p className={styles.speechs}>Speaker Session</p>
                <div className={styles.encompass}>
                  <img
                    src="/cloudImg/image.jpg"
                    className={styles.img}
                    alt="image2"
                  />
                  <div className={styles.inner}>
                    <p>Nick:Agimudie</p>
                    <p>Topic:Remote Work and Digital Nomadism in Africa</p>
                  </div>
                </div>
              </div>
              <div className={styles.speech}>
                <p className={styles.speechs}>Speaker Session</p>
                <div className={styles.encompass}>
                  <img
                    src="/cloudImg/image.jpg"
                    className={styles.img}
                    alt="image3"
                  />
                  <div className={styles.inner}>
                    <p>Nick:Agimudie</p>
                    <p>
                      Topic: Building High-Performing Remote Teams: Best
                      Practices and Strategies
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.speech}>
                <p className={styles.speechs}>Speaker Session</p>
                <div className={styles.encompass}>
                  <img
                    src="/cloudImg/image.jpg"
                    className={styles.img}
                    alt="image5"
                  />
                  <div className={styles.inner}>
                    <p>Nick:Agimudie</p>
                    <p>Topic:</p>
                    <p>
                      1. Optimizing Service Desk Operations in ITSM
                      Implementation
                    </p>
                    <p>
                      2. ITSM Integration with DevOps and Agile: Enhancing
                      Service Deliver
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.speech}>
                <p className={styles.speechs}>Speaker Session</p>
                <div className={styles.encompass}>
                  <img
                    src="/cloudImg/image.jpg"
                    className={styles.img}
                    alt="image6"
                  />
                  <div className={styles.inner}>
                    <p>Nick:Agimudie</p>
                    <p>Topic:</p>
                    <p>
                      1. Customization and Localization: Adapting Atlassian
                      Tools to African Business Context
                    </p>
                    <p>
                      2. Unleashing the Potential: Growing Atlassian's Presence
                      in the African Market
                    </p>
                    <p>3. ITSM implementation in Africa - On point</p>
                  </div>
                </div>
              </div>
              <div className={styles.speech}>
                <p className={styles.speechs}>Speaker Session</p>
                <div className={styles.encompass}>
                  <img
                    src="/cloudImg/image.jpg"
                    className={styles.img}
                    alt="image7"
                  />
                  <div className={styles.inner}>
                    <p>Nick: Abdul Azeez</p>
                    <p>Topic:</p>
                    <p>
                      1.Customization and Localization: Adapting Atlassian Tools
                      to African Business Context
                    </p>
                    <p>
                      2. Unleashing the Potential: Growing Atlassian's Presence
                      in the African Market
                    </p>
                    <p>3. ITSM implementation in Africa - On point</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
