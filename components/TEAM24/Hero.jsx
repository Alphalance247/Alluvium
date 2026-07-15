import styles from "../../styles/team.module.scss";
import Image from "next/legacy/image";

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
              {/* <p className={styles.withlove}>From Africa with Love</p> */}
              <h1 className={styles.heading}>
              Order now to get your African Gele/Fila at
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
              Pick up at Booth 53
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
    </>
  );
};

export default Hero;
