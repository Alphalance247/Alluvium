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
          <div
            style={{
              position: "absolute",
              zIndex: "30",
              bottom: "0",
            }}
          >
            <Image
              src="/assets/team2024/shap.png"
              width={1400}
              height={200}
              alt="shapes"
            />
          </div>
        </div>
      </section>
      <section className={styles.section2}>
        <p>
          Atlassian premier enterprise teamwork conference, is heading to Las
          Vegas from April 30–May 2. Join us for three days of networking,
          upgrading your professional skills, and hearing from the best vvin the
          business. Choosefrom 100+ sessions that will explorehow to innovate,
          collaborate, and ship digital services like never before with the
          power of the Atlassian platform. We’re so excited to connect with you
          in Vegas! As an official Team ’24sponsor, get the conversation started
          with your network and build buzzaround the event with these assets
          created just for you.
        </p>
      </section>
    </>
  );
};

export default Hero;
