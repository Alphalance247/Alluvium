"use client";
import React, { useEffect, useState } from "react";
import Layout from "components/layout";
import Hero from "components/TEAM24/Hero";
import EventDetails from "components/TEAM24/EventDetails";
import Register from "components/TEAM24/Register";
// import axios from "axios";

const Team24 = () => {
  // const [registrationLimitExceeded, setRegistrationLimitExceeded] = useState(false);

  // useEffect(() => {
  //   axios.get("https://vast.ec2.alluvium.net/teams24/get-record-count").then((res)=>{
  //     if(res.status !== 200){
  //       console.error(err);
  //       console.log("Unable to fetch registration record");
  //     }
  //     if(res.status === 200){
  //       setRegistrationLimitExceeded(res?.data?.max_count_reached);
  //     }
  //   }).catch((err)=>{
  //     console.error(err);
  //     console.log("Unable to fetch registration record");
  //   });
  // }, [])

  return (
    <>
      <Layout withoutForm={true}>
        <Hero />
        <Register />
        <EventDetails />
        {/* {!registrationLimitExceeded && <Register setRegistrationLimitExceeded={setRegistrationLimitExceeded} />} */}
      </Layout>
    </>
  );
};

export default Team24;
