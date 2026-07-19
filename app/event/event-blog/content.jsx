"use client";
import React from "react";
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
