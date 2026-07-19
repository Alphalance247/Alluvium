"use client";
import React from "react";

import Layout from "components/layout";
import EventHero from "components/cloud-connect/EventHero";
import Register from "components/cloud-connect/Register";
import Schedule from "components/cloud-connect/Schedule";
import Speaker from "components/cloud-connect/Speaker";

const CloudConnect = () => {
  return (
    <>
      <Layout>
        <EventHero />
        <Schedule />
        <Speaker />
        {/* <Register /> */}
      </Layout>
    </>
  );
};

export default CloudConnect;
