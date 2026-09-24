"use client";
import React from "react";
import Layout from "components/layout";
import EventsBanner from "components/Alluvium-Redesign-2026/events/hero";
import UpcomingEvents from "components/Alluvium-Redesign-2026/events/upcomingEvents";
import UpcomingWebinars from "components/Alluvium-Redesign-2026/events/upcomingWebinars";
import OnDemandWebinars from "components/Alluvium-Redesign-2026/events/onDemandWebinars";
import Container from "components/Alluvium-Redesign-2026/common/container";
import HeroHeader from "components/Alluvium-Redesign-2026/events/heroHeader";
import ExploreMoreEvent from "components/Alluvium-Redesign-2026/events/exploreMoreEvent";

const EventBlog = () => {
  return (
    <>
      <Layout heroTheme="light">
        {/* <Container> */}
        <HeroHeader />
        <EventsBanner

        />
        <ExploreMoreEvent />
        {/* <UpcomingEvents /> */}
        <UpcomingWebinars />
        {/*<OnDemandWebinars /> */}
      </Layout>
    </>
  );
};

export default EventBlog;
