import React from "react";
import styles from "../../../styles/AlluviumRedesign2025/swp/swp.module.scss";
import Image from "next/image";

const MeetBoard = () => {
  return (
    <section className={styles.meetBoardSection} id="alluvium-team">
      <div className={styles.meetBoardContainer}>
        <div className={styles.meetBoardContent}>
          {/* Left Section - Image */}
          <div></div>
          <div>
            <h2 className={styles.meetBoardTitle}>
              Hear from Taiwo Ojo, CEO, Alluvium
            </h2>
            <div className={styles.meetBoardImageWrapper}>
              <div className={styles.meetBoardImagePlaceholder}>
                <Image
                  width={707}
                  height={473}
                  src="/assets/SWP/Frame.png"
                  alt=""
                />
              </div>
              <div className={styles.meetBoardInfo}>
                <h3 className={styles.meetBoardName}>Taiwo Ojo</h3>
                <p className={styles.meetBoardRole}>CEO, Cofounder</p>
              </div>
            </div>

            {/* Right Section - Content */}
            <div className={styles.meetBoardDetails}>
              <h3 className={styles.meetBoardSessionTitle}>
                At the summit, Taiwo Ojo, CEO of Alluvium, will speak and share
                "Building a Skills-Based Operating Model: Lessons from Early
                Movers."
              </h3>

              <p className={styles.meetBoardSessionDescription}>
                In this session, you will discover:
              </p>

              <ul className={styles.meetBoardBullets}>
                <li className={styles.meetBoardBulletItem}>
                  What early adopters of skills based planning tried first , and
                  what actually worked.
                </li>
                <li className={styles.meetBoardBulletItem}>
                  The hard parts of operationalising skills first planning at
                  scale:
                  <ul className={styles.meetBoardSubBullets}>
                    <li>Governance and decision rights</li>
                    <li>Data and architecture for a trustworthy skills view</li>
                    <li>Workflows that fit how leaders already work</li>
                  </ul>
                </li>
                <li className={styles.meetBoardBulletItem}>
                  The common traps organisations fall into when they move too
                  fast , or not fast enough.
                </li>
              </ul>
            </div>

            {/* Get in touch */}
            <div className={styles.getInTouchBox}>
              <h3 className={styles.getInTouchTitle}>Join us in London</h3>
              <div className={styles.getInTouchDetails}>
                <p className={styles.getInTouchDetail}>
                  Event: Strategic Workforce Planning Summit London 2026
                </p>
                <p className={styles.getInTouchDetail}>Date: 19 March 2026</p>
                <p className={styles.getInTouchDetail}>
                  Location: The Brewery, London
                </p>
              </div>
              <p className={styles.getInTouchDescription}>
                If you're attending, add Taiwo Ojo's session to your agenda and
                connect with the Alluvium team on site.
              </p>
              <p className={styles.getInTouchRegister}>
                Register now at{" "}
                <a
                  href="http://swpsummit.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.getInTouchLink}
                >
                  http://swpsummit.com/
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetBoard;
