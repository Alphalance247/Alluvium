import styles from "../../styles/team.module.scss";
import Image from "next/image";

const Hero = ({}) => {
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
            backgroundImage: 'url("/assets/team2024/heroImg.png")',
          }}
        >
          <div
            className={styles.overlay}
            style={{
              backgroundColor: "#11202D",
            }}
          ></div>

          <div
            className={`container mx-auto ${styles.content}`}
            style={{ transform: " translate(-50%, -50%)" }}
          >
            <h1 className={styles.heading}>
              Get Ready for Alluvium's Spectacular Presence at
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
            <p>
              APRIL 30 - MAY 2 <span>|</span> Las Vegas and digitally
            </p>
          </div>
        </div>
      </section>
      <section className={styles.section2}>
        <h2>Alluvium, With Love From Africa!</h2>
        <p>
          Experience the love from Africa as we unite to celebrate the power of
          teamwork and innovation at Vegas on April 30th - May 2nd. Discover our
          exceptional Atlassian solutions firsthand and engage with our
          passionate team, who will be ready to share insights, provide expert
          guidance, and help you up your team game. Join us at team‘24 where
          cultures converge and ideas flourish. Together, let's create a
          memorable event filled with meaningful connections, transformative
          experiences, and a shared vision for a brighter future. We can't wait
          to meet you at stand 53 and present to you our exclusive souvenirs as
          a special gesture from Alluvium. See you there!
        </p>
        <div>
          <img
            src="/assets/team2024/Frame.png"
            width={379}
            height={105}
            alt="frames"
            className={styles.img}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
