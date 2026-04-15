import React from "react";
import Head from "next/head";
import Layout from "components/layout";
import EventsBanner from "components/Alluvium-Redesign-2026/events/hero";
import UpcomingEvents from "components/Alluvium-Redesign-2026/events/upcomingEvents";
import UpcomingWebinars from "components/Alluvium-Redesign-2026/events/upcomingWebinars";
import OnDemandWebinars from "components/Alluvium-Redesign-2026/events/onDemandWebinars";

const EventBlog = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Event Blog | Alluvium – Atlassian Partner Events</title>
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
        <EventsBanner
          backgroundImage={
            "/assets/Alluvium-Redesign-2026/Events/heroBanner.png"
          }
        />

        <UpcomingEvents />
        <UpcomingWebinars />
        <OnDemandWebinars />
        {/* <EventHero />
        <DateVen />
        <Gitex24 />
        <GitexAfricaCarousel />
        <Team24 />
        <AtlassianTeam24Carousel />
        <Connect />
        <CloudConnectCarousel />
        <Expo />
        <LagosExpoCarousel /> */}
      </Layout>
    </>
  );
};

export default EventBlog;
