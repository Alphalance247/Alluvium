"use client";
import React from "react";
import Layout from "components/layout";
import EventsBanner from "components/Alluvium-Redesign-2026/events/hero";
import UpcomingEvents from "components/Alluvium-Redesign-2026/events/upcomingEvents";
import UpcomingWebinars from "components/Alluvium-Redesign-2026/events/upcomingWebinars";
import OnDemandWebinars from "components/Alluvium-Redesign-2026/events/onDemandWebinars";

const EventBlog = () => {
  return (
    <>
      <Layout>
        <EventsBanner
          backgroundImage={
            "/assets/Alluvium-Redesign-2026/Events/heroBanner.png"
          }
        />

        <UpcomingEvents />
        <UpcomingWebinars />
        <OnDemandWebinars />
      </Layout>
    </>
  );
};

export default EventBlog;
