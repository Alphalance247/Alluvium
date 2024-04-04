import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/hero.module.scss";
import Badges from "../badges"

const Banner = () => {
  return (
    <>
      <div style={{color:"white", backgroundImage: "url('assets/team2024/b_g.png')", height:"733px"}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
              <Image
                src="/assets/team2024/ateam.png"
                alt="event"
                width={337}
                height={150}
                
                style={{marginTop:"20px"}}
              />

              <h1 className="text-bold" style={{width:"413px", fontSize:"64px", marginTop:"20px", letterSpacing:"-1%"}}>
              Alluvium
              </h1>
              <h1 className="text-bold" style={{width:"413px", fontSize:"64px", letterSpacing:"-1%", color:"#E37915"}}>
              from Africa With Love 
              </h1>

            <div>
            <button className="btn" style={{color:"#fff", backgroundColor:"#E37915", marginBottom:"40px", width:"158px", height:"54px"}}>Register</button>
            </div>

            <div style={{marginTop:"30px"}}>
            <Image
                src="/assets/team2024/badges.png"
                alt="event"
                width={415}
                height={69}
                
                
              />
            </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Banner;
