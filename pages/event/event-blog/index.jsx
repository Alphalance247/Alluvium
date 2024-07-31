import React, { Component } from "react";
import Head from "next/head";
import Layout from "components/layout";
import HeroCarousel from "components/HeroCarousel";
import Featured from "components/Featured";
import AtPartner from "components/event/EventHero";
import EventHero from "components/event/EventHero";
import DateVen from "components/event/DateVen";
import Gitex24 from "components/event/Gitex24";
import Gitex24Carousel from "components/event/Gitex24Carousel";
import Team24 from "components/event/Team24";
import Expo from "components/event/Expo";
import Team24Carousel from "components/event/atlassianTeam24Carousel";
import CloudCarousel from "components/event/cloudconnectcarousel";
import CloudConnectCarousel from "components/event/cloudconnectcarousel";
import Connect from "components/event/connect23";
import LagosExpoCarousel from "components/event/lagosExpoCarousel";
import GitexAfricaCarousel from "components/event/gitexAfricaCarousel";
import AtlassianTeam24Carousel from "components/event/atlassianTeam24Carousel";

const EventBlog = () => {
  // const giteximages = ["", "", "", "", ""];

  // const team24images = ["", "", "", "", ""];

  // const cloudconnect23images = ["", "", "", "", ""];

  // const expoimages = ["", "", "", "", ""];

  return (
    <>
      <Layout>
        <Head>
          <title>Event Blog | Alluvium</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="This is an Atlassian Partner Event focused on remote work. It conveys the idea of collaboration, growth, and adaptability in the context of a remote and distributed work landscape. The event highlights the role of Atlassian in helping teams to collectively embrace the opportunities and challenges of remote work, striving for excellence in a distributed work environment."
          />
          <meta
            name="keywords"
            content="Alluvium, alluvium, Cloud connect, alluvium event, cloud connect event, cloud, connect, team alluvium, atlassian products migration lab, migration, about alluvium, alluvians, cloud counter, Migration Experts, Software Consulting atlassian, confluence, jira"
          />
        </Head>
        <EventHero />
        <DateVen />
        <Gitex24 />
        <GitexAfricaCarousel />
        <Team24 />
        <AtlassianTeam24Carousel />
        {/* <Team24Carousel /> */}
        <Connect />
        <CloudConnectCarousel />
        <Expo />
        <LagosExpoCarousel />
      </Layout>
    </>
  );
};

export default EventBlog;
