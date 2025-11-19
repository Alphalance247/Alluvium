import React from "react";
import Head from "next/head";
import Layout from "components/layout";
import EventHero from "components/event/EventHero";
import DateVen from "components/event/DateVen";
import Gitex24 from "components/event/Gitex24";
import Team24 from "components/event/Team24";
import Expo from "components/event/Expo";
import CloudConnectCarousel from "components/event/cloudconnectcarousel";
import Connect from "components/event/connect23";
import LagosExpoCarousel from "components/event/lagosExpoCarousel";
import GitexAfricaCarousel from "components/event/gitexAfricaCarousel";
import AtlassianTeam24Carousel from "components/event/atlassianTeam24Carousel";

const EventBlog = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>
            Event Blog | Alluvium – Atlassian Partner Events & Cloud Connect
          </title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Stay updated with Alluvium’s latest Atlassian partner events, Cloud Connect conferences, and industry expos. Discover insights on remote work, collaboration, and digital transformation from global technology gatherings."
          />
          <meta
            name="keywords"
            content="Alluvium, Atlassian partner, Cloud Connect, technology events, remote work, collaboration, digital transformation, Jira, Confluence, industry expo, team Alluvium, event blog."
          />
        </Head>
        <EventHero />
        <DateVen />
        <Gitex24 />
        <GitexAfricaCarousel />
        <Team24 />
        <AtlassianTeam24Carousel />
        <Connect />
        <CloudConnectCarousel />
        <Expo />
        <LagosExpoCarousel />
      </Layout>
    </>
  );
};

export default EventBlog;
