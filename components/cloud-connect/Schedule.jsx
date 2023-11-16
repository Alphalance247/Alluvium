import styles from "../../styles/eventpage.module.scss";

const Schedule = () => {
  return (
    <div className={`container mx-auto ${styles.container}`}>

      <div className={styles.schedule}>
        <div className={styles.empty}>
          <h1 className={styles.aboutPage}>Agenda</h1>
          <div className={styles.about}>
            <div className={styles.text}>
              Cloud Connect brings together Atlassian Partners, customers, and industry experts to explore the latest developments in the Atlassian ecosystem, with a primary focus on cloud solutions and their significance in shaping the future of collaboration and productivity.
              The event also shows  how Atlassian products can help in Africa’s Journey to the cloud.
            </div>
          </div>
        </div>
        <div className={styles.progamEvent}>

          <div className={styles.highlight}>
            <div className={styles.time}>
              <p className={styles.time1}>10:00AM</p>
              {/* <p className={styles.time2}>10:40AM</p> */}
              <div className={styles.time3}>
                <span>10:40AM</span>
              </div>
              <div className={styles.time4}>
                <span>12:20PM</span>
              </div>

              <div className={styles.time5}>
                <span>1:40PM</span>
              </div>
              <div className={styles.time6}>
                <span>3:20PM</span>
              </div>
              {/* <div className={styles.time7}>
                <span>4:00PM</span>
              </div>
              <div className={styles.time8}>
                <span>7:00PM</span>
              </div> */}
            </div>
            <div className={styles.divider}>
              {/* <img
                className={styles.divider}
                src="/cloudImg/divider2.png"
                height="1130px"
                width="12px"
                alt="divider"
              /> */}
            </div>

            <div className={styles.speech_cover}>
              <div className={styles.speech}>
              <p className={styles.speechs}>Welcome / Keynote</p>
              <div className={styles.encompass}>
                  <div className={styles.inner}>
                    <p><b>Taiwo Ojo</b></p>
                  </div>
                </div>
              </div>
             
              {/* <p className={styles.speech0}>Migration Run through</p> */}
              <div className={styles.speech1}>
                <p className={styles.speechs}>Migrations and Cloud</p>
                <div className={styles.encompass}>
                  {/* <img
                    src="/cloudImg/speakerImage.jpg"
                    className={styles.img}
                    alt="Speaker"
                  /> */}
                  <div className={styles.inner}>
                    <p>Speaker 1: <b>Erica Larson</b></p>
                    <p>Speaker 2: <b>Rodney Nissen</b></p>
                    <p>Speaker 2: <b>Naj Irshrad</b></p>
                    {/* <p><span className={styles.topic}>Topic:</span> Remote Work and Digital Nomadism in Africa</p> */}
                  </div>
                </div>
              </div>
              <div className={styles.speech2}>
                <p className={styles.speechs}>AI and ITSM</p>
                <div className={styles.encompass}>
                  {/* <img
                    src="/cloudImg/speakerImage.jpg"
                    className={styles.img}
                    alt="Speaker"
                  /> */}
                  <div className={styles.inner}>
                    <p>Speaker 1: <b>Olaniyan Remilekun Desmond</b></p>
                    <p>Speaker 2: <b>Katarzyna Zofia Pawlak</b></p>
                    <p>Speaker 3: <b>David Oladeji</b></p>
                    <p>
                      {/* <span className={styles.topic}>Topic:</span> Building High-Performing Remote Teams: Best
                      Practices and Strategies */}
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.speech3}>
                <p className={styles.speechs}>African & Atlassian</p>
                <div className={styles.encompass}>
                  {/* <img
                    src="/cloudImg/speakerImage.jpg"
                    className={styles.img}
                    alt="Speaker"
                  /> */}
                  <div className={styles.inner}>
                    <p>Speaker 1: <b>Hon. Seun Fakuade</b></p>
                    <p>Speaker 2: <b>Katakyie Kojo Desu</b></p>
                    <p>Speaker 3: <b>Kevin Tuei</b></p>
                    {/* <p><span className={styles.topic}>Topic:</span> </p>
                    <p>
                      1. Optimizing Service Desk Operations in ITSM
                      Implementation
                    </p>
                    <p>
                      2. ITSM Integration with DevOps and Agile: Enhancing
                      Service Deliver
                    </p> */}
                  </div>
                </div>
              </div>
              <div className={styles.speech4}>
                <p className={styles.speechs}>Panel</p>
                <div className={styles.encompass}>
                  {/* <img
                    src="/cloudImg/speakerImage.jpg"
                    className={styles.img}
                    alt="Speaker"
                  /> */}
                  <div className={styles.inner}>
                    <p>Panel 1: Benefits of modern Infastructure: <br /> Host - <b>Adeola Lawal</b></p>
                    <p>Panel 2: African innovation to solve Africa's Problems: <br /> Host - <b>Babade Adewole</b></p>
                    {/* <p><span className={styles.topic}>Topic:</span></p>
                    <p>
                      1. Customization and Localization: Adapting Atlassian
                      Tools to African Business Context
                    </p>
                    <p>
                      2. Unleashing the Potential: Growing Atlassian's Presence
                      in the African Market
                    </p>
                    <p>3. ITSM implementation in Africa - On point</p> */}
                  </div>
                </div>
              </div>
              <div className={styles.speech6}>
                <p className={styles.speechs}>Closing remark</p>
                <div className={styles.encompass}>
                  <div className={styles.inner}>
                    <b>Wale Olojo</b>
                    {/* <p>Speaker: <b>Wale Olojo</b></p> */}
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
