import styles from "../../styles/team.module.scss";
import Image from "next/image";

const Hero = ({ }) => {
  const handdleClick = (e) => {
    e.preventDefault();
    const registerSection = document.getElementById("register-section");

    registerSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section>
        <div
          className={styles.hero}
          style={{
            background: "#11202D",
          }}
        >
          <div
            className={`container-xxl mx-auto position-relative ${styles.centercontent}`}
          >
            <div
              className={`container-fluid mx-auto ${styles.content}`}
              style={{ transform: " translate(-50%, -50%)" }}
            >
              <p className={styles.withlove}>From Africa with Love</p>
              <h1 className={styles.heading}>
                Get ready for an unforgettable moment at
              </h1>
              <div className={styles.imageBorders}>
                <Image
                  src="/assets/team2024/team.png"
                  alt="team"
                  width={337}
                  height={96}
                  className={styles.imageBorder}
                />
              </div>
              <p className={styles.eventdate}>
                APRIL 30 - MAY 2 <span>|</span> Las Vegas and digitally
              </p>
            </div>
            <div style={{ position: "absolute", bottom: "0px", left: "0" }} className={styles.menCap}>
              <div className={styles.caps}>
                <Image
                  src="/assets/team2024/men.png"
                  width={400/1.1}
                  height={350/1.1}
                  alt=""
                  loading="eager"
                  priority
                  className=""
                />
              </div>
            </div>
            <div style={{ position: "absolute", bottom: "0px", right: "0" }} className={`${styles.menCap} ${styles.caps}`}>
              <Image
                src="/assets/team2024/ladies.png"
                width={400}
                height={350}
                alt=""
                className={styles.menCap}
                loading="eager"
                priority
              />
            </div>
          </div>
        </div>
        <div
          style={{ background: "#009BC0", width: "100%", height: "48px" }}
          className={styles.bordershape}
        ></div>
      </section>
      <section className={styles.section2}>
        <div className="container mx-auto">
          <h2>Alluvium at Team 24</h2>
          <p>
            Experience the love from Africa as we unite to celebrate the power
            of teamwork and innovation at Vegas on April 30th - May 2nd.
            Discover our exceptional Atlassian solutions firsthand and engage
            with our passionate team, who will be ready to share insights,
            provide expert guidance, and help you up your team game. Join us at
            team‘24 where cultures converge and ideas flourish. Together, let's
            create a memorable event filled with meaningful connections,
            transformative experiences, and a shared vision for a brighter
            future. We can't wait to meet you at stand 53 and present to you our
            exclusive souvenirs as a special gesture from Alluvium. See you
            there!
          </p>
          <div className={styles.imgframe}>
            <Image
              src="/assets/team2024/Frame.png"
              width={415}
              height={69}
              alt="frames"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
