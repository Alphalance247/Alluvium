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
import EventBlogCarousel from "components/event/EventBlogCarousel";
import Team24Carousel from "components/event/Team24Carousel";
import CloudCarousel from "components/event/cloudconnectcarousel";
import CloudConnectCarousel from "components/event/cloudconnectcarousel";
import ExpoCarousel from "components/event/ExpoCarousel";
import Connect from "components/event/connect23";

const EventBlog = () => {
  const giteximages = [
    "/assets/event/g1.png",
    "/assets/event/g2.png",
    "/assets/event/g3.png",
    "/assets/event/g4.png",
    "/assets/event/g5.png",
  ];

  const team24images = [
    "/assets/event/t1img.png",
    "/assets/event/t2img.png",
    "/assets/event/t3img.png",
    "/assets/event/t4img.png",
    "/assets/event/t5img.png",
  ];

  const cloudconnect23images = [
    "/assets/event/cloud1.png",
    "/assets/event/cloud2.png",
    "/assets/event/cloud3.png",
    "/assets/event/cloud4.png",
    "/assets/event/cloud5.png",
  ];

  const expoimages = [
    "/assets/event/expo1.png",
    "/assets/event/expo2.png",
    "/assets/event/expo3.png",
    "/assets/event/expo4.png",
    "/assets/event/expo5.png",
  ];

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
        {/* <EventBlogCarousel /> */}
        <Team24 />
        {/* <Team24Carousel /> */}
        <Connect />
        <CloudConnectCarousel />
        <Expo />
        {/* <ExpoCarousel /> */}
      </Layout>
    </>
  );
};

export default EventBlog;
