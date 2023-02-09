import React from "react";
import Link from "next/link";
import styles from "../styles/hero.module.scss";

const Hero = () => {
  return (
    <>
      <div className={`container-fluid ${styles.cover}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1>We are Trusted Atlassian Migration Experts</h1>
              <p>
                At Alluvium, we believe in delivering exceptional services and
                products to our clients. As Trusted Atlassian Experts, we have
                honed our skills and expertise in providing end-to-end solutions
                for businesses leveraging the Atlassian suite of tools{" "}
              </p>
              <Link href={'#consultationForm'}>
                <a>Schedule a Call</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
