import { useRef } from "react";
import styles from "../../styles/team.module.scss";
import Image from "next/image";
// import registerRef from './Register'

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
            //   className="absolute top-0 left-0 w-[100%] h-[100%] z-[10]"
            className={styles.overlay}
            style={{
              backgroundColor: "#11202D",
            }}
          ></div>

          <div
            //   className=" text-black text-center absolute z-20 top-[50%] left-[50%]"
            className={styles.content}
            style={{ transform: " translate(-50%, -50%)" }}
          >
            <Image
              src="/assets/team2024/team24.jpg"
              alt="team"
              width={410}
              height={150}
              className={styles.imageBorder}
            />
            <p>
              APRIL 30 - MAY 2 <span>|</span> Las Vegas and digitally
            </p>
            <button onClick={handdleClick}>Register</button>
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
            width={862}
            height={88}
            alt="frames"
            className={styles.img}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
