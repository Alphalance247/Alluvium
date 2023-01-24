import React from "react";
import styles from "../styles/hero.module.scss";

const Hero = () => {
    return (
        <>
            <div className={`container-fluid ${styles.cover}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1>We are Trusted Atlassian Migration Experts</h1>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec </p>
                            <button>Schedule a Call</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Hero;