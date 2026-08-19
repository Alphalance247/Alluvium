import React from "react";
import Link from "next/link";
import styles from "../styles/welcomeToAlluvium.module.scss";
import { milestonesData } from "data";
import BookingCTA from "./Booking";

const WelcomeToAlluvium = () => {
  return (
    <>
      <div className={`container-fluid ${styles.cover}`}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6 mb-5 mb-md-0">
              <h2>Welcome to Alluvium</h2>
              <h3>Leading the Way in Data Migration Solutions</h3>

              <p>
                Welcome to Alluvium, where innovation meets expertise. We are a
                team of passionate professionals dedicated to providing
                businesses with cutting-edge solutions leveraging the Atlassian
                suite of tools. Our aim is to simplify the complexity of digital
                transformation and help our clients achieve their goals with
                ease and efficiency. At Alluvium, we believe in delivering more
                than just products and services. Click the “Learn More” button
                to dive into our comprehensive write-up and discover what sets
                us apart as a brand.{" "}
              </p>

              <Link
                href={"/about"}
                aria-label="Learn more about Alluvium"
                className={styles.learnButton}>
                
                  Learn About Us
                
              </Link>
            </div>
            <div className="col-md-6 ps-xl-5">
              <div className={styles.stats}>
                {milestonesData.map((milestone) => (
                  <div key={milestone.id}>
                    <h4>{milestone.value}</h4>
                    <p>{milestone.category}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <BookingCTA />
        </div>
      </div>
    </>
  );
};

export default WelcomeToAlluvium;
