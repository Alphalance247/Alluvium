import React from "react";
import Head from "next/head";
import Layout from "components/layout";
import Hero from "components/TEAM24/Hero";
import EventDetails from "components/TEAM24/EventDetails";
import Register from "components/TEAM24/Register";

const TeamConnect = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Team"24 | Alluvium</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Experience Alluvium’s presence at Team ‘24, a remarkable event celebrating the synergy of teamwork and innovation. Join us in Las Vegas or digitally from April 30th to May 2nd to explore our outstanding Atlassian solutions, connect with our dedicated team, and inspire life-changing ideas. Register now to secure your exclusive African-inspired souvenir."
          />
          <meta
            name="keywords"
            content="Alluvium, Team '24', Atlassian, Teamwork and Innovation, Las Vegas, Digital Event, Atlassian Solutions, Dedicated Team, Africa, Africa at Team ‘24, Alluvium at Team ‘24, African-inspired Souvenir, Collaboration, Growth, Networking, Technology Conference, Professional Development"
          />
        </Head>
        <Hero />
        <EventDetails />
        <Register />
      </Layout>
    </>
  );
};

export default TeamConnect;
